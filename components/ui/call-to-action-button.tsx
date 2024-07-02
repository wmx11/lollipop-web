import React, { FC } from "react";
import { Button, ButtonProps } from "./button";
import { Lollipop } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import config from "@/lib/config";

const CTAButton: FC<ButtonProps> = ({ size = "lg", ...props }) => {
  return (
    <Link href={config.lollipopTokenSwapUrl} target="_blank">
      <Button className={cn("group", props.className)} {...props} size={size}>
        <span>Get Lollipop</span>
        <Lollipop className="w-4 h-4 ml-2 group-hover:rotate-90 transition-transform" />
      </Button>
    </Link>
  );
};

export default CTAButton;
