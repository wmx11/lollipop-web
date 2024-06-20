import React, { FC } from "react";
import { Button, ButtonProps } from "./button";
import { Lollipop } from "lucide-react";
import { cn } from "@/lib/utils";

const CTAButton: FC<ButtonProps> = ({ size = "lg", ...props }) => {
  return (
    <Button className={cn("group", props.className)} {...props} size={size}>
      <span>Get Lollipop</span>
      <Lollipop className="w-4 h-4 ml-2 group-hover:rotate-90 transition-transform" />
    </Button>
  );
};

export default CTAButton;
