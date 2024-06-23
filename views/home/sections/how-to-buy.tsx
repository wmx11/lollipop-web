import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";

const howToBuy = [
  {
    title: "Create Metamask wallet",
    description:
      "First of, you will need to have a Metamask wallet to interact with anything crypto. Head to <a href='https://metamask.io' target='_blank' class='underline'>https://metamask.io</a> and set up your Metamask wallet.",
  },
  {
    title: "Add BNB network",
    description:
      "Lollipop 'live' on the Binance Smart Chain network, also known as the BNB network. Add the BNB network to your Metamask wallet to interact with the BNB chain. Follow the instructions here <a class='break-all underline' href='https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain' target='_blank'>https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain</a>",
  },
  {
    title: "Get some BNB tokens",
    description:
      "You can purchase Lollipop tokens using BNB tokens like you pay USD for a pack of kibbles. Fund your Metamask wallet with BNB on the Binance exchange or any other that supports your country.",
  },
  {
    title: "Got to Pancakeswap",
    description:
      "You're almost there! Head over to the Pancakeswap DEX to get your Lollipop tokens. Click <a href='https://pancakeswap.finance/swap?outputCurrency=0x1A05EbD6FA3a9fF19e40988F84dbb300abB2b11D&chainId=56&inputCurrency=0x55d398326f99059fF775485246999027B3197955' target='_blank' class='underline'>HERE</a> to visit the official Lollipop transaction page on Pancakeswap.",
  },
  {
    title: "Get your Lollipop tokens",
    description:
      "All you have to do now is type the amount of BNB you want to spend to receive an amount of Lollipop tokens based on the current market price. Fill in the numbers, click 'Connect Wallet' and grab your Lollipop tokens! Welcome to the club!",
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
              <CardContent
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default HowToBuy;
