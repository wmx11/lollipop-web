import CTAButton from "@/components/ui/call-to-action-button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";

const AboutUs = () => {
  return (
    <Section id="about">
      <Container className="text-center">
        <TitleGroup>
          <Title>About Lollipop</Title>
        </TitleGroup>
        <div className="space-y-4">
          <p className="mx-auto max-w-content">
            Lollipop is more than just a token. We're building a space where the
            core is community. We believe that DeFi can be easy, democratized,
            transparent, and most importantly - fun. Too many bad actors,
            impersonators, grifters, and bad user experience decisions plague
            the crypto space and our mission is to change this by becoming a
            trusted authority and operator in the space. Join us on the
            adventure and become part of this movement!
          </p>
          <CTAButton size="default" />
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
