import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

const MAIN_SITE = "https://10getsyou20.com";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              10GetsYou20 Studio is part of the 10GetsYou20 brand, focused on
              short-form video production for real estate professionals.
            </p>
            <a
              href={MAIN_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-violet hover:text-brand-blue"
            >
              Visit Main Website
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Explore
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-brand-blue">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-brand-blue">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-brand-blue">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:hello@10getsyou20studio.com"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-blue"
                  >
                    <Mail className="h-4 w-4" />
                    hello@10getsyou20studio.com
                  </a>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-brand-blue">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Legal
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-brand-blue">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-brand-blue">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} 10GetsYou20 Studio. All rights reserved.</p>
          <p>
            Part of the{" "}
            <a
              href={MAIN_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-brand-violet"
            >
              10GetsYou20
            </a>{" "}
            brand.
          </p>
        </div>
      </div>
    </footer>
  );
}
