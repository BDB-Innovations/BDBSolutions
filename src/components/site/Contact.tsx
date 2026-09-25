import { useState } from "react";
import { Mail, MessageCircle, Phone, Send, MapPin } from "lucide-react";
import { useReveal } from "@/lib/motion";
import { SectionHeading } from "./Services";

// TODO: replace with your real contact details
const EMAIL = "contacto@bdbinnovations.com";
const WHATSAPP = "593000000000"; // formato internacional, sin +
const PHONE = "+593 00 000 0000";

export default function Contact() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nuevo mensaje de ${form.name || "un cliente"}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30";

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="aurora pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          ref={ref}
          className={`reveal ${shown ? "reveal-in" : ""} grid gap-10 rounded-[2rem] glass-strong ring-gradient p-8 sm:p-12 lg:grid-cols-2 lg:p-14`}
        >
          <div>
            <SectionHeading
              center={false}
              eyebrow="Hablemos"
              title={
                <>
                  Cuéntanos tu idea y la <span className="text-gradient">hacemos realidad</span>
                </>
              }
              subtitle="Respondemos en menos de 24 horas. Sin compromiso. Te asesoramos sin costo."
            />

            <div className="mt-8 space-y-3">
              <ContactRow icon={<Mail size={18} />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow
                icon={<MessageCircle size={18} />}
                label="WhatsApp"
                value="Chatea con nosotros"
                href={`https://wa.me/${WHATSAPP}`}
              />
              <ContactRow icon={<Phone size={18} />} label="Teléfono" value={PHONE} href={`tel:${PHONE}`} />
              <ContactRow icon={<MapPin size={18} />} label="Cobertura" value="Ecuador y Latinoamérica · trabajo remoto" />
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className={field}
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className={field}
                type="email"
                placeholder="Tu email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <textarea
              className={`${field} min-h-40 resize-y`}
              placeholder="Cuéntanos qué necesitas..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className="btn-glow group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              Enviar mensaje
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            {sent && (
              <p className="text-center text-sm text-brand">
                ¡Gracias! Abrimos tu cliente de correo para que envíes el mensaje.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-brand/30">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand-deep/20 text-brand ring-1 ring-line">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  if (href)
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {inner}
      </a>
    );
  return inner;
}
