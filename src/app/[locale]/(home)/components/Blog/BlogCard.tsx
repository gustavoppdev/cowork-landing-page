// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Componentes
import { Button } from "@/components/ui/button";

// Tipos & Utils
import { BlogCard as BlogCardType } from "@/types";
import { cn } from "@/lib/utils";

// Lucide Icons
import { ChevronRight } from "lucide-react";

type Props = {
  card: BlogCardType;
};

const BlogCard = ({ card }: Props) => {
  const t = useTranslations("Sections.Blog");
  return (
    <div className="flex flex-col gap-6 items-start max-w-[640px] group relative hover:-translate-y-1 transition-transform duration-500 h-full">
      <div className="relative w-full aspect-104/75 rounded-[24px] overflow-hidden">
        <Image
          src={card.imageSrc}
          placeholder="blur"
          alt=""
          fill
          sizes="(max-width: 640px) calc(100vw - 1rem), (max-width: 768px) 608px, (max-width: 1024px) 640px, (max-width: 1280px) 293px,(max-width: 1536px) 352px, 437px"
          className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {/* Categoria e tempo de leitura */}
        <div className="flex gap-2 items-center">
          <div
            className={cn(
              "px-2 py-1 rounded-lg text-sm font-semibold",
              card.color,
            )}
          >
            {t(card.category)}
          </div>

          <span className="text-sm">{t(card.minRead)}</span>
        </div>

        {/* Título */}
        <h4 className="text-2xl font-bold font-mono group-hover:underline after:absolute after:inset-0 after:cursor-pointer">
          {t(card.title)}
        </h4>
      </div>

      {/* Botão de ler mais */}
      <Button variant={"ghost"} className="group-hover:bg-accent">
        {t("readmoreBtn")}
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
};

export default BlogCard;
