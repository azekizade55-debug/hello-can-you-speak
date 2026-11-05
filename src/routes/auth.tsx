import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin Login — TEOM TRAVEL" },
      { name: "robots", content: "noindex, nofollow" },
      {name:"description",content:"Secure staff access to TEOM TRAVEL booking inquiries."},
      {property:"og:title",content:"Admin Login — TEOM TRAVEL"},
      {property:"og:description",content:"Secure staff access to TEOM TRAVEL booking inquiries."},
      {property:"og:type",content:"website"},
      {name:"twitter:card",content:"summary_large_image"},
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/admin" },
        });
        if (error) throw error;
        toast.success("Account created. You can sign in now.");
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Signed in.");
        navigate({ to: "/admin" });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Authentication failed";
      toast.error(msg);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="min-h-screen bg-navy-950 pt-28 pb-16 text-white">
      <div className="container-page max-w-md">
        <Link to="/" className="text-sm text-white/60 hover:text-gold-400">← Back to site</Link>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h1 className="font-display text-3xl font-semibold">Admin access</h1>
          <p className="mt-2 text-sm text-white/60">
            Sign in to manage bookings for TEOM TRAVEL.
          </p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold-500"
                autoComplete="email"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-gold-500"
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
              />
            </label>
            <button
              type="submit"
              disabled={busy}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-gold-400 disabled:opacity-60"
            >
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-4 text-xs text-white/60 hover:text-gold-400"
          >
            {mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
          </button>
          <p className="mt-4 text-xs text-white/40">
            The first account is not automatically an admin. After creating it, grant the admin role in the database.
          </p>
        </div>
      </div>
    </section>
  );
}
