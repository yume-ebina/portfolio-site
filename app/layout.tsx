import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: " %s | yume-ebina Portfolio",
    default: "yume-ebina Portfolio",
  },
  description: "蝦名結芽のポートフォリオサイトです",
};

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "WORKS", href: "/works" },
  { label: "CONTAT", href: "/contact" },
];

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
          <header className="container h-16 flex items-center justify-between border-b">
            <h1>LOGO</h1>
            <ul className="flex gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Button variant="ghost" asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </header>
          {children}
          <footer className="container sticky top-full h-16 flex justify-between items-center border-t">
            <p>&copy; yume</p>
            <ModeToggle />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
