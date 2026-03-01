import {
  featureIcon0,
  featureIcon1,
  featureIcon2,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
} from "@/assets";
import {
  FeatureCard,
  NavigationLink,
  SocialProofLogo,
  StatisticCard,
} from "@/types";

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

// Cards de features - Features.tsx
export const FeaturesCards: FeatureCard[] = [
  {
    titleKey: "cards.0.title",
    descriptionKey: "cards.0.description",
    iconSrc: featureIcon0,
    dotColor: "bg-unorganic-green",
    iconAltKey: "icons.feature0",
  },
  {
    titleKey: "cards.1.title",
    descriptionKey: "cards.1.description",
    iconSrc: featureIcon1,
    dotColor: "bg-sky-blue",
    iconAltKey: "icons.feature1",
  },
  {
    titleKey: "cards.2.title",
    descriptionKey: "cards.2.description",
    iconSrc: featureIcon2,
    dotColor: "bg-shiny-pink",
    iconAltKey: "icons.feature2",
  },
];

//
export const StatisticsCards: StatisticCard[] = [
  {
    number: "cards.0.number",
    labelKey: "cards.0.title",
    dotColor: "bg-unorganic-green",
  },

  {
    number: "cards.1.number",
    labelKey: "cards.1.title",
    dotColor: "bg-sky-blue",
  },
  {
    number: "cards.2.number",
    labelKey: "cards.2.title",
    dotColor: "bg-shiny-pink",
  },
  {
    number: "cards.3.number",
    labelKey: "cards.3.title",
    dotColor: "bg-almost-orange",
  },
];
