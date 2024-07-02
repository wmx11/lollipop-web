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
    className: "md:col-span-2",
  },
  {
    title: "Ticker",
    value: "LOLLY",
  },
  {
    title: "Chain",
    value: "Binance Smart Chain",
  },
  {
    title: "Taxes",
    value: "3% Buy tax / 5% Sell tax (Adjustable up to 10%)",
  },
  {
    title: "Total supply",
    value: "1 Billion",
  },
  {
    title: "Circulating supply",
    value: "250 Million",
  },
  {
    title: "Development",
    value: "100 Million (1.2M unlocked)",
  },
  {
    title: "Locked tokens",
    value: "244.6 Million (Min 1 year until Phase 2)",
  },
  {
    title: "Marketing & Community",
    value: "250 Million (3M unlocked)",
  },
  {
    title: "Team share",
    value:
      "150 Million (15M unlocked @ launch. 135M vested for 25 months, 5.4M unlocked monthly)",
  },
  {
    title: "Consultants",
    value: "12 Million (Vested until $5M MC) + 8.334M (Active)",
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
              <Card key={`tokenomics_${index}`} className={item?.className}>
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
