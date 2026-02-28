// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets & Constantes
import { featureTitleImg } from "@/assets";
import { FeaturesCards } from "@/constants";

const Features = () => {
  const t = useTranslations("Sections.Features");

  return (
    <section className="section-container py-16 lg:py-28 space-y-16 lg:space-y-28">
      <h2 className="text-center font-mono font-bold text-4xl lg:text-5xl flex items-center justify-center gap-4 flex-wrap">
        {t.rich("title", {
          emphasis: (chunks) => (
            <>
              <div className="relative inline-block">
                <Image
                  src={featureTitleImg}
                  alt=""
                  className="w-[120px] h-[34px] lg:w-[180px] lg:h-[58px] object-cover"
                />
              </div>
              {chunks}
            </>
          ),
        })}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {FeaturesCards.map((feature) => (
          <div
            key={feature.titleKey}
            className="flex flex-col gap-4 lg:gap-6 text-center items-center text-balance"
          >
            <div className="relative">
              <Image
                src={feature.iconSrc}
                alt=""
                width={48}
                height={48}
                sizes="48px"
              />
              <div
                className={`size-9 rounded-full ${feature.dotColor} absolute -bottom-0.5 -right-0.5 -z-10`}
              ></div>
            </div>

            <h3 className="font-mono font-bold text-2xl lg:text-3xl">
              {t(feature.titleKey)}
            </h3>

            <p className="leading-7">{t(feature.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
