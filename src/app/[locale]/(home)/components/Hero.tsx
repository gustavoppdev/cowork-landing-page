import { HeroImage, markHero } from "@/assets";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("Sections.Hero");
  return (
    <section className="section-container grid grid-cols-1 lg:grid-cols-2  items-center gap-10 py-16 lg:py-28">
      {/* Call to action */}
      <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 text-center lg:text-left text-balance">
        <h1 className="font-mono font-bold text-5xl lg:text-6xl 2xl:text-7xl">
          {t.rich("title", {
            emphasis: (chunks) => (
              <div className="relative w-fit inline-block">
                {chunks}
                <Image
                  src={markHero}
                  alt=""
                  className="w-[200px] lg:w-[336px] h-[63px] lg:h-[130px] absolute -top-2 lg:-top-8 -z-10"
                  priority
                  fetchPriority="high"
                />
                <Image
                  src={markHero}
                  alt=""
                  className="w-[200px] lg:w-[336px] h-[63px] lg:h-[130px] absolute -top-1.5 lg:-top-6.5 -z-10"
                  priority
                  fetchPriority="high"
                />
              </div>
            ),
          })}
        </h1>
        <p>{t("description")}</p>
        <Button>{t("button")}</Button>
      </div>

      {/* Imagem */}
      <div className="relative aspect-square w-full rounded-[48px] overflow-hidden">
        <Image
          src={HeroImage}
          alt={t("imageAlt")}
          placeholder="blur"
          fill
          className="object-cover"
          sizes="(max-width: 640px) calc(100vw - 1rem), (max-width: 768px) 608px, (max-width: 1024px) 688px, (max-width: 1280px) 452px, (max-width: 1536px) 540px, 668px"
          priority
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default Hero;
