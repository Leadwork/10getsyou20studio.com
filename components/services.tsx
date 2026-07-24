import {
  Film,
  Home,
  Instagram,
  Facebook,
  Youtube,
  Sparkles,
  Scissors,
  Repeat,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Film,
    title: "Listing Videos",
    description:
      "Cinematic property videos that showcase each listing with polished pacing, color, and sound.",
  },
  {
    icon: Home,
    title: "Property Walkthroughs",
    description:
      "Room-by-room walkthrough clips that let buyers experience the home before they step inside.",
  },
  {
    icon: Instagram,
    title: "Instagram Reels",
    description:
      "Vertical, hook-first Reels formatted for feed, Explore, and Stories reach.",
  },
  {
    icon: Facebook,
    title: "Facebook Videos",
    description:
      "Native-format videos optimized for Facebook feed and short-form video placement.",
  },
  {
    icon: Youtube,
    title: "YouTube Shorts",
    description:
      "Vertical Shorts crafted around search-friendly hooks and clear on-screen text.",
  },
  {
    icon: Sparkles,
    title: "Social Media Content",
    description:
      "A consistent posting cadence of shorts, cuts, and highlights across every platform you use.",
  },
  {
    icon: Scissors,
    title: "Video Editing",
    description:
      "Professional cuts, captions, motion graphics, and licensed audio, delivered ready-to-publish.",
  },
  {
    icon: Repeat,
    title: "Content Repurposing",
    description:
      "One conversation, one shoot — turned into multiple short-form assets for weeks of posts.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            Everything you need to show up on video.
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
            A production workflow built around real estate — from your first
            listing to a consistent short-form presence across every platform.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/30 hover:shadow-[0_20px_50px_-25px_rgba(11,29,81,0.25)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-violet shadow-[0_6px_16px_-8px_rgba(109,93,251,0.6)] ring-1 ring-border transition-colors group-hover:bg-brand-violet group-hover:text-white group-hover:ring-brand-violet">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-brand-blue">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
