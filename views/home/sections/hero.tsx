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
import config from "@/lib/config";
import { marketLinks, socialLinks } from "@/lib/social-links";
import { ReceiptText } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <Section className="min-h-screen bg-pattern flex items-center">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-center">
        <div>
          <TitleGroup className="space-y-4">
            <Title className="text-6xl md:text-8xl font-black">
              Lolli
              <strong className="text-primary uppercase relative rotate-12 inline-block">
                <span className="z-10">pop</span>
                <Image
                  src={PopImage}
                  alt="pop image"
                  className="absolute top-[-10px] right-[-10px] w-12"
                />
              </strong>{" "}
              Finance
            </Title>

            <Title order={2} className="max-w-content !mb-4">
              Helping you navigate the risky waters of DeFi! <br />
              Lollipop is building a community where crypto meets{" "}
              <span className="decoration-wavy underline decoration-primary">
                sophistication
              </span>
              {", "}
              <span className="decoration-wavy underline decoration-primary">
                transparency
              </span>
              {", "}
              and{" "}
              <span className="decoration-wavy underline decoration-primary">
                fun!
              </span>
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
