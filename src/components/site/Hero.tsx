import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, ShoppingBag, CalendarCheck, Calculator, UtensilsCrossed, LayoutTemplate, Workflow, Globe } from "lucide-react";

export default function Hero() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  // Parallax floating cards on pointer move
  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${x}`);
        el.style.setProperty("--py", `${y}`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Aurora background */}
      <div className="aurora pointer-events-none absolute inset-0 -z-10 animate-aurora-drift" />
      <div className="grid-tex pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="animate-fade-in">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              <Sparkles size={14} /> Software Development Solutions
            </span>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-6xl">
              Convertimos tus ideas en{" "}
              <span className="text-gradient">experiencias digitales</span> que venden
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              En <span className="font-semibold text-foreground">BDB Innovations</span> diseñamos y
              desarrollamos landing pages, tiendas online, menús digitales, sistemas de agendamiento
              y soluciones tecnológicas a la medida que automatizan tus procesos.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#servicios"
                className="btn-glow group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Ver qué hacemos
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#ejemplos"
                className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30"
              >
                Ver ejemplos
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                ["40+", "Proyectos entregados"],
                ["100%", "A la medida"],
                ["24/7", "Soporte"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-3xl font-bold text-gradient">{n}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 3D floating visual */}
          <div
            ref={layerRef}
            className="relative mx-auto h-[420px] w-full max-w-md [perspective:1100px]"
            style={
              {
                ["--px" as string]: "0",
                ["--py" as string]: "0",
              } as React.CSSProperties
            }
          >
            <div
              className="absolute inset-0 [transform-style:preserve-3d]"
              style={{
                transform:
                  "rotateX(calc(var(--py) * -6deg)) rotateY(calc(var(--px) * 9deg))",
                transition: "transform 0.2s ease-out",
              }}
            >
              {/* main glass panel */}
              <div
                className="glass-strong ring-gradient glow-brand absolute left-1/2 top-1/2 flex h-64 w-72 flex-col rounded-3xl p-6"
                style={{ transform: "translate(-50%, -50%) translateZ(70px)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-destructive/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>
                <div className="mt-5 h-2 w-24 rounded-full bg-foreground/12" />
                <div className="mt-3 h-3 w-44 rounded-full bg-foreground/18" />
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-brand/8 p-3">
                    <LayoutTemplate className="text-brand" size={18} />
                    <div className="mt-2 h-1.5 w-10 rounded-full bg-foreground/12" />
                  </div>
                  <div className="rounded-xl bg-brand/8 p-3">
                    <ShoppingBag className="text-brand-deep" size={18} />
                    <div className="mt-2 h-1.5 w-10 rounded-full bg-foreground/12" />
                  </div>
                </div>
                <div className="mt-auto h-8 w-full rounded-xl btn-glow" />
              </div>

              {/* floating chips */}
              <FloatChip
                className="left-0 top-4"
                z={120}
                delay="0s"
                icon={<UtensilsCrossed size={16} />}
                label="Menú digital"
              />
              <FloatChip
                className="right-0 top-2"
                z={150}
                delay="1.2s"
                icon={<ShoppingBag size={16} />}
                label="E-commerce"
              />
              <FloatChip
                className="right-2 top-1/2"
                z={135}
                delay="2.1s"
                icon={<CalendarCheck size={16} />}
                label="Citas online"
              />
              <FloatChip
                className="left-0 bottom-1/3"
                z={125}
                delay="0.6s"
                icon={<LayoutTemplate size={16} />}
                label="Landing pages"
              />
              <FloatChip
                className="bottom-4 left-1/4"
                z={130}
                delay="1.6s"
                icon={<Calculator size={16} />}
                label="Procesos contables"
              />
              <FloatChip
                className="right-1 bottom-6"
                z={140}
                delay="2.6s"
                icon={<Workflow size={16} />}
                label="Dashboards"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatChip({
  className,
  z,
  delay,
  icon,
  label,
}: {
  className?: string;
  z: number;
  delay: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={`glass-strong absolute flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-semibold shadow-xl ${className}`}
      style={{
        ["--z" as string]: `${z}px`,
        transform: `translateZ(${z}px)`,
        animation: `float 8s ease-in-out ${delay} infinite`,
      }}
    >
      <span className="text-brand">{icon}</span>
      {label}
    </div>
  );
}
