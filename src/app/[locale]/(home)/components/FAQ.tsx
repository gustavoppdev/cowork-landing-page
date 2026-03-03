// Next-Intl
import { useTranslations } from "next-intl";

// Componentes
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Constantes & Utils
import { FAQArray } from "@/constants";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const t = useTranslations("Sections.FAQ");

  return (
    <section className="section-container py-16 lg:py-28 space-y-16 lg:space-y-28 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
      {/* Cabeçalho da seção */}
      <div className="space-y-6 text-balance text-center lg:text-start">
        <h3 className="uppercase font-semibold">{t("introduction")}</h3>

        <h2 className="font-mono font-bold text-4xl lg:text-5xl">
          {t("title")}
        </h2>

        <p>{t("description")}</p>
      </div>

      <Accordion type="single" collapsible defaultValue="item-0">
        {FAQArray.map((faq, index) => (
          <AccordionItem
            key={faq.questionKey}
            value={`item-${index}`}
            className="pb-3 border-0"
          >
            <div className="py-2">
              <span
                className={cn(
                  "w-34 h-px bg-black block",
                  index === 0 && "hidden",
                )}
              ></span>
            </div>
            <AccordionTrigger className="font-semibold">
              {t(faq.questionKey)}
            </AccordionTrigger>
            <AccordionContent>
              {index === 5 ? (
                t.rich(faq.answerKey, {
                  emphasis: (chunks) => (
                    <p className="underline inline-block cursor-pointer text-indigo-600">
                      {chunks}
                    </p>
                  ),
                })
              ) : (
                <p>{t(faq.answerKey)}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
