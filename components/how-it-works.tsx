import { FileText, Mic, Send } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: FileText,
    title: "Share your listing",
    description:
      "Send us the property details — address, photos, and any key selling points you want highlighted.",
  },
  {
    n: "02",
    icon: Mic,
    title: "Record one short conversation",
    description:
      "A brief guided call captures your voice, your angle, and the story behind the home.",
  },
  {
    n: "03",
    icon: Send,
    title: "Receive ready-to-publish videos",
    description:
      "We deliver a set of edited, platform-ready short-form videos you can post right away.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-secondary/60 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            Three steps. One conversation. A month of content.
          </h2>
        </div>

        <ol className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map(({ n, icon: Icon, title, description }, i) => (
            <li key={n} className="relative">
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute left-full top-10 hidden h-px w-8 -translate-x-4 bg-gradient-to-r from-brand-violet/40 to-transparent md:block"
                />
              )}
              <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-[0_20px_50px_-30px_rgba(11,29,81,0.2)]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-semibold text-brand-blue/15">
                    {n}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-brand-blue">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
