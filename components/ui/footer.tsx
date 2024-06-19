import React from "react";
import Container from "./container";
import { renderFooterMenuLinks } from "./navigation";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm [&_ul]:space-y-2 [&_h4]:mb-4 py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderFooterMenuLinks()}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
