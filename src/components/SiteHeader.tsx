import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/club-alpbach-italy-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Chi siamo" },
  { to: "/board", label: "Board" },
  { to: "/borsa-di-studio", label: "Borsa di studio" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between md:h-24">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Club Alpbach Italy — Home">
          <img
            src={logoAsset.url}
            alt="Club Alpbach Italy — Forum Alpbach Network"
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/" hash="tesseramento" className="btn-rust">
            Diventa socio
          </Link>
          <a
            href="https://www.alpbach.org/"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden lg:inline-flex btn-ghost"
          >
            EFA website
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium"
                activeProps={{ className: "text-foreground font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/" hash="tesseramento" onClick={() => setOpen(false)} className="btn-rust mt-3 justify-center">
              Diventa socio
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
