import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={logo} alt="BDB Innovations" className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Software Development Solutions. Creamos páginas web, e-commerce y soluciones
              tecnológicas a la medida que hacen crecer tu negocio.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Servicios
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicios" className="transition-colors hover:text-foreground">Landing pages</a></li>
              <li><a href="#servicios" className="transition-colors hover:text-foreground">E-commerce</a></li>
              <li><a href="#servicios" className="transition-colors hover:text-foreground">Menús digitales</a></li>
              <li><a href="#servicios" className="transition-colors hover:text-foreground">Agendamiento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Empresa
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#ejemplos" className="transition-colors hover:text-foreground">Ejemplos</a></li>
              <li><a href="#proceso" className="transition-colors hover:text-foreground">Proceso</a></li>
              <li>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  Contacto <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} BDB Innovations. Todos los derechos reservados.</p>
          <p>Software Development Solutions</p>
        </div>
      </div>
    </footer>
  );
}
