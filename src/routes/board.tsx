import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "Board 2025–2026 — Club Alpbach Italia" },
      { name: "description", content: "Il board del Club Alpbach Italia per il biennio 2025–2026: co-presidenti, tesoriere, segretario generale e responsabili." },
      { property: "og:title", content: "Board 2025–2026 — Club Alpbach Italia" },
      { property: "og:description", content: "Conosci i membri del board del Club Alpbach Italia." },
      { property: "og:url", content: "/board" },
    ],
    links: [{ rel: "canonical", href: "/board" }],
  }),
  component: BoardPage,
});

const members = [
  {
    role: "Co-Presidente",
    name: "Mariaelisabetta Realdon",
    bio: "Legal Officer presso la Commissione europea. Dopo un percorso di studi in diritto europeo e internazionale all'Università di Trento e una specializzazione in diritto, tecnologia e sostenibilità tra Roma e Parigi, ha sempre dimostrato un forte entusiasmo per il progetto europeo. Dal 2022 fa parte dell'organizzazione del Forum Europeo di Alpbach, di cui considera il modello di scambio orizzontale un unicum nel panorama europeo.",
  },
  {
    role: "Co-Presidente",
    name: "Lisa Tassi",
    bio: "Recentemente laureata nel Master in Studi Europei e Internazionali presso l'Università di Trento. Dopo una laurea triennale in Mediazione Linguistica e Culturale e diverse esperienze internazionali, crede fortemente nel valore dello scambio interculturale e della solidarietà. Fa parte del Club fin dai tempi del Trentino e ama il Forum per le sue montagne: in un contesto così immerso nella natura nascono connessioni più autentiche.",
  },
  {
    role: "Tesoriere",
    name: "Giovanni Cesare Zoppi",
    bio: "Avvocato di diritto internazionale presso uno studio legale in Lussemburgo. Membro di Amaranta, associazione di volontariato impegnata nella gestione di un orfanotrofio in Benin. Dal 2023, Tesoriere dell’odierno Club Alpbach Italia. Appassionato di dialogo internazionale e connessioni tra persone e culture.",
  },
  {
    role: "Segretaria generale",
    name: "Maura Madeddu",
    bio: "PhD Student in Law and Politics presso l'Università Karl Franzens di Graz. Durante il suo percorso di studi ha sviluppato un forte interesse per la ricerca sui Balcani Occidentali, passione che ha spesso coniugato con la partecipazione ad associazioni e attività di volontariato. Fa parte del Club dal 2023 e ritiene che lo spirito di Alpbach possa essere un motore potentissimo di dialogo e valorizzazione delle idee.",
  },
  {
    role: "Fundraising & Alumni Engagement",
    name: "Edoardo Ruvolo",
    bio: "Giovane ricercatore al confine tra economia, energia, innovazione e transizione verde. Dopo la triennale all'Università di Trento, sta frequentando un Master in Quantitative Economics all'Université Paris Dauphine PSL e lavora all'OECD come economista. Contribuisce al Club Italia perché vede in Alpbach un luogo unico in cui incontrare persone stimolanti e confrontarsi con idee alla frontiera della ricerca. Appassionato di arte contemporanea, performativa e cucina.",
  },
  {
    role: "Event & PR",
    name: "In definizione",
    bio: "Ruolo in via di assegnazione.",
  },
  {
    role: "Social Media Manager",
    name: "In definizione",
    bio: "Ruolo in via di assegnazione.",
  },
  {
    role: "Relazioni esterne",
    name: "Carlotta Paladino",
    bio: "Ricercatrice junior presso un think tank europeo, dove si occupa di analizzare le trasformazioni della cittadinanza, le forme di partecipazione civica e il ruolo di cittadini, associazioni e imprese nei processi democratici e nella costruzione di una cittadinanza europea. Ha studiato Amministrazione e Politiche Pubbliche a Roma, specializzandosi in particolare nell'analisi delle policy e nel policy design, con un forte interesse per le politiche sociali. Appassionata di politica e di Europa, è attiva in numerose realtà associative. Dopo l'esperienza come scholarship holder ad Alpbach nel 2025, ha deciso di entrare nel Club Italy e di sostenerlo, perché crede fortemente nel potenziale del Forum di far dialogare e incontrare giovani provenienti da diverse parti del mondo e con background differenti, stimolando dibattiti e idee con pragmatismo.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function BoardPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Board 2025–2026"
        title="Le persone dietro il Club."
        intro="Il board del Club Alpbach Italia riunisce giovani professionisti, ricercatori e alumni del Forum impegnati a portare lo spirito di Alpbach in Italia."
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {members.map((m) => (
            <article key={m.role + m.name} className="bg-background p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-alp-green text-alp-ink text-sm font-bold">
                  {initials(m.name)}
                </div>
                <div>
                  <div className="eyebrow text-foreground/60">{m.role}</div>
                  <h2 className="mt-2 text-2xl md:text-3xl">{m.name}</h2>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
