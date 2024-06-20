import React from "react";
import Hero from "./sections/hero";
import AboutUs from "./sections/about-us";
import Features from "./sections/features";
import Tokenomics from "./sections/tokenomics";
import HowToBuy from "./sections/how-to-buy";
import Team from "./sections/team";

const HomeView = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Tokenomics />
      <HowToBuy />
      <Team />
      <div>Connect with us (socials)</div>
    </>
  );
};

export default HomeView;
