import AboutUs from "./sections/about-us";
import Features from "./sections/features";
import Hero from "./sections/hero";
import HowToBuy from "./sections/how-to-buy";
import SocialMedia from "./sections/social-media";
import Team from "./sections/team";
import Tokenomics from "./sections/tokenomics";

const HomeView = () => {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <HowToBuy />
      <Tokenomics />
      <Team />
      <SocialMedia />
    </>
  );
};

export default HomeView;
