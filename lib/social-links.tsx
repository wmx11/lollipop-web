import CoingeckoLogo from "@/assets/logos/coingecko.webp";
import DexscreenerLogo from "@/assets/logos/dexscreener.webp";
import DextoolsLogo from "@/assets/logos/dextools.webp";
import DiscordLogo from "@/assets/logos/discord.svg";
import PancakeSwapLogo from "@/assets/logos/pancakeswap.webp";
import TelegramLogo from "@/assets/logos/telegram.svg";
import TwitterLogo from "@/assets/logos/twitter.webp";
import RedditLogo from "@/assets/logos/reddit.svg";
import XLogo from "@/assets/logos/x.svg";
import config from "./config";

export const marketLinks = [
  {
    href: config.dexscreener,
    image: DexscreenerLogo.src,
    tooltip: "Dexscreener",
  },
  {
    href: config.dextools,
    image: DextoolsLogo.src,
    tooltip: "Dextools",
  },
  {
    href: config.coingecko,
    image: CoingeckoLogo.src,
    tooltip: "CoinGecko",
  },
  {
    href: config.lollipopTokenSwapUrl,
    image: PancakeSwapLogo.src,
    tooltip: "PancakeSwap",
  },
];

export const socialLinks = [
  {
    href: config.twitter,
    icon: <XLogo />,
    tooltip: "X",
  },
  {
    href: config.telegram,
    icon: <TelegramLogo />,
    tooltip: "Telegram",
  },
  {
    href: config.discord,
    icon: <DiscordLogo />,
    tooltip: "Discord",
  },
  {
    href: config.reddit,
    icon: <RedditLogo />,
    tooltip: "Reddit",
  },
];
