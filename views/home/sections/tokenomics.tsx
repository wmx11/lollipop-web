/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import React from "react";
import Image from "next/image";
import BarkonomicsImage from "@/assets/barkonomics.png";

const content = [
  {
    title: "Token name",
    value: "Lollipop",
  },
  {
    title: "Symbol",
    value: "LOLLY",
  },
  {
    title: "Chain",
    value: "Binance Smart Chain",
  },
  {
    title: "Total supply",
    value: "800M",
  },
  {
    title: "Liquidity pool",
    value: "13,716,697",
  },
  {
    title: "Burned",
    value: "286,355,919",
  },
  {
    title: "Marketing",
    value: "100,000,000",
  },
  {
    title: "Team allocation",
    value: "60,000,000",
  },
  {
    title: "Seed sale",
    value: "40,000,000",
  },
  {
    title: "Locked",
    value: "300,000,000",
  },
];

const Tokenomics = () => {
  return (
    <Section id="tokenomics" className="bg-pattern">
      <Container>
        <TitleGroup>
          <Title>Tokenomics</Title>
          <Title order={2}>Everything about Lollipop "Barkonomics"</Title>
        </TitleGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.map((item, index) => (
              <Card key={`tokenomics_${index}`}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-lg">{item.value}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="self-end">
            <Image src={BarkonomicsImage} alt="Lollipop tokenomics" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Tokenomics;
