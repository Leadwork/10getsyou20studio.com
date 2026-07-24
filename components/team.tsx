import { MapPin } from "lucide-react";

const producers = [
  {
    name: "Adam Winters",
    initials: "AW",
    region: "Colorado",
    focus: "Residential · Luxury · Investment",
    hue: "from-brand-blue to-brand-violet",
  },
  {
    name: "Caitlyn Sharp",
    initials: "CS",
    region: "Louisiana",
    focus: "Residential · Luxury · Property Management",
    hue: "from-brand-violet to-brand-blueDeep",
  },
  {
    name: "Carl Sasyn",
    initials: "CS",
    region: "Texas",
    focus: "Residential · Ranch & Land · Commercial",
    hue: "from-brand-blueDeep to-brand-violetSoft",
  },
];

export function Team() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            The Team
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            Producers who understand your market.
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
            Every session is guided by a producer who knows your region, your
            clients, and how homes actually get sold there.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {producers.map((p) => (
            <li
              key={p.name}
              className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/30 hover:shadow-[0_20px_50px_-25px_rgba(11,29,81,0.25)]"
            >
              <div
                className={`relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${p.hue} font-display text-lg font-semibold text-white shadow-[0_10px_30px_-12px_rgba(11,29,81,0.5)]`}
                aria-hidden="true"
              >
                <span
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 45%)",
                  }}
                />
                <span className="relative">{p.initials}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-brand-blue">
                {p.name}
              </h3>
              <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-brand-violet" />
                {p.region}
              </p>
              <p className="mt-4 text-[13px] uppercase tracking-[0.14em] text-muted-foreground">
                {p.focus}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
