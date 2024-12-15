"use client";
import CTAButton from "@/components/ui/call-to-action-button";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Title, { TitleGroup } from "@/components/ui/title";
import { popInVariant } from "@/lib/animation-variants";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <Section
      id="social-media"
      className="bg-gradient-to-b from-[#6122F7] to-[#D06BFF]"
    >
      <Container>
        <TitleGroup className="text-center">
          <motion.div
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popInVariant}
          >
            <Title className="inline">Join our community</Title>
          </motion.div>
          <p className="max-w-content mx-auto">
            Become a part of a community full of like-minded people on a mission
            to make DeFi fun and transparent!
          </p>
        </TitleGroup>
        <div className="flex flex-wrap gap-4 w-full justify-center">
          <CTAButton className="shadow"/>
        </div>
      </Container>
    </Section>
  );
};

export default SocialMedia;
