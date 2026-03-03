// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets
import { ctaTitleImg } from "@/assets";

// Componentes
import { Button } from "@/components/ui/button";

const CTA = () => {
  const t = useTranslations("Sections.CTA");

  return (
    <section className="section-container py-16 lg:py-28">
      <div className="text-center max-w-7xl mx-auto space-y-6">
        <h2 className="text-center font-mono font-bold text-5xl xl:text-6xl 2xl:text-7xl flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          {t.rich("title", {
            emphasis: (chunks) => (
              <>
                {chunks}
                <div className="relative inline-block ">
                  <Image
                    src={ctaTitleImg}
                    alt=""
                    sizes="(max-width: 1024px) 120px, 180px"
                    className="w-[120px] h-[34px] lg:w-[180px] lg:h-[58px] object-cover"
                  />
                </div>
              </>
            ),
            breakline: (chunks) => (
              <>
                <span> {chunks}</span>
              </>
            ),
          })}
        </h2>

        <p className="leading-7 max-w-2xl mx-auto">{t("description")}</p>

        <Button variant={"outline"} className="mt-6">
          {t("button")}
        </Button>
      </div>
    </section>
  );
};

export default CTA;
