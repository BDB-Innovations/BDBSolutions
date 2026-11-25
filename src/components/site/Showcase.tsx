import { useRef, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Services";
import landingImage from "@/assets/ejemplo-landing.jpg";
import storeImage from "@/assets/tienda-en-linea.jpg";
import menuImage from "@/assets/ejemplo-menu.jpg";
import agendaImage from "@/assets/ejemplo-agenda.jpg";
import erpImage from "@/assets/ejemplo-erp.jpg";
import corporateImage from "@/assets/ejemplo-corporativo.jpg";

type Item = {
  category: string;
  title: string;
  desc: string;
  url: string;
  cta: string;
  accent: string;
  image: string;
  imageAlt: string;
};

const items = [
  {
    category: "Landing page",
    image: landingImage,
    imageAlt: "Página de lanzamiento de café de especialidad",
    title: "Página de producto de alto impacto",
    desc: "Landing page con narrativa clara, animaciones y llamada a la acción que convierte visitantes en clientes.",
    url: "https://stripe.com",
    cta: "Ver ejemplo en stripe.com",
    accent: "from-brand-bright/30 to-brand/10",
  },
  {
    category: "Tienda en línea",
    image: storeImage,
    imageAlt: "Catálogo y carrito de una tienda de cerámica artesanal",
    title: "Tienda online con checkout",
    desc: "Catálogo, carrito y pasarela de pago. Una experiencia de compra rápida y confiable.",
    url: "https://www.allbirds.com",
    cta: "Ver ejemplo en Allbirds",
    accent: "from-cyan-glow/30 to-brand/10",
  },
  {
    category: "Menú QR",
    image: menuImage,
    imageAlt: "Menú digital de un restaurante con fotos y precios",
    title: "Carta QR para restaurante",
    desc: "Menú digital con fotos, categorías y pedidos desde el celular. Sin app que instalar.",
    url: "https://www.opentable.com",
    cta: "Ver ejemplo en OpenTable",
    accent: "from-brand-deep/30 to-brand-bright/10",
  },
  {
    category: "Agenda de citas",
    image: agendaImage,
    imageAlt: "Calendario de reservas y horarios disponibles",
    title: "Reserva de citas online",
    desc: "Calendario de disponibilidad, confirmación automática y recordatorios por correo o WhatsApp.",
    url: "https://calendly.com",
    cta: "Ver ejemplo en Calendly",
    accent: "from-brand/30 to-cyan-glow/10",
  },
  {
    category: "SaaS / ERP",
    image: erpImage,
    imageAlt: "Panel de ventas, inventario y facturación",
    title: "Plataforma de procesos empresariales",
    desc: "Dashboard, facturación e inventario en un solo sistema. Toda tu operación en un lugar.",
    url: "https://www.holded.com",
    cta: "Ver ejemplo en Holded",
    accent: "from-brand-bright/30 to-brand-deep/10",
  },
  {
    category: "Sitio corporativo",
    image: corporateImage,
    imageAlt: "Sitio corporativo de un estudio de arquitectura",
    title: "Web corporativa moderna",
    desc: "Presencia digital profesional que transmite confianza y posiciona tu marca en buscadores.",
    url: "https://linear.app",
    cta: "Ver ejemplo en Linear",
    accent: "from-cyan-glow/30 to-brand-deep/10",
  },
] as const satisfies readonly Item[];

const [landing, store, menu, booking, erp, corporate] = items;
const examples: readonly [Item, ...Item[]] = [store, menu, booking, landing, erp, corporate];

export default function Showcase() {
  const [selected, setSelected] = useState(examples[0].category);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  return (
    <section id="ejemplos" className="relative scroll-mt-20 py-12 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 aurora opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Ejemplos"
          title={
            <>
              Lo que <span className="text-gradient">podemos construir</span> para ti
            </>
          }
          subtitle="Explora propuestas visuales y referencias externas para tu proyecto."
        />

        <Tabs.Root value={selected} onValueChange={setSelected} className="mx-auto mt-7 max-w-4xl">
          <Tabs.List
            aria-label="Tipos de ejemplos"
            className="grid grid-cols-3 gap-1 rounded-xl border border-line bg-surface/80 p-1 sm:flex sm:flex-wrap sm:justify-center"
          >
            {examples.map((item) => (
              <Tabs.Trigger
                key={item.category}
                value={item.category}
                className="min-h-11 rounded-lg px-1 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-brand data-[state=active]:bg-brand data-[state=active]:text-white sm:px-3 sm:text-sm"
              >
                {item.category}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {examples.map((item) => (
            <Tabs.Content
              key={item.category}
              value={item.category}
              className="mt-3 touch-pan-y focus-visible:outline-2 focus-visible:outline-brand"
              onTouchStart={(event) => {
                const touch = event.touches[0];
                touchStart.current =
                  touch && event.touches.length === 1
                    ? { x: touch.clientX, y: touch.clientY }
                    : null;
              }}
              onTouchCancel={() => {
                touchStart.current = null;
              }}
              onTouchEnd={(event) => {
                const start = touchStart.current;
                touchStart.current = null;
                const touch = event.changedTouches[0];
                if (!start || !touch) return;
                const dx = touch.clientX - start.x;
                const dy = touch.clientY - start.y;
                if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
                const index = examples.indexOf(item);
                const next = examples[index + (dx < 0 ? 1 : -1)];
                if (next) setSelected(next.category);
              }}
            >
              {selected === item.category && <ShowcasePanel item={item} />}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}

function ShowcasePanel({ item }: { item: Item }) {
  return (
    <article className="glass ring-gradient relative isolate grid gap-5 overflow-hidden rounded-2xl p-4 motion-safe:animate-[hero-demo-in_250ms_ease-out] sm:min-h-56 sm:grid-cols-2 sm:items-center sm:p-6">
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-45`}
      />
      <div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-brand hover:underline"
        >
          {item.cta} <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </div>
      <figure className="min-w-0">
        <img
          src={item.image}
          alt={item.imageAlt}
          width={1000}
          height={563}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full rounded-xl border border-line object-cover shadow-sm"
        />
        <figcaption className="mt-2 text-xs text-muted-foreground">Vista conceptual</figcaption>
      </figure>
    </article>
  );
}
