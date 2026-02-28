// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets & Lucide Icons
import { virtualTourImg, virtualTourTitleImg } from "@/assets";
import { Play } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";

const VirtualTour = () => {
  const t = useTranslations("Sections.VirtualTour");

  return (
    <section className="section-container py-16 lg:py-28 space-y-16 lg:space-y-28">
      {/* Call to action */}
      <div className="text-center max-w-4xl mx-auto text-balance space-y-6">
        <h3 className="uppercase font-semibold ">{t("introduction")}</h3>

        <h2 className="text-center font-mono font-bold text-4xl lg:text-5xl flex items-center justify-center gap-4 flex-wrap max-w-214 mx-auto ">
          {t.rich("title", {
            emphasis: (chunks) => (
              <>
                <div className="relative inline-block">
                  <Image
                    src={virtualTourTitleImg}
                    alt=""
                    sizes="(max-width: 1024px) 120px, 180px"
                    className="w-[120px] h-[34px] lg:w-[180px] lg:h-[58px] object-cover"
                  />
                </div>
                {chunks}
              </>
            ),
          })}
        </h2>

        <p className="leading-7">{t("description")}</p>

        <Button variant={"outline"} className="mt-6">
          {t("button")}
        </Button>
      </div>

      {/* Video */}
      <div className="relative aspect-square sm:aspect-video w-full rounded-[48px] overflow-hidden group max-h-[700px]">
        <div className="absolute inset-0 bg-black/20 z-0 group-hover:bg-black/15 transition-colors duration-300"></div>
        <Image
          src={virtualTourImg}
          alt={t("imageAlt")}
          placeholder="blur"
          fill
          sizes="(max-width: 640px) calc(100vw - 1rem), (max-width: 768px) 608px, (max-width: 1024px) 688px, (max-width: 1280px) 944px, (max-width: 1536px) 1120px, 1376px"
          className="object-cover -z-10"
        />
        <div
          role="button"
          aria-label={t("playButtonAlt")}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-humble-black z-50 w-[64px] h-[51px] lg:w-[128px] lg:h-[102px] grid place-content-center rounded-lg hover:opacity-95 transition-all duration-300 cursor-pointer"
        >
          <Play className="size-6 lg:size-10 text-powerless-grey fill-current" />
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
