import { Card } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import React from "react";

const HowToBuy = () => {
  return (
    <Section id="how-to-buy">
      <Container>
        <TitleGroup>
          <Title>How to get Lollipop</Title>
        </TitleGroup>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>Create metamask</Card>
          <Card>Add BNB network</Card>
          <Card>Get some BNB tokens</Card>
          <Card>Go to Pancakeswap</Card>
          <Card>Get Lollipop tokens</Card>
        </div>
      </Container>
    </Section>
  );
};

export default HowToBuy;
