import {
  avatar0Img,
  avatar1Img,
  avatar2Img,
  avatar3Img,
  avatar4Img,
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
  FAQ,
  FeatureCard,
  NavigationLink,
  SocialProofLogo,
  StatisticCard,
  TestimonialCard,
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

// Cards de estatísticas - Statistics.tsx
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

// Cards de depoimentos - Testimonials.tsx
export const TestimonialsCards: TestimonialCard[] = [
  {
    avatarSrc: avatar0Img,
    quoteKey: "cards.0.quote",
    authorKey: "cards.0.author",
    positionKey: "cards.0.position",
    bgColor: "bg-powerless-grey",
  },
  {
    avatarSrc: avatar1Img,
    quoteKey: "cards.1.quote",
    authorKey: "cards.1.author",
    positionKey: "cards.1.position",
    bgColor: "bg-unorganic-green",
  },
  {
    avatarSrc: avatar2Img,
    quoteKey: "cards.2.quote",
    authorKey: "cards.2.author",
    positionKey: "cards.2.position",
    bgColor: "bg-sky-blue",
  },
  {
    avatarSrc: avatar3Img,
    quoteKey: "cards.3.quote",
    authorKey: "cards.3.author",
    positionKey: "cards.3.position",
    bgColor: "bg-shiny-pink",
  },
  {
    avatarSrc: avatar4Img,
    quoteKey: "cards.4.quote",
    authorKey: "cards.4.author",
    positionKey: "cards.4.position",
    bgColor: "bg-almost-orange",
  },
];

export const FAQArray: FAQ[] = [
  {
    questionKey: "list.0.question",
    answerKey: "list.0.answer",
  },
  {
    questionKey: "list.1.question",
    answerKey: "list.1.answer",
  },
  {
    questionKey: "list.2.question",
    answerKey: "list.2.answer",
  },
  {
    questionKey: "list.3.question",
    answerKey: "list.3.answer",
  },
  {
    questionKey: "list.4.question",
    answerKey: "list.4.answer",
  },
  {
    questionKey: "list.5.question",
    answerKey: "list.5.answer",
  },
];
