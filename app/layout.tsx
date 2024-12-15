import Footer from "@/components/ui/footer";
import HeaderNavigation from "@/components/ui/header-navigation";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Unbounded as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "Lolly Finance | %s",
    default: "Lolly Finance",
  },
  description:
    "Simplifying and sweetening your crypto journey! Lolly is cultivating a community, demystifying DeFi and delivering delight.",
  openGraph: {
    title: "Lolly Finance",
    description:
      "Simplifying and sweetening your crypto journey! Lolly is cultivating a community, demystifying DeFi and delivering delight.",
    url: "https://lollipop.finance",
    images: "https://lollipop.finance/meta_image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gradient-to-tr from-[#110037] to-[#09002B]",
          fontSans.variable
        )}
      >
        <TooltipProvider delayDuration={300}>
          <header className="fixed w-full top-0 z-50">
            <HeaderNavigation />
          </header>
          <main>{children}</main>
          <Footer />
          <Toaster richColors />
        </TooltipProvider>
      </body>
    </html>
  );
}
