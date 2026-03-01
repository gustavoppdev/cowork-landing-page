// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets & Constantes
import { statisticsImg } from "@/assets";
import { StatisticsCards } from "@/constants";

// Utils
import { cn } from "@/lib/utils";

const Statistics = () => {
  const t = useTranslations("Sections.Statistics");

  return (
    <section className="section-container py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Texto */}
      <div className="flex flex-col gap-6 items-center text-center text-balance lg:text-start lg:items-start">
        <h3 className="font-semibold uppercase">{t("introduction")}</h3>

        <h2 className="font-mono font-bold text-4xl lg:text-5xl leading-11 lg:leading-13">
          {t("title")}
        </h2>

        <ul className="mt-3 grid grid-cols-2 gap-6">
          {StatisticsCards.map((stat, index) => (
            <li
              key={stat.number}
              className="flex flex-col gap-2 relative w-fit group"
            >
              <h4 className="font-mono font-bold text-5xl">{t(stat.number)}</h4>
              <p>{t(stat.labelKey)}</p>
              <div
                className={cn(
                  "size-10 rounded-full absolute top-4 -z-10 group-hover:scale-400 transition-transform duration-1000",
                  stat.dotColor,
                  index % 2 === 0 ? "left-1/4" : "right-1/2",
                )}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Imagem */}
      <div className="relative aspect-square w-full rounded-[48px] overflow-hidden">
        <Image
          src={statisticsImg}
          alt={t("imageAlt")}
          placeholder="blur"
          fill
          className="object-cover"
          sizes="(max-width: 640px) calc(100vw - 1rem), (max-width: 768px) 608px, (max-width: 1024px) 688px, (max-width: 1280px) 452px, (max-width: 1536px) 540px, 668px"
        />
      </div>
    </section>
  );
};

export default Statistics;
