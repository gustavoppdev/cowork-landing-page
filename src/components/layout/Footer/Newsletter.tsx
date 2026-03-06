"use client";

// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Componentes
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { FormEvent, useRef } from "react";

const Newsletter = () => {
  const t = useTranslations("Layout.Footer.Newsletter");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = (ev: FormEvent) => {
    ev.preventDefault();

    if (inputRef.current?.value) {
      inputRef.current.value = "";
      toast.success(t("subscribeSuccess"));
    }
  };

  return (
    <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-start gap-6 text-white text-sm">
      <Button
        variant={"ghost"}
        className="text-3xl lg:text-4xl font-semibold lg:pl-0"
        asChild
      >
        <Link href={"/"}>Cowork</Link>
      </Button>

      <p>{t("introduction")}</p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col xl:flex-row gap-6 w-full"
      >
        <Input
          type="email"
          placeholder={t("placeholder")}
          className="rounded-none border-x-0 border-t-0 text-sm xl:flex-3"
          ref={inputRef}
        />

        <Button
          variant={"secondary"}
          type="submit"
          className="w-fit mx-auto xl:flex-1"
        >
          {t("button")}
        </Button>
      </form>

      <p>{t("description")}</p>
    </div>
  );
};

export default Newsletter;
