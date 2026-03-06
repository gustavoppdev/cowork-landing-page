// Next-Intl
import { useTranslations } from "next-intl";

// Componentes
import Newsletter from "./Newsletter";
import FooterNavigation from "./FooterNavigation";
import { Button } from "@/components/ui/button";

// Constantes
import { FooterBottomLinks } from "@/constants";

export const Footer = () => {
  const t = useTranslations("Layout.Footer");

  return (
    <footer className="section-container space-y-8">
      <div className="p-12 rounded-[48px] bg-humble-black grid grid-cols-1 lg:grid-cols-3 gap-10 text-balance">
        {/* Newsletter */}
        <Newsletter />

        {/* Navegação */}
        <FooterNavigation />
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row md:justify-between gap-2 text-center items-center md:text-start md:items-start text-sm pb-8">
        <Button variant={"link"} size={"sm"} className="font-normal">
          {t("bottom.copyright", { year: new Date().getFullYear() })}
        </Button>

        <ul className="flex items-center gap-2 flex-wrap justify-center">
          {FooterBottomLinks.map((link) => (
            <li key={link.labelKey}>
              <Button
                variant={"link"}
                className="underline font-normal px-1 sm:px-2"
                size={"sm"}
              >
                {t(link.labelKey)}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
