import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Club Alpbach Italy" },
      { name: "description", content: "Scrivi al Club Alpbach Italy per la borsa di studio, eventi o collaborazioni." },
      { property: "og:title", content: "Contatti — Club Alpbach Italy" },
      { property: "og:description", content: "Mettiti in contatto con il Club Alpbach Italy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contatti"
        title="Parliamo di Europa."
        intro="Scrivici per la borsa di studio, per proporre un evento, per collaborare con il Club o semplicemente per saperne di più."
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="eyebrow text-foreground/60">Scrivici</div>
            <a
              href="mailto:info@clubalpbach.it"
              className="mt-4 flex items-center gap-4 text-3xl md:text-5xl hover:text-alp-ink/70"
            >
              <Mail className="shrink-0" size={28} />
              info@clubalpbach.it
            </a>
            <p className="mt-6 max-w-md text-base text-muted-foreground leading-relaxed">
              Rispondiamo entro pochi giorni lavorativi. Per richieste relative
              alla borsa di studio, specifica il tuo anno di nascita e il livello di
              inglese.
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="eyebrow text-foreground/60">Seguici</div>
            <div className="mt-4 grid gap-px bg-border">
              {[
                { Icon: Instagram, t: "Instagram", h: "https://www.instagram.com/clubalpbachitaly/" },
                { Icon: Linkedin, t: "LinkedIn", h: "https://www.linkedin.com/company/club-alpbach-italy/" },
                { Icon: ArrowUpRight, t: "European Forum Alpbach", h: "https://www.alpbach.org/" },
              ].map(({ Icon, t, h }) => (
                <a
                  key={t}
                  href={h}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between bg-background p-6 transition-colors hover:bg-alp-green-soft"
                >
                  <span className="flex items-center gap-4 text-lg font-semibold">
                    <Icon size={20} /> {t}
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
