import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, ArrowDown, Mail, Instagram } from "lucide-react";
import heroPhoto from "@/assets/hero-alpbach.jpg.asset.json";
import photoPrato from "@/assets/tesseramento_prato.jpg.asset.json";
import photoCerchio from "@/assets/tesseramento_cerchio.jpg.asset.json";
import photoParata from "@/assets/tesseramento_parata.jpg.asset.json";
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
            <div className="relative aspect-square w-full overflow-hidden rounded-sm">
              <img
                src={heroPhoto.url}
                alt="I partecipanti al Forum Europeo di Alpbach in discussione in cerchio sui prati del villaggio"
                width={900}
                height={900}
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

      {/* Tesseramento */}
      <section id="tesseramento" className="container-page scroll-mt-24 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="eyebrow text-alp-olive">Campagna tesseramenti 2026/2027</div>
            <h2 className="mt-4 text-3xl md:text-5xl">
              È aperta la campagna: diventa socia/o del Club Alpbach Italy.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Scrivici in direct o per mail, e scopri tutti i benefici di diventare
              socia/o del Club Alpbach Italy.
            </p>
            <div className="mt-6 max-w-md rounded-sm border border-alp-rust/30 bg-alp-rust/5 p-4 text-sm font-semibold leading-relaxed text-alp-rust">
              Iscriviti prima del 31/10/2026 per votare nell'assemblea generale.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="mailto:club.italy@alpbach.network" className="btn-rust justify-center sm:w-auto">
                Scrivici per mail <Mail size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/clubalpbachitaly/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost justify-center sm:w-auto"
              >
                Scrivici in direct <Instagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="min-w-0 md:col-span-7">
            <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
              {[
                {
                  img: photoPrato,
                  alt: "Sdraio e montagne tirolesi sul prato di Alpbach",
                  label: "Talks con esperti",
                },
                {
                  img: photoCerchio,
                  alt: "I partecipanti al Forum in discussione in cerchio sui prati",
                  label: "Comunità internazionale",
                },
                {
                  img: photoParata,
                  alt: "La sfilata delle bandiere tradizionali ad Alpbach",
                  label: "Eventi sul territorio",
                },
              ].map((p) => (
                <figure
                  key={p.label}
                  className="flex w-[72%] min-w-0 shrink-0 snap-start flex-col sm:w-auto"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-sm">
                    <img
                      src={p.img.url}
                      alt={p.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="z-10 mx-0 -mt-5 flex items-center justify-center gap-2 rounded-full border border-border bg-card px-3 py-2.5 text-center text-xs font-semibold text-alp-olive shadow-sm sm:-mx-4 sm:py-3 sm:text-sm">
                    {p.label}
                    <ArrowDown size={14} className="shrink-0 text-alp-rust" aria-hidden="true" />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20 md:pb-28">
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
