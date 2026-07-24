import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-gradient-hero"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-grid opacity-40 mask-fade-b"
      />

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-blue backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-violet" />
            10GetsYou20 Studio
          </div>

          <h1 className="animate-fade-up mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-brand-blue text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Professional short-form video production for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-brand-violet to-brand-blue bg-clip-text text-transparent">
                real estate agents
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-2 rounded bg-brand-violet/15"
              />
            </span>
            .
          </h1>

          <p
            className="animate-fade-up mt-6 text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            Turn one property listing into engaging short-form videos for
            Instagram, Facebook, YouTube Shorts, TikTok, and more.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "160ms" }}
          >
            <Button asChild size="lg">
              <a href="#services">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://10getsyou20.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit 10GetsYou20.com
              </a>
            </Button>
          </div>

          <p
            className="animate-fade-up mt-6 text-xs text-muted-foreground"
            style={{ animationDelay: "220ms" }}
          >
            Part of the 10GetsYou20 brand · Serving real estate professionals
          </p>
        </div>

        <div
          className="animate-fade-up relative mx-auto mt-16 max-w-5xl md:mt-20"
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative rounded-3xl border border-border bg-card p-3 shadow-[0_40px_80px_-40px_rgba(11,29,81,0.25)]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blueDeep via-brand-blue to-brand-violet">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(139,124,252,0.5), transparent 45%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="aspect-[9/16] w-20 rounded-xl border border-white/20 bg-white/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:w-28 md:w-32"
                      style={{
                        transform: `translateY(${i === 1 ? "-12px" : "8px"})`,
                      }}
                    >
                      <div className="flex h-full flex-col justify-between p-3">
                        <div className="h-2 w-8 rounded-full bg-white/30" />
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-3/4 rounded-full bg-white/40" />
                          <div className="h-1.5 w-1/2 rounded-full bg-white/25" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-6 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-brand-violet/25 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
