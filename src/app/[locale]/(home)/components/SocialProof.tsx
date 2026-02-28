// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Constantes
import { SocialProofLogos } from "@/constants";

const SocialProof = () => {
  const t = useTranslations("Sections.SocialProof");

  return (
    <section className="section-container py-16 lg:py-28">
      <h2 className="text-center uppercase mb-8 font-semibold">{t("title")}</h2>

      <div className="flex overflow-hidden mask-[linear-gradient(to_right,to_transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-14 pr-14 flex-none animate-infinite-scroll">
          {Array.from({ length: 3 }).map((_) =>
            SocialProofLogos.map((logo) => (
              <Image
                key={`${logo.altText}`}
                src={logo.logoSrc}
                alt={logo.altText}
                className="h-7.5 w-auto opacity-80 dark:invert"
              />
            )),
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
