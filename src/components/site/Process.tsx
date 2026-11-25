import discoveryImage from "@/assets/proceso-descubrimiento.jpg";
import designImage from "@/assets/proceso-diseno.jpg";
import developmentImage from "@/assets/proceso-desarrollo.jpg";
import launchImage from "@/assets/proceso-lanzamiento.jpg";
import { useReveal } from "@/lib/motion";
import { SectionHeading } from "./Services";

const steps = [
  {
    image: discoveryImage,
    title: "Descubrimiento",
    desc: "Entendemos tu negocio, objetivos y procesos. Definimos alcance y funcionalidades.",
  },
  {
    image: designImage,
    title: "Diseño",
    desc: "Creamos la interfaz, la experiencia de usuario y los prototipos visuales.",
  },
  {
    image: developmentImage,
    title: "Desarrollo",
    desc: "Programamos tu solución con tecnología moderna, rápida y escalable.",
  },
  {
    image: launchImage,
    title: "Lanzamiento",
    desc: "Publicamos, medimos y mantenemos. Soporte continuo y mejoras constantes.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative scroll-mt-20 py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title={
            <>
              Un proceso <span className="text-gradient">claro y transparente</span>
            </>
          }
          subtitle="De la idea al lanzamiento, te acompañamos en cada etapa con comunicación constante."
        />

        <ol role="list" className="mt-6 grid gap-2 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const { ref, shown } = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} relative`}
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div
        className={`glass ring-gradient group relative flex h-full items-start gap-3 rounded-2xl p-3 sm:block sm:rounded-3xl sm:p-4 ${shown ? "process-border-flow" : ""}`}
      >
        <div className="aspect-square w-14 shrink-0 overflow-hidden rounded-lg bg-surface sm:aspect-video sm:w-full sm:rounded-xl">
          <img
            src={step.image}
            alt=""
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
          />
        </div>
        <div className="min-w-0">
          <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground sm:mt-4 sm:text-xs">
            Paso {index + 1}
          </div>
          <h3 className="text-base font-semibold sm:mt-2 sm:text-lg">{step.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:mt-3">{step.desc}</p>
        </div>
      </div>
    </li>
  );
}
