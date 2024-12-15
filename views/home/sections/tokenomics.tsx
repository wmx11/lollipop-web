/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import React from "react";
import Image from "next/image";
import LollyWordsBackground from "@/assets/lolly_words_background.png";
import { cn } from "@/lib/utils";

const content = [
  {
    title: "Ticker",
    value: "LOLLY",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Token name",
    value: "Lolly",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Locked tokens",
    value: "244.6 Million (Min 1 year until Phase 2)",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Taxes",
    value: "3% Buy tax / 5% Sell tax (Adjustable up to 10%)",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Chain",
    value: "Binance Smart Chain",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Total supply",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    className:
      "md:col-span-2 lg:row-span-2 bg-[url('/tokenomics_hand.png')] bg-no-repeat bg-center bg-cover",
  },
  {
    title: "Consultants",
    value: "12 Million (Vested until $5M MC) + 8.334M (Active)",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Development",
    value: "100 Million (1.2M unlocked)",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Team share",
    value:
      "150 Million (15M unlocked @ launch. 135M vested for 25 months, 5.4M unlocked monthly)",
    className: "md:col-span-4 lg:col-span-2",
  },
  {
    title: "Marketing & Community",
    value: "250 Million (3M unlocked)",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Circulating supply",
    value: "250 Million",
    className: "md:col-span-2 lg:col-span-1",
  },
];

const Tokenomics = () => {
  return (
    <Section id="tokenomics" className="relative">
      <Container className="relative z-10">
        <TitleGroup>
          <Title className="text-primary">Tokenomics</Title>
          <p>Everything about Lolly "Barkonomics"</p>
        </TitleGroup>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[150px_1fr_1fr_1fr_1fr_1fr] gap-4">
          {content.map((item, index) => (
            <Card
              key={`tokenomics_${index}`}
              className={cn("border-white/10", item?.className)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-loose">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
      <Image
        src={LollyWordsBackground}
        alt="Lolly words background"
        className="absolute bottom-0 top-[50%] inset-0 w-full z-0"
      />
    </Section>
  );
};

export default Tokenomics;
