import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
              A studio focused on real estate short-form video.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              <p>
                10GetsYou20 Studio is the production arm of the 10GetsYou20
                brand — founded by Adam Winters and now working with a small
                network of producers across Colorado, Louisiana, and Texas.
              </p>
              <p>
                We built the studio around one idea: the best real estate
                short-form content comes from an agent who sounds like
                themselves. Ten minutes of natural conversation, guided by a
                producer who understands your market, is enough to fill a month
                of posts.
              </p>
              <p>
                No complicated shoots. No long production cycles. Just a
                consistent, professional output that reflects well on your
                business — and gives you something worth posting every week.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outline">
                <a
                  href="https://10getsyou20.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn about 10GetsYou20
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blueDeep to-brand-violet"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 75% 75%, rgba(139,124,252,0.55), transparent 50%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                <div className="space-y-3 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                    Part of the 10GetsYou20 brand
                  </p>
                  <p className="font-display text-2xl leading-snug text-white sm:text-3xl">
                    Ten minutes of your time. Twenty ready-to-post videos.
                  </p>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -inset-x-4 -bottom-6 -z-10 h-24 rounded-full bg-brand-violet/20 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
