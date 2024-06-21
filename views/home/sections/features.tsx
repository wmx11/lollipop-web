import Container from "@/components/ui/container";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import React from "react";

const Features = () => {
  return (
    <Section id="features">
      <Container>
        <TitleGroup>
          <Title>Lollipop features</Title>
          <Title order={2}>Explore some ouf our tail-wagging features!</Title>
        </TitleGroup>
        <div>
          <InfiniteMovingCards
            speed="normal"
            items={[
              {
                name: "Yield-generating NFTs",
                quote: "Some kind of quite",
                title: "Some kind of title",
              },
              {
                name: "Yield-generating NFTs",
                quote: "Some kind of quite",
                title: "Some kind of title",
              },
              {
                name: "Yield-generating NFTs",
                quote: "Some kind of quite",
                title: "Some kind of title",
              },
              {
                name: "Yield-generating NFTs",
                quote: "Some kind of quite",
                title: "Some kind of title",
              },
            ]}
          />
          {/* <div>Yield-generating NFTs</div>
          <div>Lollipop DEX</div>
          <div>Tax-system</div>
          <div>Lollipop games</div> */}
        </div>
      </Container>
    </Section>
  );
};

export default Features;
