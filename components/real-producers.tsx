import { MessageSquare, Compass, Users, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: MessageSquare,
    title: "Natural phrasing that sounds local and credible",
    description:
      "No awkward wording, no out-of-place expressions. Every video sounds like it came from someone who actually works in your market.",
  },
  {
    icon: Compass,
    title: "Understands your market, clients, and competition",
    description:
      "A guided conversation goes deeper than any script or prompt — because your producer already knows the terrain you&apos;re selling in.",
  },
  {
    icon: Users,
    title: "Comfortable conversation, better content",
    description:
      "Person-to-person delivery pulls out the viral, authentic answers a solo camera or AI voice never gets to.",
  },
  {
    icon: ShieldCheck,
    title: "Audience trust starts with authenticity",
    description:
      "Buyers can tell when a video feels off. Ours never do — because a real person made them, on purpose, for your market.",
  },
];

export function RealProducers() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            Real Producers
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            Why real U.S.-based producers out-perform AI scripts and UGC apps.
          </h2>
          <p className="mt-5 text-base text-muted-foreground text-pretty sm:text-lg">
            Authentic delivery isn&apos;t a nice-to-have — it&apos;s the
            difference between videos that connect and videos that get scrolled
            past. Your audience can tell when something feels off. Our producers
            make sure it never does.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {points.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-brand-violet/30 hover:shadow-[0_20px_50px_-25px_rgba(11,29,81,0.25)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet transition-colors group-hover:bg-brand-violet group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3
                className="mt-5 text-lg font-semibold text-brand-blue"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="mt-2 text-[15px] leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
