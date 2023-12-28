import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { ServerThemeProvider } from "@wits/next-themes";

export const metadata: Metadata = {
  title: "Krafter UI",
  description: "Official Component Library of Crafter Station",
  keywords: "crafter station, crafter-station, crafter, krafter-ui, krafter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ServerThemeProvider attribute="class">
      <html
        lang="en"
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "dark bg-main text-main"
        )}
      >
        <body>{children}</body>
      </html>
    </ServerThemeProvider>
  );
}
