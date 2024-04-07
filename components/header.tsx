import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORKS", href: "#works" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  return (
    <header className="container h-16 flex items-center justify-between border-b sticky top-0 bg-inherit z-50 ">
      <Image src="/logo.png" alt="logo image" width={40} height={40} />
      <ul className="flex gap-1">
        {navItems.map((item) => (
          <li key={item.label}>
            <Button variant="ghost" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </header>
  );
}
