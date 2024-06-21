import React from "react";
import Container from "./container";
import { renderFooterMenuLinks } from "./navigation";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm [&_ul]:space-y-2 [&_h4]:mb-4 py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {renderFooterMenuLinks()}
        </div>
        <div>
          <div className="space-x-2">
            <span>@ {new Date().getFullYear()}</span>
            <span>Lollipop Finance</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
