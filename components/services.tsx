import type { SiteConfig } from "@/config";

interface ServicesProps {
  config: SiteConfig;
}

export function Services({ config }: ServicesProps) {
  const { services } = config;

  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            {services.heading}
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
            {services.subheading}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map(({ icon: Icon, title, description }) => (
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
