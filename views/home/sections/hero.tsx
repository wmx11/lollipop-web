import CoingeckoLogo from "@/assets/logos/coingecko.webp";
import DexscreenerLogo from "@/assets/logos/dexscreener.webp";
import DextoolsLogo from "@/assets/logos/dextools.svg";
import TelegramLogo from "@/assets/logos/telegram.webp";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";

const Hero = () => {
  return (
    <Section className="min-h-screen rounded-br-lg rounded-bl-lg shadow-md">
      <Container>
        <div className="space-y-4 mb-4">
          <Title className="text-7xl">Lollipop Finance</Title>
          <Title order={2}>Some kind of heading 2</Title>
          <Badge variant="outline">
            0x1A05EbD6FA3a9fF19e40988F84dbb300abB2b11D
          </Badge>
        </div>
        <div className="flex flex-wrap gap-4">
          <Avatar>
            <AvatarImage src={DexscreenerLogo.src} />
          </Avatar>
          <Avatar>
            <AvatarImage src={DextoolsLogo.src} />
          </Avatar>
          <Avatar>
            <AvatarImage src={CoingeckoLogo.src} />
          </Avatar>
          <Avatar>
            <AvatarImage src={TelegramLogo.src} />
          </Avatar>
          <Button>Pancakeswap</Button>
          <Button>Twitter</Button>
          <Button>CMC</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
