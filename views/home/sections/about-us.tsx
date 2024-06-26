import AccumulationImage from "@/assets/accumulation.png";
import BowTie from "@/assets/bowtie.png";
import EducationImage from "@/assets/education.png";
import InnovationImage from "@/assets/innovation.png";
import NavigationImage from "@/assets/navigation.png";
import TransformationImage from "@/assets/transformation.png";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import Image from "next/image";

const aboutUs = [
  {
    title: "Navigation",
    description: (
      <p>
        Experience a safe and welcoming introduction to DeFi with the Lollipop
        team. We pride ourselves on being genuine and transparent, ready to
        assist every community member. Let us guide you through DeFi landscape
        with confidence and clarity.
      </p>
    ),
    image: NavigationImage,
  },
  {
    title: "Education",
    description: (
      <p>
        Eager to learn about DeFi? Seek answers, gather insights, and benefit
        from the wisdom of our experienced team and vibrant community. At
        Lollipop Finance, we are dedicated to enriching your financial literacy
        and equipping you with the knowledge to make better DeFi decisions.
      </p>
    ),
    image: EducationImage,
  },
  {
    title: "Accumulation",
    description: (
      <p>
        Grow your assets, increase your income, and deepen your understanding of
        DeFi. With Lollipop Finance, you can unlock the true potential of
        decentralized finance and build a robust financial future.
      </p>
    ),
    image: AccumulationImage,
  },
  {
    title: "Innovation",
    description: (
      <p>
        Your voice matters. At Lollipop Finance, we will support and facilitate
        community-driven projects, empowering our members to share their ideas
        and lead their own initiatives. Your active participation is the key to
        our mutual success.
      </p>
    ),
    image: InnovationImage,
  },
  {
    title: "Transformation",
    description: (
      <p>
        Boost your confidence, build your wealth, and transform your financial
        outlook. Join us in our mission to reach and empower as many community
        members as possible. Together, we can make a difference.
      </p>
    ),
    image: TransformationImage,
  },
];

const AboutUs = () => {
  return (
    <Section className="bg-pattern" id="about">
      <Container>
        <TitleGroup>
          <Title>Lollipop Finance</Title>
          <Title order={2}>
            How we help our pups navigate treacherous waters of DeFi
          </Title>
        </TitleGroup>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {aboutUs.map((item, index) => (
            <Card key={`about_us_${index}`} className="py-8 group">
              <CardContent className="grid grid-cols-1 sm:grid-cols-[130px,1fr] gap-8 justify-center items-center pb-0">
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="group-hover:-translate-y-2 group-hover:rotate-6 transition-transform"
                  />
                </div>
                <div className="space-y-2">
                  <Title order={3}>{item.title}</Title>
                  <div>{item.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="self-center mx-auto">
            <Image
              src={BowTie}
              alt="Bowtie image"
              width={150}
              className="pointer-events-none rotate-12"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
