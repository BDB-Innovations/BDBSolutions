import {
  LayoutTemplate,
  ShoppingBag,
  UtensilsCrossed,
  CalendarCheck,
  Calculator,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import { useReveal } from "@/lib/motion";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing pages & páginas informativas",
    desc: "Páginas web de alto impacto que comunican tu marca, captan clientes y posicionan tu negocio en Google.",
    tags: ["Diseño UX/UI", "SEO", "Responsive"],
  },
  {
    icon: ShoppingBag,
    title: "Tiendas online (E-commerce)",
    desc: "E-commerce completo: catálogo, carrito, pasarela de pago y panel de administración de pedidos.",
    tags: ["Catálogo", "Pagos", "Inventario"],
  },
  {
    icon: UtensilsCrossed,
    title: "Menús digitales para restaurantes",
    desc: "Menús digitales con código QR, imágenes, categorías y pedidos en tiempo real desde el celular.",
    tags: ["QR", "Pedidos", "Tiempo real"],
  },
  {
    icon: CalendarCheck,
    title: "Sistemas de agendamiento de citas",
    desc: "Reserva de citas online automatizada con recordatorios, calendario y confirmación instantánea.",
    tags: ["Calendario", "Recordatorios", "Disponibilidad"],
  },
  {
    icon: Calculator,
    title: "Soluciones contables y ERP",
    desc: "Automatiza procesos contables, facturación, inventario y reportes empresariales a la medida.",
    tags: ["Facturación", "Reportes", "Automatización"],
  },
  {
    icon: Workflow,
    title: "Desarrollo a la medida",
    desc: "Automatizamos cualquier proceso de tu empresa con software diseñado exclusivamente para ti.",
    tags: ["CRM", "Integraciones", "Dashboards"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          center={false}
          eyebrow="Qué hacemos"
          title={
            <>
              Soluciones tecnológicas para <span className="text-gradient">cada necesidad</span>
            </>
          }
          subtitle="Desde una landing page hasta un sistema empresarial completo. Diseñamos, desarrollamos y mantenemos tu producto digital de punta a punta."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  const Icon = service.icon;
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <div className="service-clean group relative flex h-full flex-col">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-deep/20 text-brand ring-1 ring-line">
          <Icon size={22} />
        </div>

        <div
          className="mt-5 overflow-hidden rounded-xl border border-line bg-surface p-4"
          aria-hidden="true"
        >
          <div className="mb-3 flex items-center justify-between text-[9px] text-muted-foreground">
            <span>Vista de solución</span>
            <span>Demo conceptual</span>
          </div>
          <div className="flex gap-2">
            <div className="w-12 rounded-md bg-brand/10 p-2">
              <Icon className="text-brand" size={20} />
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-2 w-3/4 rounded bg-brand/20" />
              <div className="h-2 w-1/2 rounded bg-brand/10" />
              <div className="flex gap-1">
                {service.tags.map((t) => (
                  <span key={t} className="h-5 flex-1 rounded bg-white ring-1 ring-line" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-brand/6 px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href="#contacto"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand"
          aria-label={`Consultar: ${service.title}`}
        >
          Hablemos de tu solución <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
