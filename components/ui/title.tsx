import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"h1"> {
  order?: 1 | 2 | 3 | 4;
}

const Title: FC<Props> = ({ order = 1, children, className, ...props }) => {
  switch (order) {
    case 1:
      return (
        <h1
          {...props}
          className={cn("font-semibold text-4xl !leading-tight", className)}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 {...props} className={cn("font-semibold text-2xl", className)}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 {...props} className={cn("font-semibold text-xl", className)}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 {...props} className={cn("font-semibold text-lg", className)}>
          {children}
        </h4>
      );
    default:
      return;
  }
};

export default Title;
