"use client";
import BackgroundColor from "@/assets/background_color.png";
import Illustration from "@/assets/illustration.png";
import AvatarWithTooltipLink from "@/components/ui/avatar-with-tooltip-link";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import { socialLinks } from "@/lib/social-links";
import { ArrowRight } from "lucide-react";
import { Luckiest_Guy as Font } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Font({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <Section className="min-h-screen relative flex items-center">
      <Container className="grid grid-cols-1 md:grid-cols-[420px_1fr_1fr] gap-8 relative z-10">
        <div className="space-y-16 relative z-10 text-center md:text-left">
          <Title className="text-6xl uppercase relative" order={1}>
            <span>Simplifying</span>
            <br />
            <span>With</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Lolly
            </span>
            <br />
            <span>Finance</span>
          </Title>
          <div className="flex items-center justify-center">
            <Link href="/#how-to-buy" className="flex gap-4 items-center">
              <Button
                size="icon"
                className="shadow shadow-primary bg-gradient-to-r from-primary to-secondary text-white"
              >
                <ArrowRight />
              </Button>
              <span>Get started</span>
            </Link>
          </div>
          <div>
            <p>
              Lolly is cultivating a community, <br /> demistifying DeFi <br />
              and delivering delight. ____________________
            </p>
          </div>
        </div>
        <div>
          <div className="w-12 h-12 bg-white/30 blur-xl absolute top-[-20px] right-[50%]"></div>

          <Image
            src={Illustration}
            alt="Lolly illustration"
            className="absolute max-w-[800px] w-full top-0 right-[45px] z-0 opacity-30 md:opacity-100"
          />
        </div>

        <div className="space-y-6 flex flex-col items-end justify-end">
          <div className="md:space-y-6 flex md:block items-center justify-between w-full md:w-auto">
            {socialLinks.map((props, index) => (
              <div key={`hero_link_${index}`}>
                <AvatarWithTooltipLink
                  className="max-w-[49px] w-full h-[49px] border-none shadow-none overflow-visible"
                  {...props}
                />
              </div>
            ))}
          </div>
          <p className="text-right">
            Sweetening <br /> your crypto journey!
          </p>
        </div>
        <div className="w-20 h-20 bg-white/50 blur-xl absolute top-[-20px] left-0"></div>
        <div className="w-20 h-20 bg-white/50 blur-xl absolute bottom-[-20px] left-20"></div>
        <div className="w-20 h-20 bg-white/50 blur-xl absolute bottom-[-20px] right-80"></div>
        <div className="w-12 h-12 bg-white/50 blur-xl absolute bottom-40 right-0"></div>
      </Container>
      <Image
        src={BackgroundColor}
        alt="Background illustration"
        className="absolute inset-0 w-full z-[-1px]"
      />
      <div className="w-12 h-12 bg-white/30 blur-xl absolute top-[24px] left-[34%]"></div>
    </Section>
  );
};

export default Hero;
