// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Componentes
import { Button } from "@/components/ui/button";
import NavigationBarMobile from "@/components/layout/NavigationBarMobile";

// Constantes
import { NavigationLinks } from "@/constants";

const NavigationBar = () => {
  const t = useTranslations("Layout.NavigationBar");

  return (
    <header>
      <nav className="section-container py-3.5 lg:py-6 flex justify-between items-center">
        {/* Logo */}
        <Button
          variant={"ghost"}
          className="text-3xl lg:text-4xl font-semibold pl-0"
          asChild
        >
          <Link href={"/"}>Cowork</Link>
        </Button>

        {/* Links de navegação */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {NavigationLinks.map((link) => (
              <li key={link.labelKey}>
                <Button variant={"link"} size={"sm"} asChild>
                  <Link href={link.href}>{t(link.labelKey)}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            <Button variant={"outline"} className="font-semibold">
              {t("login")}
            </Button>
            <Button className="font-semibold">{t("signUp")}</Button>
          </div>
        </div>

        <NavigationBarMobile />
      </nav>
    </header>
  );
};

export default NavigationBar;
