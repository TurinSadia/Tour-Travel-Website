"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for menu toggle
import Button from "./Button"; // Import your custom Button component

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-white shadow-lg py-2" : "bg-white py-3"
      } fixed top-0 right-0 left-0 w-full z-50 transition-all duration-200`}
    >
      <div className="max_padd-container flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center py-3">
          <img src="./logo.svg" alt="logo" height={99} width={133} />
        </Link>

        {/* Desktop Navigation */}
        <Nav
          containerStyles="hidden lg:flex gap-x-10 items-center justify-center"
          linkStyles="capitalize cursor-pointer py-2 px-4 transition-all"
        />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center text-2xl p-2"
          onClick={toggleMenu}
        >
          {menuOpened ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Navigation */}
        {menuOpened && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden">
            <Nav
              containerStyles="flex flex-col items-center gap-y-4 py-4"
              linkStyles="capitalize cursor-pointer py-2 px-4 transition-all"
            />
          </div>
        )}


      </div>
    </header>
  );
};

export default Header;
