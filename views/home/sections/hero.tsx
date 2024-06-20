import ClickArrowImage from "@/assets/click-arrow.png";
import CoingeckoLogo from "@/assets/logos/coingecko.webp";
import DexscreenerLogo from "@/assets/logos/dexscreener.webp";
import DextoolsLogo from "@/assets/logos/dextools.webp";
import DiscordLogo from "@/assets/logos/discord.webp";
import PancakeSwapLogo from "@/assets/logos/pancakeswap.webp";
import TelegramLogo from "@/assets/logos/telegram.webp";
import TwitterLogo from "@/assets/logos/twitter.webp";
import LollipopDog from "@/assets/lollipop-dog.webp";
import PopImage from "@/assets/pop.png";
import SwirlImage from "@/assets/swirl.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import CTAButton from "@/components/ui/call-to-action-button";
import ClipboardButton from "@/components/ui/clipboard-button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import config from "@/lib/config";
import { ReceiptText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    href: "#",
    image: DexscreenerLogo.src,
    tooltip: "Dexscreener",
  },
  {
    href: "#",
    image: DextoolsLogo.src,
    tooltip: "Dextools",
  },
  {
    href: "#",
    image: CoingeckoLogo.src,
    tooltip: "CoinGecko",
  },
  {
    href: "#",
    image: PancakeSwapLogo.src,
    tooltip: "PancakeSwap",
  },
  {
    href: "#",
    image: DiscordLogo.src,
    tooltip: "Discord",
  },
  {
    href: "#",
    image: TelegramLogo.src,
    tooltip: "Telegram",
  },
  {
    href: "#",
    image: TwitterLogo.src,
    tooltip: "Twitter",
  },
];

const Hero = () => {
  return (
    <Section className="min-h-screen bg-pattern flex items-center">
      <Container className="grid grid-cols-1 md:grid-cols-[1fr,500px] gap-8 relative items-center">
        <div>
          <div className="space-y-4 mb-8">
            <Title className="text-8xl font-black">
              Lolli
              <strong className="text-primary uppercase relative">
                <span className="z-10">pop</span>
                <Image
                  src={PopImage}
                  alt="pop image"
                  className="absolute top-[-10px] right-[-10px] w-12"
                />
              </strong>{" "}
              Finance
            </Title>
            <Title order={2} className="max-w-content">
              Popping DeFi into MemeFi while wagging our tails! <br />
              Become part of the community where crypto meets{" "}
              <span className="decoration-wavy underline decoration-primary">
                sophistication
              </span>{" "}
              and{" "}
              <span className="decoration-wavy underline decoration-primary">
                fun!
              </span>
            </Title>
            <Badge variant="outline">
              <ReceiptText className="w-3 h-3 mr-3" />
              <span className="uppercase text-lg">
                {config.contractAddress}
              </span>
              <ClipboardButton className="ml-3" copy={config.contractAddress} />
            </Badge>
          </div>
          <div className="flex flex-wrap gap-4 w-full">
            {links.map((item, index) => (
              <Tooltip key={`hero_link_${index}`}>
                <TooltipTrigger>
                  <Link href={item.href} target="_blank">
                    <Avatar>
                      <AvatarImage src={item.image} />
                    </Avatar>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{item.tooltip}</TooltipContent>
              </Tooltip>
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
            <div className="w-[400px] h-[400px] rounded-full bg-accent blur-[20px] opacity-50 absolute z-0"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
