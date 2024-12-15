"use client";
import LollySwapImage from "@/assets/lolly-swap.png";
import LollyTaxesImage from "@/assets/lolly-taxes.png";
import NFTTreatsImage from "@/assets/nft-treats.png";
import LollyRushImage from "@/assets/lolly-rush.png";
import AppStoreLogo from "@/assets/logos/app-store-logo.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import config from "@/lib/config";
import Image from "next/image";

const features = [
  {
    title: "NFT treats (Coming Soon)",
    image: NFTTreatsImage,
    description: (
      <p>
        Lolly NFTs offer weekly payouts for our loyal pups! Find out more and
        grab your NFTs here!
      </p>
    ),
  },
  {
    title: "Lolly swap (Coming Soon)",
    image: LollySwapImage,
    description: (
      <p>
        Snatch your Lolly tokens on our Lolly swap! Join the rest of the pups.
      </p>
    ),
  },
  {
    title: "Lolly taxes",
    image: LollyTaxesImage,
    description: (
      <p>
        A small 3% buy fee and 5% sell fee are collected to feed Lolly kibbles
        and help it grow, fund development, marketing, and staff.
      </p>
    ),
  },
  {
    title: "Lolly rush",
    image: LollyRushImage,
    description: (
      <>
        <p>
          Compete against other pups and win prizes! All revenue goes back into
          Lolly Finance. <br />
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
          <Title>
            Lolly <span className="text-primary">features</span>
          </Title>
          <p>Explore some ouf our tail-wagging features!</p>
        </TitleGroup>
        <div>
          <Carousel>
            <CarouselContent className="md:mx-24">
              {features.map((item, index) => (
                <CarouselItem
                  className="basis-[70%] md:basis-1/2 lg:basis-1/3"
                  key={`feature_${index}`}
                >
                  <Card className="h-[544px] ">
                    <CardContent className="h-full p-0 flex flex-col justify-between">
                      <div className="z-20 space-y-4 pt-6 px-4 pb-4">
                        <Title order={4}>{item.title}</Title>
                        <p className="text-sm text-white/70 leading-loose ">
                          {item.description}
                        </p>
                      </div>
                      <div className="relative h-full p-4 flex flex-col justify-end">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={300}
                          // fill
                          className="object-cover bottom-0"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-8 justify-end mt-8 z-10">
              <CarouselPrevious
                variant="default"
                size="icon"
                className="rounded-md relative flex top-[unset] bottom-[unset] left-[unset] right-[unset] translate-y-0 h-10 w-10 z-10"
              />
              <CarouselNext
                variant="default"
                size="icon"
                className="rounded-md relative flex top-[unset] bottom-[unset] left-[unset] right-[unset] translate-y-0 h-10 w-10 z-10"
              />
            </div>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};

export default Features;
