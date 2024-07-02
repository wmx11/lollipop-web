import React from "react";
import Container from "./container";
import { renderFooterMenuLinks } from "./navigation";
import LollipopDog from "@/assets/lollipop-dog-2.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white bg-pattern-bubbles border-t border-zinc-50 text-sm [&_ul]:space-y-2 [&_h4]:mb-4 pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-4">
          {renderFooterMenuLinks()}
          <div className="blob w-[125px] md:w-[150px]">
            <Image src={LollipopDog} alt="Lollipop dog" width={150} />
          </div>
        </div>
        <div className="flex items-center justify-center pt-12">
          <div className="space-x-2">
            <span>@ {new Date().getFullYear()}</span>
            <span>Lollipop Finance.</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
