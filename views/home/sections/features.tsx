"use client";
import LollipopDog from "@/assets/lollipop-dog-2.svg";
import NFTsDogImage from "@/assets/nfts_dog.png";
import PlayDogImage from "@/assets/play_dog.png";
import StarsImage from "@/assets/stars.png";
import SwapDogImage from "@/assets/swap_dog.png";
import TaxDogImage from "@/assets/tax_dog.png";
import AppStoreLogo from "@/assets/logos/app-store-logo.png";
import AvatarWithTooltipLink from "@/components/ui/avatar-with-tooltip-link";
import CTAButton from "@/components/ui/call-to-action-button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { popInVariant } from "@/lib/animation-variants";
import { socialLinks } from "@/lib/social-links";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import config from "@/lib/config";

const features = [
  {
    title: "NFT treats (Coming Soon)",
    image: NFTsDogImage,
    description: (
      <p>
        Lollipop NFTs offer weekly payouts for our loyal pups! Find out more and
        grab your NFTs here!
      </p>
    ),
  },
  {
    title: "Lollipop swap (Coming Soon)",
    image: SwapDogImage,
    description: (
      <p>
        Snatch your Lollipop tokens on our Lollipop swap! Join the rest of the
        pups.
      </p>
    ),
  },
  {
    title: "Lollipop taxes",
    image: TaxDogImage,
    description: (
      <p>
        A small 3% buy fee and 5% sell fee are collected to feed Lollipop
        kibbles and help it grow, fund development, marketing, and staff.
      </p>
    ),
  },
  {
    title: "Lollipop rush",
    image: PlayDogImage,
    description: (
      <>
        <p>
          Compete against other pups and win prizes! All revenue goes back into
          Lollipop Finance. <br />
          Download the latest version{" "}
          <a href={config.lollipopRush} className="underline" target="_blank">
            here
          </a>
          .
        </p>
        <div>
          <a href={config.lollipopRush} target="_blank">
            <Image src={AppStoreLogo} alt="App store logo" width={130} />
          </a>
        </div>
      </>
    ),
  },
];

const Features = () => {
  return (
    <Section id="features">
      <Container>
        <TitleGroup className="relative">
          <Title>Lollipop features</Title>
          <Title order={2}>Explore some ouf our tail-wagging features!</Title>
          <Image
            src={StarsImage}
            alt="Stars image"
            width={100}
            className="absolute top-0 right-0 pointer-events-none rotate-12"
          />
        </TitleGroup>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              className="h-full"
              key={`feature_${index}`}
              initial="initial"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              variants={popInVariant}
            >
              <Card
                className={clsx(
                  "relative overflow-clip  hover:scale-[1.02] transition-transform p-0 h-full",
                  index % 2 ? "hover:rotate-2" : "hover:-rotate-2"
                )}
              >
                <CardContent className="p-0 h-full">
                  <div className="min-h-[320px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="z-20 space-y-4 relative bg-white [mask-image:linear-gradient(transparent,black_3%)] h-full pt-6 px-4 pb-4">
                    <CardTitle>{item.title}</CardTitle>
                    <div>{item.description}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <Card className="md:col-span-2 bg-pattern border-primary">
            <CardContent className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 p-4">
              <div className="space-y-2">
                <Title order={2}>
                  Become part of the Lollipop community and get the latest
                  updates!
                </Title>
                <div className="flex flex-wrap gap-4 w-full">
                  {socialLinks.map((props, index) => (
                    <AvatarWithTooltipLink
                      {...props}
                      key={`social_link_card_${index}`}
                    />
                  ))}
                  <CTAButton size="sm" />
                </div>
              </div>
              <div className="blob max-w-[500px]">
                <Image src={LollipopDog} alt="Lollipop dog" />
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Features;
