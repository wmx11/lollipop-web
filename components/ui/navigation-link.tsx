"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"a"> {
  dark?: boolean;
}

export const NavigationLink: FC<Props> = ({ href, children, dark = false }) => {
  const pathname = usePathname();

  const getHref = () => {
    if (pathname === "/" && href?.startsWith("#")) {
      return href;
    }

    if (pathname !== "/" && href?.startsWith("#")) {
      return `/${href}`;
    }

    return href;
  };

  const _href = getHref();

  return (
    <Link href={_href as string} className="group text-sm inline-block">
      <span className="relative">
        <span>{children}</span>
        <div
          className={cn(
            "absolute bottom-0 group-hover:w-full scale-x-0 group-hover:scale-x-100 origin-left transition h-[2px] bg-foreground",
            dark && "bg-white"
          )}
        ></div>
      </span>
    </Link>
  );
};

export default NavigationLink;
