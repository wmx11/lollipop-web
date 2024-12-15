import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { Avatar, AvatarImage } from "./avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface Props {
  href: string;
  image?: string;
  icon?: ReactElement;
  tooltip: string;
  className?: string;
}

const AvatarWithTooltipLink: FC<Props> = ({
  href,
  image,
  tooltip,
  icon,
  className,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link href={href} target="_blank">
          <Avatar className={cn("max-w-10", className)}>
            {icon ? icon : <AvatarImage src={image} />}
          </Avatar>
        </Link>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
};

export default AvatarWithTooltipLink;
