"use client";
/* eslint-disable react/no-unescaped-entities */
import WavesBackground from "@/assets/waves-background.png";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import config from "@/lib/config";
import { cn } from "@/lib/utils";
import Image from "next/image";

const howToBuy = [
  {
    title: (
      <p>
        <strong className="text-xl">Create</strong> <br />
        Metamask wallet
      </p>
    ),
    description: (
      <p>
        Head to{" "}
        <a href="https://metamask.io" target="_blank" className="underline">
          https://metamask.io
        </a>{" "}
        and set up your Metamask wallet.
      </p>
    ),
  },
  {
    title: (
      <p>
        <strong className="text-xl">Add</strong> <br />
        BNB Network
      </p>
    ),
    description: (
      <p>
        Lolly 'lives' on the BNB Smart Chain. Add the BNB network to Metamask
        wallet by following the instructions{" "}
        <a
          href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
          className="underline"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    ),
  },
  {
    title: (
      <p>
        <strong className="text-xl">Get some</strong> <br />
        BNB Tokens
      </p>
    ),
    description: (
      <p>
        Fund your Metamask wallet with BNB by following the instructions{" "}
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
    title: (
      <p>
        <strong className="text-xl">Go to</strong> <br />
        Lolly swap
      </p>
    ),
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
        to visit the official Lolly swap page.
      </p>
    ),
  },
  {
    title: (
      <p>
        <strong className="text-xl">Get</strong> <br />
        your Lolly tokens
      </p>
    ),
    description: (
      <p>
        Type in how much BNB you want to swap for Lolly tokens. Connect your
        wallet, authorize, swap, and you're done! Welcome to the club Lolly!
      </p>
    ),
  },
];

const HowToBuy = () => {
  return (
    <Section id="how-to-buy" className="relative">
      <div className="w-full h-full rounded-[500px] bg-gradient-to-r from-[#1E0A50] to-[#0B022D] absolute inset-0 z-[1]">
        <Image
          src={WavesBackground}
          alt="Waves background"
          className="absolute inset-0 w-full z-[-1px] bottom-0"
        />
        <Image
          src={WavesBackground}
          alt="Waves background"
          className="absolute inset-0 w-full z-[-1px] top-[-100%]"
        />
        <div className="h-40 w-40 blur-[100px] bg-primary absolute top-[50%] left-[10%]"></div>
        <div className="h-40 w-40 blur-[100px] bg-secondary absolute top-[30%] right-[10%]"></div>
        <div className="h-60 w-60 blur-[200px] bg-primary absolute top-[60%] right-[40%]"></div>
        <div className="h-60 w-60 blur-[90px] bg-secondary absolute bottom-[-120px] right-[calc(50%-120px)] z-[-1]"></div>
      </div>

      <Container className="relative">
        <TitleGroup className="text-white z-10 relative text-center">
          <Title>
            How to get <span className="text-primary">Lolly</span>
          </Title>
          <p>Simple steps to get your tokens</p>
        </TitleGroup>
        <div className="flex flex-col gap-4 items-center z-10 relative">
          <div className="w-[1px] h-full absolute bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
          {howToBuy.map((item, index) => (
            <>
              <div
                key={`how_to_buy_${index}`}
                className={cn("h-full flex items-center gap-4 md:w-[50%]", {
                  "self-end": index % 2 !== 0,
                  "self-start": index % 2 === 0,
                })}
              >
                {index % 2 !== 0 && (
                  <>
                    <div className="hidden sm:flex w-10 h-10 rounded-full border-4 border-primary flex-grow flex-shrink-0 shadow translate-x-[-20px] overflow-clip relative z-10 items-center justify-center bg-gradient-to-r from-primary to-secondary"></div>
                    <div className="sm:w-[160px] ml-[-20px] h-[2px] bg-primary"></div>
                  </>
                )}

                <Card className="h-full w-full relative pt-6">
                  <CardContent>
                    <div className="mb-4">{item.title}</div>
                    <p className="text-sm leading-loose">{item.description}</p>
                    <div className="absolute text-[160px] text-white/5 font-bold top-[calc(50%-120px)] right-6">
                      {index + 1}
                    </div>
                  </CardContent>
                </Card>

                {index % 2 === 0 && (
                  <>
                    <div className="sm:w-[160px] mr-[-20px] h-[2px] bg-primary"></div>
                    <div className="hidden sm:flex w-10 h-10 rounded-full border-4 border-primary flex-grow flex-shrink-0 shadow translate-x-[20px] overflow-clip relative z-10 items-center justify-center bg-gradient-to-l from-primary to-secondary"></div>
                  </>
                )}
              </div>
            </>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default HowToBuy;
