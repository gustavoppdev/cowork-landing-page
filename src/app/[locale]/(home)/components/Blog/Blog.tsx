// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Componentes
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";

// Constantes & Assets
import { BlogCards } from "@/constants";
import { blogTitleImg } from "@/assets";

export const Blog = () => {
  const t = useTranslations("Sections.Blog");

  return (
    <section className="section-container py-16 lg:py-28 flex flex-col gap-16 lg:gap-28 items-center">
      <div className="text-center max-w-4xl mx-auto text-balance space-y-6">
        <h3 className="uppercase font-semibold ">{t("introduction")}</h3>

        <h2 className="text-center font-mono font-bold text-4xl lg:text-5xl flex items-center justify-center lg:gap-2 flex-wrap max-w-214 mx-auto ">
          {t.rich("title", {
            emphasis: (chunks) => (
              <span className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={blogTitleImg}
                    alt=""
                    sizes="(max-width: 1024px) 120px, 180px"
                    className="w-[120px] h-[34px] lg:w-[180px] lg:h-[58px] object-cover"
                  />
                </div>
                {chunks}
              </span>
            ),
          })}
        </h2>

        <p className="leading-7 max-w-xl mx-auto">{t("description")}</p>

        <Button variant={"outline"} className="mt-6">
          {t("button")}
        </Button>
      </div>

      {/*  */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-balance">
        {BlogCards.map((card) => (
          <BlogCard key={card.title} card={card} />
        ))}
      </div>

      <Button variant={"outline"}>{t("button")}</Button>
    </section>
  );
};
