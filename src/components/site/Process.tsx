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
    <section id="proceso" className="relative py-24 sm:py-32">
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

        <div className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const { ref, shown } = useReveal<HTMLDivElement>();
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  ref={ref}
                  className={`reveal ${shown ? "reveal-in" : ""} relative`}
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <div className="glass ring-gradient relative h-full rounded-3xl p-7 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-deep/20 text-brand ring-1 ring-line">
                      <Icon size={26} />
                    </div>
                    <div className="mt-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Paso {i + 1}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
