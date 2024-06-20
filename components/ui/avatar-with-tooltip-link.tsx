import Link from "next/link";
import { FC } from "react";
import { Avatar, AvatarImage } from "./avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface Props {
  href: string;
  image: string;
  tooltip: string;
}

const AvatarWithTooltipLink: FC<Props> = ({ href, image, tooltip }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link href={href} target="_blank">
          <Avatar>
            <AvatarImage src={image} />
          </Avatar>
        </Link>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
};

export default AvatarWithTooltipLink;
