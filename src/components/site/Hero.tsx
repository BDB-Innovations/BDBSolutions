import {
  ArrowRight,
  Check,
  ShoppingBag,
  CalendarDays,
  Headphones,
  Watch,
  Package,
} from "lucide-react";

export function ProductPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`product-preview ${compact ? "preview-compact" : ""}`}
      aria-label="Vista ilustrativa de tienda y agenda"
    >
      <div className="demo-window store-window">
        <div className="window-bar">
          <span className="window-dots">● ● ●</span>
          <span>Tu tienda online</span>
          <span className="demo-label">Demo conceptual</span>
        </div>
        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <strong className="font-display text-lg">Objetos para tu día.</strong>
            <ShoppingBag size={18} />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Una experiencia de compra simple.</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { Icon: Headphones, name: "Audio" },
              { Icon: Watch, name: "Accesorios" },
              { Icon: Package, name: "Esenciales" },
            ].map(({ Icon, name }) => (
              <div key={name}>
                <div className="product-tile">
                  <Icon strokeWidth={1.2} />
                </div>
                <p className="mt-3 text-xs font-medium">{name}</p>
                <div className="mt-2 rounded-md bg-brand/8 py-1.5 text-center text-[10px] font-semibold text-brand">
                  Ver colección
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="demo-window agenda-window">
        <div className="window-bar">
          <CalendarDays size={14} />
          <span>Tu agenda, organizada</span>
          <span className="demo-label">Demo</span>
        </div>
        <div className="grid grid-cols-[1fr_1.1fr] gap-5 p-5">
          <div>
            <p className="text-xs font-semibold">Disponibilidad</p>
            <div className="mt-3 grid grid-cols-5 gap-1.5">
              {Array.from({ length: 15 }, (_, i) => (
                <span
                  key={i}
                  className={`rounded-md py-1 text-center text-[10px] ${i === 7 ? "bg-brand text-white" : "bg-surface-2 text-muted-foreground"}`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold">Próximas citas</p>
            <div className="mt-3 rounded-lg border border-blue-100 bg-blue-50 p-2 text-[10px]">
              <strong className="block text-brand">09:00 · Consulta inicial</strong>
              <span className="mt-1 block text-muted-foreground">Reserva confirmada</span>
            </div>
            <div className="mt-2 rounded-lg bg-surface p-2 text-[10px] text-muted-foreground">
              11:30 · Reunión de proyecto
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Hero() {
  return (
    <section className="hero-clear relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <p className="eyebrow">Software hecho en Ecuador · Para Latinoamérica</p>
          <h1 className="mt-6 max-w-xl text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl">
            Software que <br className="hidden sm:block" />
            impulsa tu <span className="text-brand">negocio.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Creamos páginas web, tiendas online y soluciones a medida para que vendas más fácil y
            dediques menos tiempo a tareas repetitivas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacto" className="primary-action">
              Hablemos de tu proyecto <ArrowRight size={17} />
            </a>
            <a href="#servicios" className="secondary-action">
              Explorar soluciones
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground">
            {["Diseño a tu medida", "Acompañamiento cercano", "Web y móvil"].map((x) => (
              <span key={x} className="inline-flex items-center gap-1.5">
                <Check size={14} className="text-brand" />
                {x}
              </span>
            ))}
          </div>
        </div>
        <ProductPreview />
      </div>
    </section>
  );
}
