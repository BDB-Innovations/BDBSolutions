import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useReveal } from "@/lib/motion";
import { SectionHeading } from "./Services";

const steps = [
  {
    icon: Search,
    title: "Descubrimiento",
    desc: "Entendemos tu negocio, objetivos y procesos. Definimos alcance y funcionalidades.",
  },
  {
    icon: PenTool,
    title: "Diseño",
    desc: "Creamos la interfaz, la experiencia de usuario y los prototipos visuales.",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    desc: "Programamos tu solución con tecnología moderna, rápida y escalable.",
  },
  {
    icon: Rocket,
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
  const Icon = step.icon;

  return (
    <li
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} relative`}
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div
        className={`glass ring-gradient relative flex h-full items-start gap-3 rounded-2xl p-3 sm:block sm:rounded-3xl sm:p-7 sm:text-center ${shown ? "process-border-flow" : ""}`}
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand-deep/20 text-brand ring-1 ring-line sm:mx-auto sm:size-16 sm:rounded-2xl">
          <Icon aria-hidden="true" className="size-5 sm:size-[26px]" />
        </div>
        <div className="min-w-0">
          <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground sm:mt-5 sm:text-xs">
            Paso {index + 1}
          </div>
          <h3 className="text-base font-semibold sm:mt-2 sm:text-lg">{step.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:mt-3">{step.desc}</p>
        </div>
      </div>
    </li>
  );
}
