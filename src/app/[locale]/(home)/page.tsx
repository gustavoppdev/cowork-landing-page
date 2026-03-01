import Features from "./components/Features";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Statistics from "./components/Statistics";
import VirtualTour from "./components/VirtualTour";

const Home = () => {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Features />
      <VirtualTour />
      <Statistics />
    </main>
  );
};

export default Home;
