"use client";
import ChatImage from "@/assets/chat.png";
import AvatarWithTooltipLink from "@/components/ui/avatar-with-tooltip-link";
import CTAButton from "@/components/ui/call-to-action-button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { popInVariant } from "@/lib/animation-variants";
import { socialLinks } from "@/lib/social-links";
import { motion } from "framer-motion";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <Section id="social-media">
      <Container>
        <TitleGroup className="text-center">
          <motion.div
            className="flex gap-2 items-center justify-center"
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popInVariant}
          >
            <Title>Join our community</Title>
            <Image
              src={ChatImage}
              alt="Chat image"
              width={40}
              className="pointer-events-none"
            />
          </motion.div>
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
