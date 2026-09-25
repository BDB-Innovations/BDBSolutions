import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-20px_rgba(20,20,60,0.18)]" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="BDB Innovations" className="h-9 w-auto" />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="btn-glow hidden rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Hablemos
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground md:hidden"
              aria-label="Menú"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand/8 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-glow mt-1 rounded-xl px-4 py-3 text-center text-sm font-semibold"
            >
              Hablemos
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
