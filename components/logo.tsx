import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
}

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-[17px] font-semibold tracking-tight text-brand-blue",
        className
      )}
      aria-label="10GetsYou20 Studio home"
    >
      <span
        aria-hidden="true"
        className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-brand-blue text-white shadow-[0_6px_20px_-6px_rgba(11,29,81,0.5)]"
      >
        <span className="absolute inset-0 bg-gradient-to-br from-brand-violet/60 to-transparent opacity-80" />
        <span className="relative text-[11px] font-bold tracking-tight">10/20</span>
      </span>
      <span className="flex items-baseline gap-1.5">
        <span>10GetsYou20</span>
        <span className="text-brand-violet">Studio</span>
      </span>
    </Link>
  );
}
