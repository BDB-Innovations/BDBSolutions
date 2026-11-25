import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useReveal } from "@/lib/motion";

const EMAIL = "contacto@bdbinnovations.com";
const WHATSAPP = "593978690326";
const PHONE = "+593 978 690 326";
const projectTypes = ["Sitio web", "Tienda en línea", "Reservas", "Automatización", "Otro"];

const field =
  "w-full min-w-0 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-950 outline-none placeholder:text-slate-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20";
const label = "grid min-w-0 gap-1.5 text-sm font-semibold text-slate-900";
const contactLink =
  "inline-flex min-w-0 max-w-full items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-800 hover:border-blue-400 hover:text-blue-800";

export default function Contact() {
  const { ref, shown } = useReveal<HTMLElement>();
  const { ref: formRef, shown: formShown } = useReveal<HTMLFormElement>();
  const [draftRequested, setDraftRequested] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const project = form.get("project");
    const subject = encodeURIComponent(`Consulta de proyecto · ${name}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${name}`,
        `Email: ${email}`,
        ...(project ? [`Tipo de proyecto: ${project}`] : []),
        "",
        message,
      ].join("\n"),
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setDraftRequested(true);
  }

  return (
    <section
      ref={ref}
      id="contacto"
      aria-labelledby="contact-title"
      className="relative scroll-mt-20 bg-white py-12 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-12">
        <div
          className={`min-w-0 lg:self-end ${shown ? "motion-safe:animate-[hero-demo-in_350ms_ease-out]" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
            Hablemos
          </p>
          <h2
            id="contact-title"
            className="mt-3 max-w-xl text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl"
          >
            Cuéntanos tu idea y la <span className="text-blue-700">hacemos realidad</span>
          </h2>
          <p className="mt-4 max-w-md text-slate-600">
            Respondemos en menos de 24 horas. Te asesoramos sin costo y sin compromiso.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-100 px-4 py-3.5 text-emerald-950 transition duration-200 hover:bg-emerald-200 hover:shadow-md motion-safe:hover:-translate-y-0.5"
          >
            <MessageCircle aria-hidden="true" size={23} className="shrink-0 text-emerald-800" />
            <span className="min-w-0 flex-1">
              <span className="block font-semibold">Escríbenos por WhatsApp</span>
              <span className="block text-sm">{PHONE}</span>
            </span>
            <ArrowRight
              aria-hidden="true"
              size={18}
              className="shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
            />
          </a>
        </div>

        <form
          ref={formRef}
          aria-labelledby="contact-form-title"
          onSubmit={onSubmit}
          onChange={() => setDraftRequested(false)}
          className={`min-w-0 space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5 sm:p-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 ${formShown ? "motion-safe:animate-[hero-demo-in_350ms_ease-out] lg:motion-safe:animate-[hero-demo-in_350ms_ease-out_100ms_backwards]" : ""}`}
        >
          <h3 id="contact-form-title" className="text-xl font-bold text-slate-950">
            ¿Prefieres escribirnos por correo?
          </h3>
          <fieldset className="min-w-0">
            <legend className="text-sm font-semibold text-slate-900">
              ¿Qué necesitas? <span className="font-normal text-slate-600">(opcional)</span>
            </legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <label key={type} className="cursor-pointer">
                  <input type="radio" name="project" value={type} className="peer sr-only" />
                  <span className="inline-flex min-h-10 items-center rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-800 transition-colors hover:border-blue-600 peer-checked:border-blue-700 peer-checked:bg-blue-700 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-700">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className={label}>
              Nombre
              <input
                name="name"
                autoComplete="name"
                className={field}
                placeholder="Tu nombre"
                required
              />
            </label>
            <label className={label}>
              Correo
              <input
                name="email"
                autoComplete="email"
                type="email"
                className={field}
                placeholder="tu@correo.com"
                required
              />
            </label>
          </div>
          <label className={label}>
            Tu idea
            <textarea
              name="message"
              rows={3}
              className={`${field} resize-y`}
              placeholder="Cuéntanos qué necesitas…"
              required
            />
          </label>
          <button
            type="submit"
            className="btn-glow group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-center text-sm font-semibold"
          >
            Abrir borrador de correo
            <Send
              aria-hidden="true"
              size={16}
              className="shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-0.5"
            />
          </button>
          <p
            role="status"
            className={`text-sm text-slate-600 ${draftRequested ? "motion-safe:animate-[hero-demo-in_250ms_ease-out]" : ""}`}
          >
            {draftRequested
              ? "Si no se abrió el borrador, puedes escribirnos directamente a nuestro correo."
              : "Revisa y envía el borrador desde tu aplicación de correo."}
          </p>
        </form>

        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <div className="flex flex-wrap gap-2">
            <a href={`mailto:${EMAIL}`} className={contactLink}>
              <Mail aria-hidden="true" size={17} className="shrink-0 text-blue-700" />
              <span className="wrap-anywhere">{EMAIL}</span>
            </a>
            <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className={contactLink}>
              <Phone aria-hidden="true" size={17} className="shrink-0 text-blue-700" />
              {PHONE}
            </a>
          </div>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
            <MapPin aria-hidden="true" size={17} className="shrink-0" /> Ecuador y Latinoamérica ·
            trabajo remoto
          </p>
        </div>
      </div>
    </section>
  );
}
