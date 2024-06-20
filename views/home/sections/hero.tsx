import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import React from "react";

const Hero = () => {
  return (
    <Section className="min-h-screen">
      <Container>
        <Title>Lollipop Finance</Title>
        <div className="flex flex-wrap gap-4">
          <Button>Pancakeswap</Button>
          <Button>Dexscreener</Button>
          <Button>Telegram</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
