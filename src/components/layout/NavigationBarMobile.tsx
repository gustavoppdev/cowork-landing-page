import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NavigationLinks } from "@/constants";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const NavigationBarMobile = () => {
  const t = useTranslations("Layout.NavigationBar");

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="px-4!">
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-humble-black w-full border-0 text-white">
          <SheetHeader className="px-5">
            {/* Logo */}
            <SheetTitle className="text-4xl font-semibold text-white">
              Cowork
            </SheetTitle>
            <SheetDescription className="sr-only" />
          </SheetHeader>

          {/* Links de navegação */}
          <ul className="flex flex-col gap-8 mt-16 px-5">
            {NavigationLinks.map((link) => (
              <li key={link.labelKey}>
                <Button
                  variant={"link"}
                  className="font-bold text-5xl pl-0 text-white "
                  asChild
                >
                  <Link href={link.href}>{t(link.labelKey)}</Link>
                </Button>
              </li>
            ))}
          </ul>

          {/* Links de autenticação */}
          <SheetFooter>
            <div className="flex items-center justify-end gap-6 ">
              <Button variant={"ghost"} className="font-semibold">
                {t("signUp")}
              </Button>
              <Button variant={"outline"} className="text-black font-semibold">
                {t("login")}
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavigationBarMobile;
