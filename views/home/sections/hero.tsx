"use client";
import ClickArrowImage from "@/assets/click-arrow.png";
import LollipopDog from "@/assets/lollipop-dog.webp";
import PopImage from "@/assets/pop.png";
import SwirlImage from "@/assets/swirl.png";
import AvatarWithTooltipLink from "@/components/ui/avatar-with-tooltip-link";
import { Badge } from "@/components/ui/badge";
import CTAButton from "@/components/ui/call-to-action-button";
import ClipboardButton from "@/components/ui/clipboard-button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { popInVariant } from "@/lib/animation-variants";
import config from "@/lib/config";
import { marketLinks, socialLinks } from "@/lib/social-links";
import { motion } from "framer-motion";
import { ReceiptText } from "lucide-react";
import Image from "next/image";
import { Luckiest_Guy as Font } from "next/font/google";

const font = Font({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <Section className="min-h-screen bg-pattern-bubbles flex items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-center">
        <div>
          <TitleGroup className="space-y-4">
            <Title
              className={`text-6xl md:text-8xl font-black ${font.className}`}
            >
              <span className="flex items-center">
                Lolli
                <motion.strong
                  className="text-primary uppercase relative rotate-12 inline-block "
                  initial="initial"
                  whileInView="visibleRotate"
                  viewport={{ once: true }}
                  variants={popInVariant}
                >
                  <div className="z-10 text-[60px] md:text-[130px] -ml-3 md:ml-0">pop!</div>
                  <Image
                    src={PopImage}
                    alt="pop image"
                    className="absolute top-[-10px] right-[-10px] w-12"
                  />
                </motion.strong>{" "}
              </span>
              Finance
            </Title>

            <Title order={2} className="max-w-content !mb-4">
              Simplifying and sweetening your crypto journey! <br />
              Lollipop is cultivating a community, demystifying DeFi and
              delivering delight.
            </Title>

            <Badge variant="outline">
              <ReceiptText className="w-3 h-3 mr-3" />
              <span className="uppercase text-lg break-all">
                {config.contractAddress}
              </span>
              <ClipboardButton className="ml-3" copy={config.contractAddress} />
            </Badge>
          </TitleGroup>
          <div className="flex flex-wrap gap-4 w-full">
            {[...marketLinks, ...socialLinks].map((props, index) => (
              <AvatarWithTooltipLink {...props} key={`hero_link_${index}`} />
            ))}
            <div className="relative">
              <Image
                src={ClickArrowImage}
                alt="pop image"
                className="absolute top-[-35px] right-[-15px] w-12 rotate-45"
              />
              <CTAButton size="lg" />
            </div>
          </div>
        </div>
        <div>
          <div className="blob relative flex items-center justify-center">
            <Image src={LollipopDog} alt="Lollipop dog" className="z-10" />
            <Image
              src={SwirlImage}
              alt="Swirl image"
              className="absolute top-0 left-[-15px] w-16"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
