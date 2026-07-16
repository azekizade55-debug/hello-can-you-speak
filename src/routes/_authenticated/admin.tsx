import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  LogOut,
  RefreshCw,
  MessageCircle,
  Mail,
  Trash2,
  Filter,
  Search,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Explore Istanbul" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

type Booking = {
  id: string;
  first_name: string;
  last_name: string;
  country: string;
  phone: string;
  whatsapp: string | null;
  email: string;
  travel_date: string;
  adults: number;
  children: number;
  room_type: string;
  special_requests: string | null;
  status: "pending" | "confirmed" | "cancelled";
  created_at: string;
};

const STATUSES = ["all", "pending", "confirmed", "cancelled"] as const;
type StatusFilter = (typeof STATUSES)[number];

function AdminPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return;
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", u.user.id)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!data);
    })();
  }, []);

  const { data: bookings, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["bookings"],
    enabled: isAdmin === true,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Booking[];
    },
  });

  const filtered = useMemo(() => {
    if (!bookings) return [];
    return bookings.filter((b) => {
      if (filter !== "all" && b.status !== filter) return false;
      if (search) {
        const s = search.toLowerCase();
        return (
          b.first_name.toLowerCase().includes(s) ||
          b.last_name.toLowerCase().includes(s) ||
          b.email.toLowerCase().includes(s) ||
          b.phone.includes(search) ||
          b.country.toLowerCase().includes(s)
        );
      }
      return true;
    });
  }, [bookings, filter, search]);

  async function signOut() {
    await supabase.auth.signOut();
    qc.clear();
    navigate({ to: "/auth" });
  }

  async function updateStatus(id: string, status: Booking["status"]) {
    const { error } = await supabase.from("bookings").update({ status }).eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Status updated");
    refetch();
  }

  async function remove(id: string) {
    if (!confirm("Delete this booking permanently?")) return;
    const { error } = await supabase.from("bookings").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    refetch();
  }

  if (isAdmin === null) {
    return (
      <div className="min-h-screen bg-navy-50/40 pt-32 text-center text-muted-foreground">Loading…</div>
    );
  }

  if (isAdmin === false) {
    return (
      <div className="min-h-screen bg-navy-50/40 pt-32">
        <div className="container-page max-w-lg text-center">
          <h1 className="font-display text-3xl font-semibold text-navy-900">Not an admin yet</h1>
          <p className="mt-3 text-muted-foreground">
            Your account is signed in but doesn't have the admin role. Ask the site owner to grant you access, or grant it directly in the database (user_roles table) and reload this page.
          </p>
          <button
            onClick={signOut}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-50/40 pt-24 pb-16">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Admin</div>
            <h1 className="mt-2 font-display text-3xl md:text-4xl font-semibold text-navy-900">Bookings</h1>
            <p className="text-sm text-muted-foreground">Manage reservations and update their status.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => refetch()}
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium hover:bg-navy-50"
            >
              <RefreshCw className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`} /> Refresh
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium hover:bg-navy-50"
            >
              View site
            </Link>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white hover:bg-navy-800"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-4">
          <StatCard label="Total" value={bookings?.length ?? 0} />
          <StatCard label="Pending" value={bookings?.filter((b) => b.status === "pending").length ?? 0} tone="amber" />
          <StatCard label="Confirmed" value={bookings?.filter((b) => b.status === "confirmed").length ?? 0} tone="emerald" />
          <StatCard label="Cancelled" value={bookings?.filter((b) => b.status === "cancelled").length ?? 0} tone="red" />
        </div>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold capitalize transition ${
                  filter === s
                    ? "bg-navy-900 text-white"
                    : "bg-white text-navy-800 border border-navy-100 hover:bg-navy-50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, phone…"
              className="w-full md:w-72 rounded-full border border-navy-100 bg-white pl-9 pr-4 py-2 text-sm outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {isLoading && <div className="text-center text-sm text-muted-foreground py-10">Loading bookings…</div>}
          {!isLoading && filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-navy-200 bg-white p-10 text-center text-sm text-muted-foreground">
              No bookings match your filters yet.
            </div>
          )}
          {filtered.map((b) => (
            <BookingRow key={b.id} b={b} onStatus={updateStatus} onDelete={remove} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, tone }: { label: string; value: number; tone?: "amber" | "emerald" | "red" }) {
  const toneCls =
    tone === "amber"
      ? "text-amber-600"
      : tone === "emerald"
      ? "text-emerald-600"
      : tone === "red"
      ? "text-red-600"
      : "text-navy-900";
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-5">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className={`mt-1 font-display text-3xl font-semibold ${toneCls}`}>{value}</div>
    </div>
  );
}

function BookingRow({
  b,
  onStatus,
  onDelete,
}: {
  b: Booking;
  onStatus: (id: string, s: Booking["status"]) => void;
  onDelete: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const waNumber = (b.whatsapp || b.phone).replace(/\D/g, "");
  const waMsg = `Hi ${b.first_name}, this is Explore Istanbul about your booking for ${b.travel_date}.`;
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;

  const badge =
    b.status === "confirmed"
      ? "bg-emerald-100 text-emerald-700"
      : b.status === "cancelled"
      ? "bg-red-100 text-red-700"
      : "bg-amber-100 text-amber-700";

  return (
    <div className="rounded-2xl border border-navy-100 bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 text-left hover:bg-navy-50/50"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-display text-lg font-semibold text-navy-900 truncate">
              {b.first_name} {b.last_name}
            </span>
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${badge}`}>
              {b.status}
            </span>
          </div>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>{b.country}</span>
            <span>{b.email}</span>
            <span>{b.phone}</span>
            <span>Travel: {b.travel_date}</span>
            <span>
              {b.adults} adult{b.adults > 1 ? "s" : ""}
              {b.children > 0 && `, ${b.children} child${b.children > 1 ? "ren" : ""}`}
            </span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground shrink-0">
          {new Date(b.created_at).toLocaleDateString("en-GB")}
        </div>
      </button>

      {open && (
        <div className="border-t border-navy-100 bg-navy-50/40 p-5">
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <Detail label="Room type" value={b.room_type} />
            <Detail label="WhatsApp" value={b.whatsapp || "—"} />
            <Detail label="Special requests" value={b.special_requests || "—"} full />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-400"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp customer
            </a>
            <a
              href={`mailto:${b.email}?subject=${encodeURIComponent(`Your ${SITE.name} booking`)}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-xs font-semibold text-navy-900 hover:bg-navy-50"
            >
              <Mail className="h-3.5 w-3.5" /> Email
            </a>
            <div className="ml-auto flex flex-wrap gap-2">
              <select
                value={b.status}
                onChange={(e) => onStatus(b.id, e.target.value as Booking["status"])}
                className="rounded-full border border-navy-200 bg-white px-3 py-2 text-xs font-medium"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <button
                onClick={() => onDelete(b.id)}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-3.5 w-3.5" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Detail({ label, value, full }: { label: string; value: string; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm text-navy-900 whitespace-pre-wrap">{value}</div>
    </div>
  );
}
