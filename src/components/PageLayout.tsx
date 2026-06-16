import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-alp-green">
      <div className="container-page py-20 md:py-28">
        <div className="eyebrow text-alp-ink/70">{eyebrow}</div>
        <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl">{title}</h1>
        {intro && <p className="mt-8 max-w-2xl text-lg text-alp-ink/80">{intro}</p>}
      </div>
    </section>
  );
}
