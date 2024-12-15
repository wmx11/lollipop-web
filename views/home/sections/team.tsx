"use client";
import MikeImage from "@/assets/mike.svg";
import NismoImage from "@/assets/nismo.svg";
import SamImage from "@/assets/sam.svg";
import ScottImage from "@/assets/scott.svg";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { cn } from "@/lib/utils";

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
    <Section
      className="relative overflow-clip flex flex-col items-center justify-center min-h-[90dvh]"
      id="team"
    >
      <div className="h-60 w-60 blur-[150px] bg-secondary absolute z-[-1]"></div>

      <Container className="relative z-10 text-white">
        <TitleGroup className="text-center">
          <Title>
            The <span className="text-primary">Dogfathers</span>
          </Title>
          <p className="max-w-content mx-auto text-sm">
            Meet the dogfathers behind Lolly. A group of innovative people with
            the vision for a transparent DeFi space.
          </p>
        </TitleGroup>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((item, index) => {
            const isEven = index % 2 !== 0;

            return (
              <Card
                key={`team_${index}`}
                className={cn(
                  "flex items-center flex-col gap-4 min-h-[460px] pt-4 px-0",
                  {
                    "md:mt-16 md:-mb-16": isEven,
                  }
                )}
              >
                <CardContent
                  className={cn("p-0 w-full", {
                    "pr-6": isEven,
                    "pl-6": !isEven,
                  })}
                >
                  <div
                    className={cn("space-y-6", {
                      "text-right": isEven,
                      "text-left": !isEven,
                    })}
                  >
                    <div className="text-3xl font-bold flex justify-center gap-2">
                      {isEven && (
                        <div className="h-[1px] bg-white w-full self-end"></div>
                      )}
                      <span>{item.name}</span>
                      {!isEven && (
                        <div className="h-[1px] bg-white w-full self-end"></div>
                      )}
                    </div>
                    <p className="text-xs">{item.title}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Team;
