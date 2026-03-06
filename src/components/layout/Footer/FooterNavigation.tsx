// Next-Intl
import { useTranslations } from "next-intl";

// Componentes & Constantes
import { Button } from "@/components/ui/button";
import { FooterLinks } from "@/constants";

const FooterNavigation = () => {
  const t = useTranslations("Layout.Footer.NavigationLinks");

  return (
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-white">
      {FooterLinks.map((group) => (
        <div
          key={group.titleKey}
          className="flex flex-col gap-2 mx-auto text-center md:text-start"
        >
          <h3 className="font-semibold mb-1 uppercase text-xs">
            {t(group.titleKey)}
          </h3>
          <ul className="flex flex-col gap-2">
            {group.links.map((link) => (
              <li key={link.labelKey}>
                <Button
                  variant={"link"}
                  size={"sm"}
                  className="text-white pl-0 font-normal"
                >
                  {t(link.labelKey)}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNavigation;
