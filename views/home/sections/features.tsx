import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import clsx from "clsx";

const features = [
  {
    title: "NFT treats",
    description: (
      <p>
        Lollipop NFTs offer weekly payouts for our loyal pups! Find out more and
        grab your NFTs here!
      </p>
    ),
  },
  {
    title: "Lollipop swap",
    description: (
      <p>
        Snatch your Lollipop tokens on our Lollipop swap! Join the rest of the
        pups.
      </p>
    ),
  },
  {
    title: "Lollipop taxes",
    description: (
      <p>
        A small 2% buy fee and 3% sell fee are collected to feed Lollipop
        kibbles and help it grow, fund development, marketing, and staff.
      </p>
    ),
  },
  {
    title: "Lollipop rush",
    description: (
      <p>
        Compete against other pups and win prizes! All revenue goes back into
        Lollipop Finance. <br />
        Download the latest version here.
      </p>
    ),
  },
];

const Features = () => {
  return (
    <Section id="features">
      <Container>
        <TitleGroup>
          <Title>Lollipop features</Title>
          <Title order={2}>Explore some ouf our tail-wagging features!</Title>
        </TitleGroup>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <Card
              key={`feature_${index}`}
              className={clsx(
                "relative overflow-clip  hover:scale-[1.02] transition-transform",
                index % 2 ? "hover:rotate-2" : "hover:-rotate-2"
              )}
            >
              <CardContent>
                <div className="min-h-[320px]"></div>
                <div className="z-10 space-y-4 relative">
                  <CardTitle>{item.title}</CardTitle>
                  <div>{item.description}</div>
                </div>
                <div className="absolute bg-red-200 inset-0 w-full h-full"></div>
              </CardContent>
            </Card>
          ))}
          <Card className="md:col-span-2">
            <CardContent>
              <Title order={2}>More features are coming!</Title>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Features;
