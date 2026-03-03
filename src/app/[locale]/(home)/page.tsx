import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Statistics from "./components/Statistics";
import { Testimonials } from "./components/Testimonials/Testimonials";
import VirtualTour from "./components/VirtualTour";

const Home = () => {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Features />
      <VirtualTour />
      <Statistics />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
