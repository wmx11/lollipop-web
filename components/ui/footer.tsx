import Container from "./container";
import { renderFooterMenuLinks } from "./navigation";

const Footer = () => {
  return (
    <footer className="text-sm [&_ul]:space-y-4 [&_h4]:mb-4 pt-24 pb-12 text-white">
      <Container>
        <div className="grid lg:grid-cols-[520px_1fr] gap-16 mb-4">
          <div className="w-full max-w-[480px]">
            Become a part of a community full of like-minded people on a mission
            to make DeFi fun and transparent!
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4">{renderFooterMenuLinks()}</div>
        </div>
        <div className="flex items-center justify-center pt-12">
          <div className="space-x-2">
            <span>@ {new Date().getFullYear()}</span>
            <span>Lolly Finance.</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
