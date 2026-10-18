import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import heroAlps from "@/assets/hero-alps.jpg";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Club Alpbach Italy — Pensare l'Europa, dal 1945" },
      { name: "description", content: "Il Club Alpbach Italy porta sul territorio italiano la missione del Forum Europeo di Alpbach: libertà, pace, pluralismo e responsabilità civica." },
      { property: "og:title", content: "Club Alpbach Italy" },
      { property: "og:description", content: "Sulla scia del Forum Europeo di Alpbach: giovani, ricerca e politica per un'Europa più forte." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-alp-green">
        <div className="container-page relative grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7 lg:col-span-7">
            <div className="eyebrow text-alp-ink/70">Club Alpbach Italy · Fondato nel 2026</div>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem]">
              Pensare l'Europa<br />
              dalle <em className="font-serif font-normal italic">verdi</em> montagne del Tirolo.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-alp-ink/80">
              Sulla scia del Forum Europeo di Alpbach, riuniamo giovani, ricercatori e
              decisori italiani attorno a una stessa idea: libertà, pace, pluralismo
              e responsabilità civica.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/borsa-di-studio" className="btn-ink">
                Borsa di studio <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-ghost">
                Scopri il Club
              </Link>
            </div>
          </div>
          <div className="relative md:col-span-5">
            <div className="home-alpine-photo relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <img
                src={heroAlps}
                alt="Le verdi montagne del Tirolo, sede del Forum Europeo di Alpbach"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-alp-ink/25 pt-4 text-xs">
              <span className="text-alp-ink/75">European Forum Alpbach · Dal 1945</span>
              <a href="https://www.alpbach.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-alp-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-alp-ink">
                EFA website <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / mission */}
      <section className="border-y border-border bg-background">
        <div className="container-page py-20 md:py-28">
          <p className="font-serif text-3xl italic leading-tight text-foreground md:text-5xl lg:text-6xl">
            "La via da percorrere non è facile né sicura,<br className="hidden md:block" />
            ma deve essere percorsa e lo sarà."
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            — Manifesto di Ventotene · Altiero Spinelli, Ernesto Rossi, Eugenio Colorni, 1941
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-foreground/60">La nostra missione</div>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Tre direzioni, un solo orizzonte europeo.
            </h2>
          </div>
          <div className="md:col-span-8 grid gap-px bg-border md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Selezione",
                d: "Ogni anno, con il supporto della Fondazione EFA, selezioniamo borsisti italiani per partecipare al Forum Europeo di Alpbach.",
              },
              {
                n: "02",
                t: "Comunità",
                d: "Un network di alumni, ricercatori e professionisti che porta in Italia il dialogo orizzontale che caratterizza Alpbach.",
              },
              {
                n: "03",
                t: "Eventi",
                d: "Incontri sul territorio italiano per discutere progresso sociale, autodeterminazione e dignità umana.",
              },
            ].map((p) => (
              <div key={p.n} className="bg-background p-8">
                <div className="text-xs font-semibold text-foreground/40">{p.n}</div>
                <h3 className="mt-6 text-2xl">{p.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-alp-ink text-alp-cream">
        <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <div className="eyebrow text-alp-cream/60">Dal 1945</div>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Un'eredità di resistenza, un futuro da costruire.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-base text-alp-cream/80 leading-relaxed">
            <p>
              Il Forum Europeo di Alpbach nasce nel 1945 dall'incontro tra giovani resistenti,
              intellettuali e studiosi che — come i partigiani italiani — avevano combattuto
              il nazionalsocialismo. Otto Molden e Simon Moser scelsero le verdi montagne
              del Tirolo come luogo dove trasformare gli ideali della Resistenza europea
              in un progetto politico concreto.
            </p>
            <p>
              Oggi, ottant'anni dopo, le sfide sono nuove — rallentamento economico,
              tensioni politiche, perdita di influenza globale — ma l'obiettivo rimane lo
              stesso: creare uno spazio dove pensare e agire per la salvaguardia
              dell'autodeterminazione, della dignità umana e del progresso sociale.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 pt-4 text-sm font-semibold underline-offset-4 hover:underline">
              Leggi la storia completa <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-28">
        <div className="rounded-sm border border-border bg-alp-green-soft p-10 md:p-16">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="eyebrow text-foreground/60">Candidature aperte</div>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Hai tra i 18 e i 30 anni? Vieni con noi ad Alpbach.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link to="/borsa-di-studio" className="btn-ink">
                Candidati <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
