import AvatarWithTooltipLink from "@/components/ui/avatar-with-tooltip-link";
import CTAButton from "@/components/ui/call-to-action-button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { socialLinks } from "@/lib/social-links";

const SocialMedia = () => {
  return (
    <Section className="bg-pattern">
      <Container>
        <TitleGroup className="text-center">
          <Title>Join our community</Title>
          <Title order={2} className="max-w-content mx-auto">
            Become a part of a community full of like-minded people on a mission
            to make DeFi fun and transparent!
          </Title>
        </TitleGroup>
        <div className="flex flex-wrap gap-4 w-full justify-center">
          {socialLinks.map((props, index) => (
            <AvatarWithTooltipLink {...props} key={`social_link_${index}`} />
          ))}
          <CTAButton />
        </div>
      </Container>
    </Section>
  );
};

export default SocialMedia;
