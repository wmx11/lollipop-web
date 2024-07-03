"use client";
import { MOBILE_BREAKPOINT } from "@/lib/constants";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CTAButton from "./call-to-action-button";
import Container from "./container";
import { renderMenuLinks } from "./navigation";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import AvatarWithTooltipLink from "./avatar-with-tooltip-link";
import { socialLinks } from "@/lib/social-links";

const DesktopNavigation = () => {
  const { scrollY } = useScroll();
  const [isTop, setIsTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  });

  return (
    <Container className="flex justify-center">
      <motion.div
        className="flex items-center justify-between p-4 gap-4 backdrop-blur-sm rounded-full border border-transparent"
        transition={{
          duration: 0.25,
          y: { duration: 1, type: "spring" },
        }}
        initial={{ width: "100%" }}
        animate={{
          width: isTop ? "100%" : "auto",
          y: isTop ? 0 : [-200, 8],
        }}
        style={{
          borderColor: isTop ? "transparent" : "#e4e4e7",
          background: isTop ? "transparent" : "#ffffff50",
        }}
      >
        <div>
          <Link href="/">
            {/* <Image src={Logo} alt="Modiggo logo" width={80} /> */}
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-6">{renderMenuLinks()}</ul>
        </div>
        <div>
          <CTAButton size="sm" className={clsx(!isTop && "rounded-full")} />
        </div>
      </motion.div>
    </Container>
  );
};

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row-reverse items-center justify-between px-4 py-2 mx-1 gap-4 bg-white/50 backdrop-blur-sm rounded-full border translate-y-1">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <div>
            <ul
              className="flex flex-col [&_a]:text-lg [&_a]:text-center [&_a>span]:w-full font-bold gap-6"
              onMouseDown={(e) => {
                const target = e.target as HTMLElement;
                if (target.nodeName !== "UL") {
                  setIsOpen(false);
                }
              }}
            >
              {renderMenuLinks()}
              <li className="pt-2 [&>a]:w-full">
                <CTAButton size="sm" className="rounded-full w-full" />
              </li>
              <li className="pt-2">
                <div className="flex flex-wrap gap-4 w-full">
                  {socialLinks.map((props, index) => (
                    <AvatarWithTooltipLink
                      {...props}
                      key={`social_link_menu_${index}`}
                    />
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
      <div>
        <CTAButton size="sm" className="rounded-full" />
      </div>
    </div>
  );
};

const HeaderNavigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const getWindowWidth = () => {
      const width = window.innerWidth;

      if (width <= MOBILE_BREAKPOINT && !isMobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    getWindowWidth();

    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <nav>{isMobile ? <MobileNavigation /> : <DesktopNavigation />}</nav>;
};

export default HeaderNavigation;
