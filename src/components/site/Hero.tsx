import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { useTilt } from "@/lib/motion";
import StorePreview from "./StorePreview";

export default function Hero() {
  const demosRef = useTilt<HTMLElement>(3);

  return (
    <section className="relative isolate overflow-hidden bg-[#07152f] pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_65%,#153a8a,transparent_58%),radial-gradient(ellipse_at_95%_100%,#087b93,transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full bg-[radial-gradient(ellipse_at_center,#227de080,transparent_65%)] motion-safe:animate-[hero-glow-drift_4.8s_ease-in-out] lg:w-2/3"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <span aria-hidden="true" className="h-0.5 w-8 shrink-0 bg-cyan-300" />
            Estudio de software en Ecuador y Latinoamérica
          </p>
          <h1 className="mt-6 max-w-xl text-balance text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl">
            Software que impulsa tu <span className="text-cyan-300">negocio</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Creamos tiendas en línea, sistemas de reservas y software a medida para ayudarte a
            vender y gestionar tu negocio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Hablemos de tu proyecto
              <ArrowRight
                aria-hidden="true"
                size={16}
                className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-1"
              />
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-11 items-center rounded-xl border border-slate-400 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Explorar soluciones
            </a>
          </div>
        </div>

        <figure
          ref={demosRef}
          className="mx-auto w-full max-w-lg motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
        >
          <figcaption className="mb-3 text-right text-xs font-medium text-slate-300">
            Demos conceptuales
          </figcaption>
          <div className="mr-6 motion-safe:animate-[hero-demo-in_300ms_ease-out_backwards] sm:mr-16">
            <div className="motion-safe:animate-[hero-demo-float_2s_ease-in-out_400ms_2]">
              <StorePreview />
            </div>
          </div>
          <div
            role="img"
            aria-label="Ejemplo de agendamiento de citas con calendario semanal y hora disponible"
            className="relative -mt-4 ml-8 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-xl motion-safe:animate-[hero-demo-in_300ms_ease-out_100ms_backwards] sm:-mt-7 sm:ml-28 sm:p-5"
          >
            <div aria-hidden="true">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <CalendarDays size={18} className="text-blue-600" />
                Agenda de citas
              </div>
              <div className="mt-3 grid grid-cols-5 gap-1 text-center text-xs text-slate-600">
                {["Lun", "Mar", "Mié", "Jue", "Vie"].map((day, index) => (
                  <div key={day} className="rounded-lg bg-slate-50 py-2">
                    <span className="block">{day}</span>
                    <span
                      className={`mx-auto mt-1 grid size-6 place-items-center rounded-md font-semibold ${index === 2 ? "bg-blue-700 text-white motion-safe:animate-[hero-date-highlight_600ms_ease-out_650ms_2]" : "text-slate-900"}`}
                    >
                      {14 + index}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-cyan-50 px-3 py-2 text-xs font-medium text-cyan-900">
                <Clock3 size={14} /> Miércoles 16 · 10:30 disponible
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
