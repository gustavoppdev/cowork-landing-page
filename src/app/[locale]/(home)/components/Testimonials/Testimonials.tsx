// Next-Intl
import { useTranslations } from "next-intl";

// Componentes
import TestimonialCarousel from "./TestimonialCarousel";
import TestimonialGrid from "./TestimonialGrid";

export const Testimonials = () => {
  const t = useTranslations("Sections.Testimonials");
  return (
    <section className="section-container py-16 lg:py-28 space-y-16 lg:space-y-28">
      {/* Cabeçalho da seção */}
      <div className="space-y-6 text-balance text-center">
        <h3 className="uppercase font-semibold">{t("introduction")}</h3>

        <h2 className="font-mono font-bold text-4xl lg:text-5xl">
          {t("title")}
        </h2>
      </div>

      <TestimonialCarousel />
      <TestimonialGrid />
    </section>
  );
};
