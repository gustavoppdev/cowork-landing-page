import { StaticImageData } from "next/image";

// Chave de tradução
export type TranslationKey = string;

// Link de navegação - NavigationBar.tsx
export type NavigationLink = {
  href: string;
  labelKey: TranslationKey;
};

// Logo de prova social - SocialProof.tsx
export type SocialProofLogo = {
  logoSrc: StaticImageData;
  altText: string;
};

// Card de features - Features.tsx
export type FeatureCard = {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  iconSrc: StaticImageData;
  dotColor: string;
  iconAltKey: TranslationKey;
};
