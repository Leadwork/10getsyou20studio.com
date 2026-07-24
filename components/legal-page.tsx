import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getSiteConfig } from "@/lib/site";

interface LegalPageProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  const config = getSiteConfig();
  const { parent, suffix, full } = config.brand;

  return (
    <>
      <Navbar parent={parent} suffix={suffix} />
      <main className="pt-32 md:pt-40">
        <article className="container max-w-3xl pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-blue sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {updated}
          </p>
          <div className="prose-legal mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            {children}
          </div>
        </article>
      </main>
      <Footer parent={parent} suffix={suffix} brandFull={full} />
    </>
  );
}
