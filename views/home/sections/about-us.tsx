import EducationImage from "@/assets/education.svg";
import InnovationImage from "@/assets/innovation.svg";
import NavigationImage from "@/assets/navigation.svg";
import TransformationImage from "@/assets/transformation.svg";
import AccumulationImage from "@/assets/wallet.svg";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { cn } from "@/lib/utils";

const aboutUs = [
  {
    title: "Accumulation",
    description: (
      <p>
        Grow your assets, increase your income, and deepen your understanding of
        DeFi. You can unlock the true potential of decentralized finance and
        build a robust financial future.
      </p>
    ),
    image: <AccumulationImage />,
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
    image: <InnovationImage />,
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
    image: <TransformationImage />,
  },
  {
    title: "Navigation",
    description: (
      <p>
        Experience a safe and welcoming introduction to DeFi with the Lolly
        team. We pride ourselves on being genuine and transparent, ready to
        assist every community member. Let us guide you through the DeFi
        landscape with confidence and clarity.
      </p>
    ),
    image: <NavigationImage />,
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
    image: <EducationImage />,
  },
];

const AboutUs = () => {
  return (
    <Section className="relative overflow-clip" id="about">
      <Container className="relative z-10">
        <TitleGroup className="relative z-10">
          <Title>
            Lolly <span className="text-primary">Finance</span>
          </Title>
          <p>How we simplify and sweeten your crypto journey</p>
        </TitleGroup>
        <div className="flex flex-wrap flex-col md:flex-row items-center md:items-start gap-4 relative z-10 justify-center">
          {aboutUs.map((item, index) => (
            <div
              key={`about_us_${index}`}
              className={cn(
                "py-8 group flex flex-col items-center space-y-4 md:w-[30%]"
              )}
            >
              <div className="mx-auto justify-self-end sm:justify-self-center lg:justify-self-auto">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-l from-primary to-secondary rounded-md border border-primary shadow">
                  {item.image}
                </div>
              </div>
              <div className="text-center space-y-4">
                <Title order={3} className="underline underline-offset-[16px]">
                  {item.title}
                </Title>
                <p className="text-sm max-w-[320px] w-full leading-loose text-white/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
