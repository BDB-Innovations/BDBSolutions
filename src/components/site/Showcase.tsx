import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useReveal, useTilt } from "@/lib/motion";
import { SectionHeading } from "./Services";

type Item = {
  category: string;
  title: string;
  desc: string;
  url: string;
  cta: string;
  accent: string;
};

const items: Item[] = [
  {
    category: "Landing page",
    title: "Página de producto de alto impacto",
    desc: "Landing page con narrativa clara, animaciones y llamada a la acción que convierte visitantes en clientes.",
    url: "https://stripe.com",
    cta: "Ver ejemplo en stripe.com",
    accent: "from-brand-bright/30 to-brand/10",
  },
  {
    category: "E-commerce",
    title: "Tienda online con checkout",
    desc: "Catálogo, carrito y pasarela de pago. Una experiencia de compra rápida y confiable.",
    url: "https://www.allbirds.com",
    cta: "Ver ejemplo en Allbirds",
    accent: "from-cyan-glow/30 to-brand/10",
  },
  {
    category: "Menú digital",
    title: "Carta QR para restaurante",
    desc: "Menú digital con fotos, categorías y pedidos desde el celular. Sin app que instalar.",
    url: "https://www.opentable.com",
    cta: "Ver ejemplo en OpenTable",
    accent: "from-brand-deep/30 to-brand-bright/10",
  },
  {
    category: "Agendamiento",
    title: "Reserva de citas online",
    desc: "Calendario de disponibilidad, confirmación automática y recordatorios por correo o WhatsApp.",
    url: "https://calendly.com",
    cta: "Ver ejemplo en Calendly",
    accent: "from-brand/30 to-cyan-glow/10",
  },
  {
    category: "SaaS / ERP",
    title: "Plataforma de procesos empresariales",
    desc: "Dashboard, facturación e inventario en un solo sistema. Toda tu operación en un lugar.",
    url: "https://www.holded.com",
    cta: "Ver ejemplo en Holded",
    accent: "from-brand-bright/30 to-brand-deep/10",
  },
  {
    category: "Sitio corporativo",
    title: "Web corporativa moderna",
    desc: "Presencia digital profesional que transmite confianza y posiciona tu marca en buscadores.",
    url: "https://linear.app",
    cta: "Ver ejemplo en Linear",
    accent: "from-cyan-glow/30 to-brand-deep/10",
  },
];

export default function Showcase() {
  return (
    <section id="ejemplos" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 aurora opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Ejemplos"
          title={
            <>
              Lo que <span className="text-gradient">podemos construir</span> para ti
            </>
          }
          subtitle="Referencias reales de plataformas del estilo de lo que desarrollamos. Cada enlace abre un ejemplo vivo en una nueva pestaña."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <ShowcaseCard key={it.url} item={it} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Estos son sitios de referencia externos para ilustrar el tipo de producto. El diseño final
          siempre se adapta a tu marca y tus objetivos.
        </p>
      </div>
    </section>
  );
}

function ShowcaseCard({ item, index }: { item: Item; index: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const tiltRef = useTilt<HTMLAnchorElement>(7);
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <a
        ref={tiltRef}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="tilt-card glass ring-gradient group relative block h-full overflow-hidden rounded-3xl p-7 hover:glow-brand"
      >
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-line bg-brand/6 px-3 py-1 text-xs font-medium text-brand">
            {item.category}
          </span>
          <ExternalLink size={16} className="text-muted-foreground transition-colors group-hover:text-foreground" />
        </div>
        <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          {item.cta}
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </div>
  );
}
