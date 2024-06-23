"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { PawPrint } from "lucide-react";
import { useState } from "react";

const features = {
  nfts: {
    title: "Yield-generating NFTs",
    description:
      "Lollipop NFTs are not just regular NFTs! These little fellows serve a purpose and generate yield! Yes, you read it right - Lollipop NFTs put yield right into your wallet just for holding them. Collect your ROI and reap the friendly benefits.",
  },
  dex: {
    title: "Lollipop DEX",
    description:
      "Lollipop token is not just a boring old meme token - we are building an ecosystem and a community here! A DEX (Decentralized Exchange) will be our bread and butter for onboarding new projects. Talk about a whole puppyverse.",
  },
  tax: {
    title: "Tax system",
    description:
      "Lollipop token has buy-and-sell taxes that won't make you cry or pull your hair out (3% buy and 5% sell tax). The collected taxes are used for marketing, continuous development, and staff expenses. Well, also to buy kibbles.",
  },
  games: {
    title: "Lollipop games",
    description:
      "A fun ecosystem has to have some games. Lollipop has several mobile games where you can compete with other players and earn rewards. Make other puppers know you mean business with your skills.",
  },
};

const Features = () => {
  const [selection, setSelection] = useState<keyof typeof features>("nfts");

  return (
    <Section id="features">
      <Container>
        <TitleGroup>
          <Title>Lollipop features</Title>
          <Title order={2}>Explore some ouf our tail-wagging features!</Title>
        </TitleGroup>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <ul className="space-y-4">
              {(Object.keys(features) as Array<keyof typeof features>).map(
                (key, index) => (
                  <li key={`feature_${index}`}>
                    <Button
                      onClick={() => setSelection(key)}
                      size="lg"
                      variant="outline"
                      className="min-h-11 h-auto whitespace-pre-wrap"
                    >
                      <div className="flex gap-2 items-center">
                        {selection === key && <PawPrint />}
                        <Title order={3} className="text-3xl md:text-4xl">
                          {features[key].title}
                        </Title>
                      </div>
                    </Button>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>{features[selection].title}</CardTitle>
              </CardHeader>
              <CardContent>{features[selection].description}</CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Features;
