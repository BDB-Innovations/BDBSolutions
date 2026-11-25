import { ArrowRight } from "lucide-react";
import { useTilt } from "@/lib/motion";
import agendaImage from "@/assets/ejemplo-agenda.jpg";
import storeImage from "@/assets/tienda-en-linea.jpg";

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
              <img
                src={storeImage}
                alt="Catálogo de una tienda de cerámica artesanal en un portátil"
                width={1000}
                height={563}
                fetchPriority="high"
                className="aspect-video w-full rounded-2xl border border-white/30 object-cover shadow-xl"
              />
            </div>
          </div>
          <img
            src={agendaImage}
            alt="Calendario para reservar citas en una tableta"
            width={1000}
            height={563}
            className="relative -mt-5 ml-auto aspect-video w-2/3 rounded-xl border border-white/40 object-cover shadow-xl motion-safe:animate-[hero-demo-in_300ms_ease-out_100ms_backwards] sm:-mt-12"
          />
        </figure>
      </div>
    </section>
  );
}
