import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/club-alpbach-italy-footer.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-alp-black text-alp-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-flex max-w-full">
            <img
              src={logoAsset.url}
              alt="Club Alpbach Italy — Forum Alpbach Network"
              className="h-auto w-72 max-w-full"
            />
          </div>
          <p className="mt-6 max-w-md text-sm text-alp-cream/70">
            Pensare e agire per un'Europa fondata su libertà, pace, pluralismo e responsabilità civica.
            Sulla scia del Forum Europeo di Alpbach, dal 1945.
          </p>
        </div>
        <div>
          <div className="eyebrow text-alp-cream/50">Naviga</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">Chi siamo</Link></li>
            <li><Link to="/board" className="hover:underline">Board</Link></li>
            <li><Link to="/borsa-di-studio" className="hover:underline">Borsa di studio</Link></li>
            <li><Link to="/contatti" className="hover:underline">Contatti</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-alp-cream/50">Network</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://www.alpbach.org/" target="_blank" rel="noreferrer" className="hover:underline">European Forum Alpbach ↗</a></li>
            <li><span className="text-alp-cream/70">Club Alpbach Trentino</span></li>
            <li><span className="text-alp-cream/70">Club Alpbach South Tyrol</span></li>
            <li><span className="text-alp-cream/70">Club Alpbach Senza Confini</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-alp-cream/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-alp-cream/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Club Alpbach Italy · Fondato nel 2026</span>
          <span>Made with care in the spirit of Alpbach.</span>
        </div>
      </div>
    </footer>
  );
}
