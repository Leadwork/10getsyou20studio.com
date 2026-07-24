import { MapPin } from "lucide-react";

interface Producer {
  name: string;
  initials: string;
  role: string;
  region: string;
  bio: string;
  specialties: string[];
  hue: string;
}

const producers: Producer[] = [
  {
    name: "Adam Winters",
    initials: "AW",
    role: "Producer & Founder",
    region: "Colorado",
    bio: "Creates compelling short-form videos for residential homes, luxury properties, and real estate professionals. Every video is designed to highlight what makes a property stand out and capture the attention of today's buyers.",
    specialties: ["Residential", "Luxury", "Investment"],
    hue: "from-brand-blue to-brand-violet",
  },
  {
    name: "Caitlyn Sharp",
    initials: "CS",
    role: "Producer",
    region: "Louisiana",
    bio: "Specializes in creating engaging videos for residential properties, luxury homes, and property management companies. With a focus on attracting qualified renters and buyers, every video is crafted to showcase each property's strongest features.",
    specialties: ["Residential", "Luxury", "Property Management"],
    hue: "from-brand-violet to-brand-blueDeep",
  },
  {
    name: "Carl Sasyn",
    initials: "CS",
    role: "Producer",
    region: "Texas",
    bio: "Produces high-impact short-form videos for residential, commercial, and land & ranch properties. From family homes to investment properties and expansive acreage, every video is tailored to connect with the right audience and drive interest.",
    specialties: ["Residential", "Ranch & Land", "Commercial"],
    hue: "from-brand-blueDeep to-brand-violetSoft",
  },
];

export function Team() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            Our Hosts
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            The people behind the conversations.
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
            Every session is guided by a U.S.-based producer who knows your
            region, your clients, and how homes actually get sold there.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {producers.map((p) => (
            <li
              key={p.name}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/30 hover:shadow-[0_20px_50px_-25px_rgba(11,29,81,0.25)] sm:p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${p.hue} font-display text-lg font-semibold text-white shadow-[0_10px_30px_-12px_rgba(11,29,81,0.5)]`}
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
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-brand-blue">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] font-medium uppercase tracking-[0.12em] text-brand-violet">
                    {p.role}
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-brand-violet" />
                    {p.region}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[14.5px] leading-relaxed text-muted-foreground">
                {p.bio}
              </p>

              <div className="mt-auto pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
                  Specialties
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.specialties.map((s) => (
                    <li
                      key={s}
                      className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-brand-blue"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
