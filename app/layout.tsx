import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
          <footer className="sticky top-full h-16 flex justify-between items-center border-t px-8">
            <p>&copy;2024 yume ebina</p>
            <ModeToggle />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
