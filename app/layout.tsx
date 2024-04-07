import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: " %s | yume-ebina Portfolio",
    default: "yume-ebina Portfolio",
  },
  description: "蝦名結芽のポートフォリオサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-dvh")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <footer className="container sticky top-full h-16 flex justify-between items-center border-t">
            <p>&copy;2024 yume ebina</p>
            <ModeToggle />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
