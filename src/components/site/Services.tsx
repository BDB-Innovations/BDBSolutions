import {
  LayoutTemplate,
  ShoppingBag,
  UtensilsCrossed,
  CalendarCheck,
  Calculator,
  Workflow,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { useReveal, useTilt } from "@/lib/motion";
import storeImage from "@/assets/tienda-en-linea.jpg";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing pages & páginas informativas",
    desc: "Páginas web de alto impacto que comunican tu marca, captan clientes y posicionan tu negocio en Google.",
    tags: ["Diseño UX/UI", "SEO", "Responsive"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=85",
    imageAlt: "Panel de analítica web abierto en una computadora portátil",
  },
  {
    icon: ShoppingBag,
    title: "Tiendas online (E-commerce)",
    desc: "E-commerce completo: catálogo, carrito, pasarela de pago y panel de administración de pedidos.",
    tags: ["Catálogo", "Pagos", "Inventario"],
    image: storeImage,
    imageAlt: "Catálogo y carrito de una tienda de cerámica artesanal en una computadora portátil",
  },
  {
    icon: UtensilsCrossed,
    title: "Menús digitales para restaurantes",
    desc: "Menús digitales con código QR, imágenes, categorías y pedidos en tiempo real desde el celular.",
    tags: ["QR", "Pedidos", "Tiempo real"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop&q=85",
    imageAlt: "Interior de un restaurante con mesas preparadas",
  },
  {
    icon: CalendarCheck,
    title: "Sistemas de agendamiento de citas",
    desc: "Reserva de citas online automatizada con recordatorios, calendario y confirmación instantánea.",
    tags: ["Calendario", "Recordatorios", "Disponibilidad"],
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1000&auto=format&fit=crop&q=85",
    imageAlt: "Agenda abierta para organizar citas y actividades",
  },
  {
    icon: Calculator,
    title: "Soluciones contables y ERP",
    desc: "Automatiza procesos contables, facturación, inventario y reportes empresariales a la medida.",
    tags: ["Facturación", "Reportes", "Automatización"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&auto=format&fit=crop&q=85",
    imageAlt: "Documentos y calculadora para gestión contable",
  },
  {
    icon: Workflow,
    title: "Desarrollo a la medida",
    desc: "Automatizamos cualquier proceso de tu empresa con software diseñado exclusivamente para ti.",
    tags: ["CRM", "Integraciones", "Dashboards"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop&q=85",
    imageAlt: "Equipo colaborando en un proyecto de software",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-20 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Qué hacemos"
          title={
            <>
              Soluciones tecnológicas para <span className="text-gradient">cada necesidad</span>
            </>
          }
          subtitle="Desde una landing page hasta un sistema empresarial completo. Diseñamos, desarrollamos y mantenemos tu producto digital de punta a punta."
        />

        <div className="mt-6 space-y-2 sm:hidden">
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <details key={title} name="mobile-services" className="glass group rounded-xl">
              <summary className="flex min-h-12 cursor-pointer list-none items-center gap-3 px-3 py-2 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                <Icon aria-hidden="true" size={18} className="shrink-0 text-brand" />
                <span className="min-w-0 flex-1">
                  <span className="block">{title}</span>
                  <span className="block truncate text-xs font-normal text-muted-foreground group-open:hidden">
                    {desc}
                  </span>
                </span>
                <ChevronDown
                  aria-hidden="true"
                  size={16}
                  className="shrink-0 group-open:rotate-180 motion-safe:transition-transform"
                />
              </summary>
              <p className="px-3 pt-1 text-sm text-muted-foreground">{desc}</p>
              <p className="px-3 pb-3 pt-2 text-xs font-medium text-brand">{tags.join(" · ")}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
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
  const tiltRef = useTilt<HTMLDivElement>(8);
  const Icon = service.icon;
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <div
        ref={tiltRef}
        className="tilt-card glass ring-gradient group relative h-full overflow-hidden rounded-3xl p-7 hover:glow-brand"
      >
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-deep/20 text-brand ring-1 ring-line">
          <Icon size={22} />
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-line/60 bg-surface/50">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="aspect-video w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
          />
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
        <ArrowUpRight
          size={18}
          className="absolute right-6 top-6 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        />
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
