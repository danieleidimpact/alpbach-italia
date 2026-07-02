# Club Alpbach Italia

Il sito web del **Club Alpbach Italia**, il club italiano del [Forum Europeo di Alpbach](https://www.alpbach.org/). Fondato nel 2025, il Club porta sul territorio italiano la missione storica di Alpbach: libertà, pace, pluralismo e responsabilità civica attraverso borse di studio, eventi e una rete di alumni.

---

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7, file-based routing, SSR)
- **Styling**: Tailwind CSS v4 con design tokens personalizzati
- **Tipografia**: Archivo (sans/display) + Instrument Serif (serif)
- **Lingua**: TypeScript strict
- **Build**: Vite + Bun

---

## Design System

Il design riprende la brand identity di [alpbach.org](https://www.alpbach.org/): pulizia editoriale, generosi spazi bianchi e un verde prato come colore distintivo.

| Token | Valore |
|-------|--------|
| Verde Alpbach | `oklch(0.82 0.13 135)` — blocchi di contenuto e accenti |
| Inchiostro | `oklch(0.16 0 0)` — testi e bottoni principali |
| Crema | `oklch(0.985 0.005 95)` — sfondo base |
| Pill Button | `border-radius: 9999px` — CTA neri con freccia |
| Eyebrow | uppercase, letter-spacing ampio — etichette di sezione |

Utilità custom definite in `src/styles.css`: `.btn-ink`, `.btn-ghost`, `.container-page`, `.eyebrow`.

---

## Struttura del sito

| Route | Contenuto |
|-------|-----------|
| `/` | Home: hero, citazione Ventotene, tre pilastri missione, strip storica, CTA borsa |
| `/about` | Storia del Forum (dal 1945) e nascita del Club Italia (2025) |
| `/board` | Board 2025–2026 con bio dei membri |
| `/borsa-di-studio` | Requisiti e processo di selezione per la borsa EFA |
| `/contatti` | Email, social e link al Forum Europeo |

Ogni pagina ha meta tag dedicati, Open Graph, canonical e immagine social.

---

## Come avviare in locale

```bash
# Installa le dipendenze
bun install

# Avvia il dev server
bun run dev
```

Il server Vite è disponibile tipicamente su `http://localhost:8080`.

---

## Script disponibili

| Script | Azione |
|--------|--------|
| `bun run dev` | Dev server con HMR |
| `bun run build` | Build di produzione |
| `bun run build:dev` | Build in modalità development |
| `bun run preview` | Preview della build |
| `bun run lint` | ESLint |
| `bun run format` | Prettier su tutto il progetto |

---

## Note tecniche

- Routing file-based in `src/routes/` — non usare `src/pages/`.
- Layout condiviso tramite `src/components/PageLayout.tsx` (header + footer).
- Il file `src/routeTree.gen.ts` è auto-generato dal plugin TanStack Router: non modificarlo a mano.
- Le immagini generate per il sito si trovano in `src/assets/`.
