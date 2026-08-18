import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";

export const Route = createFileRoute("/borsa-di-studio")({
  head: () => ({
    meta: [
      { title: "Borsa di studio — Club Alpbach Italia" },
      { name: "description", content: "Requisiti, criteri e processo di selezione della borsa di studio del Club Alpbach Italia per partecipare al Forum Europeo di Alpbach." },
      { property: "og:title", content: "Borsa di studio — Club Alpbach Italia" },
      { property: "og:description", content: "Candidati per partecipare al Forum Europeo di Alpbach con una borsa del Club Italia." },
      { property: "og:url", content: "/borsa-di-studio" },
    ],
    links: [{ rel: "canonical", href: "/borsa-di-studio" }],
  }),
  component: BorsaPage,
});

const requirements = [
  { t: "Età", d: "Tra i 18 e i 30/35 anni al momento della candidatura." },
  { t: "Inglese", d: "Livello minimo B2 — il Forum si svolge in lingua inglese." },
  { t: "Residenza", d: "Residenza in Italia, escluse le regioni dell'Alto Adige, Veneto e Friuli-Venezia Giulia." },
  { t: "Disponibilità", d: "Disponibilità a partecipare all'intera durata del Forum." },
];

function BorsaPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Borsa di studio"
        title="Vai ad Alpbach con il Club Italia."
        intro="Con il supporto della Fondazione EFA, ogni anno il board seleziona i beneficiari della borsa di studio per partecipare al Forum Europeo di Alpbach."
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow text-foreground/60">Requisiti</div>
            <h2 className="mt-4 text-3xl md:text-4xl">Chi può candidarsi.</h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Per concorrere alla borsa di studio è necessario rispettare alcuni requisiti
              di base. La selezione avviene poi su merito (CV) e motivazione.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid gap-px bg-border md:grid-cols-2">
              {requirements.map((r) => (
                <li key={r.t} className="bg-background p-8">
                  <div className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-alp-green">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <h3 className="text-lg font-semibold">{r.t}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-alp-green-soft">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="eyebrow text-foreground/60">Selezione</div>
              <h2 className="mt-4 text-3xl md:text-4xl">Come funziona.</h2>
            </div>
            <ol className="md:col-span-8 space-y-10">
              {[
                { t: "Candidatura", d: "I candidati inviano CV e lettera motivazionale entro la scadenza annunciata sui canali del Club." },
                { t: "Valutazione", d: "Il board valuta merito, motivazione e disponibilità a partecipare all'intera durata del Forum." },
                { t: "Selezione e supporto", d: "I borsisti ricevono il supporto della Fondazione EFA e del Club per la partecipazione al Forum di Alpbach." },
              ].map((s, i) => (
                <li key={s.t} className="grid grid-cols-12 gap-6 border-t border-foreground/10 pt-6">
                  <div className="col-span-3 font-display text-3xl md:text-5xl">0{i + 1}</div>
                  <div className="col-span-9">
                    <h3 className="text-xl md:text-2xl">{s.t}</h3>
                    <p className="mt-2 text-base text-foreground/75 leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="rounded-sm bg-alp-ink p-10 text-alp-cream md:p-16">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="eyebrow text-alp-cream/60">Pronto a candidarti?</div>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Scrivici per ricevere il bando appena verrà pubblicato.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link to="/contatti" className="btn-ink bg-alp-cream! text-alp-ink! hover:bg-alp-green!">
                Contattaci <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
