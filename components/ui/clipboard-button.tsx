"use client";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface Props extends ComponentPropsWithoutRef<"button"> {
  copy?: string;
}

const ClipboardButton: FC<Props> = ({ className, copy }) => {
  const [_, copyText] = useCopyToClipboard();

  const handleClick = async (copy: string) => {
    try {
      await copyText(copy);
      toast.success("Coppied!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy :(");
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button onClick={() => handleClick(copy || "")}>
          <Copy className={cn("w-3 h-3 cursor-pointer", className)} />
        </button>
      </TooltipTrigger>
      <TooltipContent>Copy to clipboard</TooltipContent>
    </Tooltip>
  );
};

export default ClipboardButton;
