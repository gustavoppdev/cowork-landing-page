import { logo1, logo2, logo3, logo4, logo5 } from "@/assets";
import { NavigationLink, SocialProofLogo } from "@/types";

// Links de navegação - NavigationBar.tsx
export const NavigationLinks: NavigationLink[] = [
  {
    href: "#about",
    labelKey: "links.about",
  },
  {
    href: "#pricing",
    labelKey: "links.pricing",
  },
  {
    href: "#blog",
    labelKey: "links.blog",
  },
  {
    href: "#events",
    labelKey: "links.events",
  },
];

// Logos de prova social - SocialProof.tsx
export const SocialProofLogos: SocialProofLogo[] = [
  {
    logoSrc: logo1,
    altText: "Logo 1",
  },
  {
    logoSrc: logo2,
    altText: "Logo 2",
  },
  {
    logoSrc: logo3,
    altText: "Logo 3",
  },
  {
    logoSrc: logo4,
    altText: "Logo 4",
  },
  {
    logoSrc: logo5,
    altText: "Logo 5",
  },
];
