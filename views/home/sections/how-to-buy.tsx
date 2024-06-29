"use client";
/* eslint-disable react/no-unescaped-entities */
import DogHeadImage from "@/assets/dog_head.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { popInVariant } from "@/lib/animation-variants";
import config from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const howToBuy = [
  {
    title: "Create Metamask wallet",
    description: (
      <p>
        Head to{" "}
        <a href="https://metamask.io" target="_blank" className="underline">
          https://metamask.io
        </a>{" "}
        and set up your Metamask wallet.
      </p>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Add BNB network",
    description: (
      <p>
        Lollipop 'lives' on the BNB Smart Chain. Add the BNB network to your
        Metamask wallet by following the instructions{" "}
        <a
          href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
          className="break-all underline"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    ),
  },
  {
    title: "Get some BNB tokens",
    description: (
      <p>
        Fund your Metamask wallet with BNB by followig the instructios{" "}
        <a
          href="https://metamask.io/news/latest/how-to-use-metamasks-buy-feature-to-fund-your-wallet/"
          className="underline"
          target="_blank"
        >
          here.
        </a>
      </p>
    ),
  },
  {
    title: "Go to Lolliswap",
    description: (
      <p>
        Almost there! Click{" "}
        <a
          href={config.lollipopTokenSwapUrl}
          target="_blank"
          className="underline"
        >
          here
        </a>{" "}
        to visit the official Lolliswap page.
      </p>
    ),
  },
  {
    title: "Get your Lollipop tokens",
    description: (
      <p>
        Type in how much BNB you want to swap for Lollipop tokens. Connect your
        wallet, authorize, swap, and you're done! Welcome to the club Lollipop!
      </p>
    ),
  },
];

const HowToBuy = () => {
  return (
    <Section id="how-to-buy" className="mesh-gradient-2 relative overflow-clip">
      <div className="bg-pattern absolute inset-0 pointer-events-none"></div>
      <Container>
        <TitleGroup className="text-white z-10 relative">
          <Title>How to get Lollipop</Title>
          <Title order={2}>Simple steps to get your tokens</Title>
        </TitleGroup>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 z-10 relative">
          {howToBuy.map((item, index) => (
            <motion.div
              key={`how_to_buy_${index}`}
              className={cn("h-full", item?.className)}
              initial="initial"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              variants={popInVariant}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>
                    {index + 1}
                    {". "}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{item.description}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
      <Image
        src={DogHeadImage}
        alt="Dog head"
        width={320}
        className="absolute top-0 right-0 -rotate-12 z-0 opacity-50 md:opacity-100"
      />
    </Section>
  );
};

export default HowToBuy;
