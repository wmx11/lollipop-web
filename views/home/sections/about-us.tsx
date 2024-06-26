import DogHeadImage from "@/assets/dog_head_2.png";
import AccumulationImage from "@/assets/accumulation.png";
import EducationImage from "@/assets/education.png";
import InnovationImage from "@/assets/innovation.png";
import NavigationImage from "@/assets/navigation.png";
import TransformationImage from "@/assets/transformation.png";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { cn } from "@/lib/utils";
import Image from "next/image";

const aboutUs = [
  {
    title: "Navigation",
    description: (
      <p>
        Experience a safe and welcoming introduction to DeFi with the Lollipop
        team. We pride ourselves on being genuine and transparent, ready to
        assist every community member. Let us guide you through the DeFi
        landscape with confidence and clarity.
      </p>
    ),
    image: NavigationImage,
  },
  {
    title: "Education",
    description: (
      <p>
        Eager to learn about DeFi? Seek answers, gather insights, and benefit
        from the wisdom of our experienced team and vibrant community. We are
        dedicated to enriching your financial literacy and equipping you with
        the knowledge to make better DeFi decisions.
      </p>
    ),
    image: EducationImage,
  },
  {
    title: "Accumulation",
    description: (
      <p>
        Grow your assets, increase your income, and deepen your understanding of
        DeFi. You can unlock the true potential of decentralized finance and
        build a robust financial future.
      </p>
    ),
    image: AccumulationImage,
  },
  {
    title: "Innovation",
    description: (
      <p>
        Your voice matters. We will support and facilitate community-driven
        projects, empowering our members to share their ideas and lead their own
        initiatives. Your active participation is the key to our mutual success.
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
    className: "col-span-1 lg:col-span-2",
  },
];

const AboutUs = () => {
  return (
    <Section className="bg-pattern relative overflow-clip" id="about">
      <Container className="relative z-10">
        <TitleGroup>
          <Title>Lollipop Finance</Title>
          <Title order={2}>
            How we simplify and sweeten your crypto journey
          </Title>
        </TitleGroup>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {aboutUs.map((item, index) => (
            <Card
              key={`about_us_${index}`}
              className={cn("py-8 group", item?.className)}
            >
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
        </div>
      </Container>
      <Image
        src={DogHeadImage}
        alt="Dog head image"
        width={320}
        className="absolute top-4 right-4 rotate-12 md:opacity-100 opacity-50 z-0"
      />
    </Section>
  );
};

export default AboutUs;
