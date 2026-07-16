import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={SITE.waLink("Hello! I'd like to ask about the Istanbul tour.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-400 animate-float-slow"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 rounded-full bg-emerald-500/40 blur-xl" />
    </a>
  );
}
