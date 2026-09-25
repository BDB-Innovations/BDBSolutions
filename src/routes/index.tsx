import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Showcase from "@/components/site/Showcase";
import Process from "@/components/site/Process";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BDB Innovations — Software Development Solutions" },
      {
        name: "description",
        content:
          "BDB Innovations: creamos landing pages, e-commerce, menús digitales, agendamiento de citas y soluciones tecnológicas a la medida.",
      },
      { property: "og:title", content: "BDB Innovations — Software Development Solutions" },
      {
        property: "og:description",
        content:
          "Creamos páginas web, e-commerce, menús digitales, agendamiento y soluciones tecnológicas a la medida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ambient glow blobs */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-cyan-glow/8 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-brand-deep/8 blur-[120px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
