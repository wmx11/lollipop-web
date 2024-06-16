import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {}

const Container: FC<Props> = (props) => {
  return (
    <div className={cn("container mx-auto", props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
