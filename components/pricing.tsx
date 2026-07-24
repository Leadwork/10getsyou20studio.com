import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY =
  "https://calendly.com/d/dv2z-8dc-g8v/10-minute-real-estate-demo";

const tiers = [
  {
    name: "Single Session",
    price: "$485",
    cadence: "per session",
    tagline: "The full experience, one listing at a time.",
    features: [
      "20 short-form videos",
      "20 custom thumbnails",
      "10-day posting schedule",
      "Titles & descriptions",
      "48-hour turnaround",
      "Delivered for your approval",
    ],
    highlighted: false,
    cta: "Start with one session",
  },
  {
    name: "Monthly Plan",
    price: "$412",
    cadence: "per month",
    tagline:
      "For agents building consistent short-form presence. 3-month minimum, then month-to-month.",
    features: [
      "10+ videos monthly",
      "Priority production queue",
      "Same producer, session over session",
      "Custom thumbnails included",
      "Posting schedule for every drop",
      "Cancel anytime with 30 days notice",
    ],
    highlighted: true,
    cta: "See if the monthly plan fits",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            Transparent, flat pricing.
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
            One session to test the workflow, or a monthly plan for consistent
            output. No setup fees. No hidden add-ons.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl border p-8 transition-all sm:p-10 ${
                tier.highlighted
                  ? "border-brand-blue bg-brand-blue text-white shadow-[0_40px_80px_-40px_rgba(11,29,81,0.5)]"
                  : "border-border bg-white text-brand-blue shadow-[0_20px_60px_-30px_rgba(11,29,81,0.15)]"
              }`}
            >
              {tier.highlighted && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    backgroundImage:
                      "radial-gradient(400px 200px at 100% 0%, rgba(139,124,252,0.35), transparent 55%)",
                  }}
                />
              )}

              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-display text-xl font-semibold ${
                      tier.highlighted ? "text-white" : "text-brand-blue"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.highlighted && (
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                      Most popular
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`font-display text-5xl font-semibold tracking-tight ${
                      tier.highlighted ? "text-white" : "text-brand-blue"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.highlighted ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {tier.cadence}
                  </span>
                </div>

                <p
                  className={`mt-3 text-[14.5px] leading-relaxed ${
                    tier.highlighted ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {tier.tagline}
                </p>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.highlighted
                            ? "bg-white/15 text-white"
                            : "bg-brand-violet/10 text-brand-violet"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span
                        className={
                          tier.highlighted ? "text-white/90" : "text-brand-blue"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={tier.highlighted ? "accent" : "outline"}
                  className={`mt-8 w-full ${
                    tier.highlighted
                      ? ""
                      : "border-brand-blue/20 text-brand-blue hover:border-brand-blue/40"
                  }`}
                >
                  <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-4 w-4" />
                    {tier.cta}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted-foreground">
          All plans include a free 10-minute demo before you commit. No credit
          card required to book.
        </p>
      </div>
    </section>
  );
}
