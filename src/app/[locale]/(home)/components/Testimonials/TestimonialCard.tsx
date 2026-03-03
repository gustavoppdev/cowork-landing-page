// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Tipos
import type { TestimonialCard as TestimonialCardType } from "@/types";

type Props = {
  testimony: TestimonialCardType;
};

const TestimonialCardContent = ({ testimony }: Props) => {
  const t = useTranslations("Sections.Testimonials");
  return (
    <>
      {/* Avatar */}
      <Image
        src={testimony.avatarSrc}
        alt={t(testimony.authorKey)}
        width={64}
        height={64}
        sizes="64px"
        className="object-cover rounded-full"
      />

      {/* Citação */}
      <p className="text-center lg:text-sm leading-relaxed">
        {t(testimony.quoteKey)}
      </p>

      {/* Autor e Posição */}
      <div className="flex flex-col gap-1 text-center mt-auto">
        <p className="font-bold text-sm uppercase tracking-wide">
          {t(testimony.authorKey)}
        </p>
        <p className="text-xs text-humble-black/70 italic">
          {t(testimony.positionKey)}
        </p>
      </div>
    </>
  );
};

export default TestimonialCardContent;
