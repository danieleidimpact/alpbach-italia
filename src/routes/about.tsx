import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-alpbach.jpg";
import { PageLayout, PageHero } from "@/components/PageLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Chi siamo — Club Alpbach Italia" },
      { name: "description", content: "La storia del Forum Europeo di Alpbach e la missione del Club Alpbach Italia, fondato nel 2025." },
      { property: "og:title", content: "Chi siamo — Club Alpbach Italia" },
      { property: "og:description", content: "Dal 1945 a oggi: la storia del Forum di Alpbach e la nascita del Club Italia." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Chi siamo"
        title="Un Forum, una resistenza, una comunità europea."
        intro="Il Club Alpbach Italia nasce nel 2025 per portare nel nostro Paese la missione del Forum Europeo di Alpbach: ottant'anni di pensiero libero, dialogo orizzontale e impegno per l'Europa."
      />

      <section className="container-page grid gap-16 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <img
            src={aboutImg}
            alt="Architettura tirolese tra le foreste di Alpbach"
            width={1600}
            height={1100}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
          <p className="mt-4 text-xs text-muted-foreground">Alpbach, Tirolo — sede storica del Forum dal 1945.</p>
        </div>
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
          <h2 className="text-3xl md:text-4xl">Cos'è Alpbach</h2>
          <p>
            Il <strong>Forum Europeo di Alpbach</strong>, nato nel 1945, riunisce ogni anno
            giovani, ricercatori, leader politici ed economici per discutere idee e
            soluzioni per un'Europa più forte e democratica.
          </p>
          <p>
            Le sue origini ricordano da vicino l'esperienza dei <strong>partigiani italiani</strong>:
            anche i fondatori — Otto Molden e Simon Moser — provenivano dalla resistenza
            contro il nazionalsocialismo. Alpbach nasce quindi come un luogo dove giovani
            resistenti, intellettuali e studiosi potessero incontrarsi per trasformare gli
            ideali della Resistenza europea in un progetto politico concreto.
          </p>
          <p>
            Le verdi montagne del Tirolo hanno vegliato ed ancora proteggono giovani
            intellettuali che sognano un'Europa fondata su <strong>libertà, pace,
            pluralismo e responsabilità civica</strong>.
          </p>
          <p>
            Nel corso dei decenni, il Forum ha accompagnato l'evoluzione dell'integrazione
            europea e promosso i valori dei Padri Fondatori. Oggi si concentra sulle nuove
            sfide: rallentamento economico, tensioni politiche, perdita di influenza
            globale. L'obiettivo rimane lo stesso: creare uno spazio dove pensare ed agire
            per la salvaguardia dell'autodeterminazione, della dignità umana e del
            progresso sociale.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-alp-green-soft">
        <div className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <div className="eyebrow text-foreground/60">La nostra missione</div>
            <h2 className="mt-4 text-4xl md:text-5xl">Club Alpbach Italia</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/85">
            <p>
              Fondato nel 2025 sulla scia del <strong>Club Alpbach Trentino</strong> e in
              coordinazione con il <strong>Club Alpbach South Tyrol</strong> e il
              <strong> Club Alpbach Senza Confini</strong>, il Club Alpbach Italia
              contribuisce alla missione del Forum Europeo di Alpbach sul territorio
              italiano.
            </p>
            <p>
              Con il supporto della Fondazione EFA, il board del Club seleziona annualmente
              i beneficiari della borsa di studio per partecipare al Forum, organizza
              eventi sul territorio italiano e cura il dialogo con la rete degli alumni.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-foreground/60">Storia</div>
            <h2 className="mt-4 text-3xl md:text-4xl">Dal Trentino all'Italia.</h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            {[
              { y: "1945", t: "Nasce il Forum Europeo di Alpbach", d: "Otto Molden e Simon Moser fondano il Forum tra le montagne del Tirolo, sulla scia della resistenza europea al nazionalsocialismo." },
              { y: "2013", t: "Nasce il Club Alpbach Trentino", d: "Il primo Club italiano apre la strada alla rete italiana di borsisti e alumni del Forum." },
              { y: "2025", t: "Nasce il Club Alpbach Italia", d: "In coordinazione con i Club Trentino, South Tyrol e Senza Confini, la missione di Alpbach si estende all'intero territorio italiano." },
            ].map((s) => (
              <div key={s.y} className="grid grid-cols-12 gap-6 border-t border-border pt-6">
                <div className="col-span-3 font-display text-3xl md:text-5xl">{s.y}</div>
                <div className="col-span-9">
                  <h3 className="text-xl md:text-2xl">{s.t}</h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
