import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import config from "@/lib/config";

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
  },
  {
    title: "Add BNB network",
    description: (
      <p>
        Lollipop 'lives' on the Binance Smart Chain network (BNB). Add the BNB
        network to your Metamask wallet by following the instructions{" "}
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
        Purchase Lollipop tokens using BNB tokens like you'd pay USD for a pack
        of kibbles. Fund your Metamask wallet by followig the instructios{" "}
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
        You're almost there! Click{" "}
        <a
          href={config.lollipopTokenSwapUrl}
          target="_blank"
          className="underline"
        >
          here
        </a>{" "}
        to visit the official Lollipop swap page.
      </p>
    ),
  },
  {
    title: "Get your Lollipop tokens",
    description: (
      <p>
        Type in how much BNB you want to swap for Lollipop tokens. Connect your
        wallet, authorize, swap, and you're done! Welcome to the Lollipop club!
      </p>
    ),
  },
];

const HowToBuy = () => {
  return (
    <Section id="how-to-buy">
      <Container>
        <TitleGroup>
          <Title>How to get Lollipop</Title>
        </TitleGroup>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {howToBuy.map((item, index) => (
            <Card>
              <CardHeader>
                <CardTitle>
                  {index + 1}
                  {". "}
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{item.description}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default HowToBuy;
