"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";

const navItems = [
  { label: "HOME", href: "hero" },
  { label: "ABOUT", href: "about" },
  { label: "SKILLS", href: "skills" },
  { label: "WORKS", href: "works" },
  { label: "CONTACT", href: "contact" },
];

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuToggle = () => {
    setOpen(!isOpen);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };
  return (
    <div className="container flex flex-col sticky top-0 bg-white z-50">
      <header className="py-6 flex justify-between items-center">
        <Scroll to="hero" smooth={true} duration={600} offset={-30}>
          <Image
            src="/logo.png"
            alt="logo image"
            width={40}
            height={40}
            onClick={handleMenuClose}
          />
        </Scroll>

        <nav
          className={
            isOpen
              ? "z-40 bg-blue-100 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
              : "fixed right-[-100%] md:right-4"
          }
        >
          <ul
            className={
              isOpen
                ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
                : "container block md:flex md:gap-8"
            }
          >
            {navItems.map((item) => {
              return (
                <li key={item.label} className="hover:opacity-70">
                  <Scroll
                    to={item.href}
                    smooth={true}
                    duration={600}
                    offset={-30}
                    onClick={handleMenuClose}
                  >
                    {item.label}
                  </Scroll>
                </li>
              );
            })}
          </ul>
        </nav>

        <button className="z-50 space-y-2 md:hidden" onClick={handleMenuToggle}>
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
                : "block w-8 h-0.5 bg-gray-600 duration-300"
            }
          />
          <span
            className={
              isOpen
                ? "block opacity-0 duration-300"
                : "block w-8 h-0.5 bg-gray-600 duration-300"
            }
          />
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
                : "block w-8 h-0.5 bg-gray-600 duration-300"
            }
          />
        </button>
      </header>
    </div>
  );
}
