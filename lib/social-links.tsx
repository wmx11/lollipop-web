import CoingeckoLogo from "@/assets/logos/coingecko.webp";
import DexscreenerLogo from "@/assets/logos/dexscreener.webp";
import DextoolsLogo from "@/assets/logos/dextools.webp";
import DiscordLogo from "@/assets/logos/discord.webp";
import PancakeSwapLogo from "@/assets/logos/pancakeswap.webp";
import TelegramLogo from "@/assets/logos/telegram.webp";
import TwitterLogo from "@/assets/logos/twitter.webp";
import RedditLogo from "@/assets/logos/reddit.webp";
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
    href: config.telegram,
    image: TelegramLogo.src,
    tooltip: "Telegram",
  },
  {
    href: config.discord,
    image: DiscordLogo.src,
    tooltip: "Discord",
  },
  {
    href: config.twitter,
    image: TwitterLogo.src,
    tooltip: "Twitter",
  },
  {
    href: config.reddit,
    image: RedditLogo.src,
    tooltip: "Reddit",
  },
];
