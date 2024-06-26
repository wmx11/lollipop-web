import MikeImage from "@/assets/mike.svg";
import NismoImage from "@/assets/nismo.svg";
import SamImage from "@/assets/sam.svg";
import ScottImage from "@/assets/scott.svg";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { PawPrint } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Scott",
    title: "Chief Executive Officer",
    image: ScottImage,
  },
  {
    name: "Sam",
    title: "Chief Operating Officer",
    image: SamImage,
  },
  {
    name: "Nismo",
    title: "Chief Software Developer",
    image: NismoImage,
  },
  {
    name: "Mike",
    title: "Chief Technology Officer",
    image: MikeImage,
  },
];

const Team = () => {
  return (
    <Section className="mesh-gradient relative" id="team">
      <div className="bg-pattern absolute inset-0 pointer-events-none"></div>
      <Container className="relative z-10 text-white">
        <TitleGroup className="text-center">
          <Title>The Dogfathers</Title>
          <Title order={2} className="max-w-content mx-auto">
            Meet the dogfathers behind Lollipop. A group of innovative people
            with the vision for a transparent DeFi space.
          </Title>
        </TitleGroup>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
          {team.map((item, index) => (
            <div
              className="flex items-center flex-col gap-4"
              key={`team_${index}`}
            >
              <div>
                <Image src={item.image} alt={`${item.name} image`} />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold flex justify-center gap-2">
                  <PawPrint />
                  <span>{item.name}</span>
                  <PawPrint />
                </div>
                <div>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Team;
