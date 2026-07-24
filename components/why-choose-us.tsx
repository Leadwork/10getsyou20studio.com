import {
  Zap,
  Wand2,
  Share2,
  Heart,
  Palette,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast turnaround",
    description:
      "A workflow designed around real estate timelines — so your listings never wait on content.",
  },
  {
    icon: Wand2,
    title: "Professional editing",
    description:
      "Clean cuts, color, captions, and sound design across every deliverable.",
  },
  {
    icon: Share2,
    title: "Optimized for social media",
    description:
      "Formatted natively for each platform — Reels, Shorts, TikTok, and Facebook.",
  },
  {
    icon: Heart,
    title: "Designed for engagement",
    description:
      "Hooks, pacing, and structure built to keep viewers watching to the end.",
  },
  {
    icon: Palette,
    title: "Consistent branding",
    description:
      "A recognizable look and tone across every video, tailored to how you show up.",
  },
  {
    icon: ShieldCheck,
    title: "Straightforward process",
    description:
      "Clear scope, clear pricing, and a single point of contact from brief to delivery.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            Why Agents Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            Built for how real estate professionals actually work.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet transition-colors group-hover:bg-brand-violet group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-blue">
                  {title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
