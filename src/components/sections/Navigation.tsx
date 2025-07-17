"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "ℍ𝕆𝕄𝔼", href: "#home" },
    { name: " 𝔸𝔹𝕆𝕌𝕋 ", href: "#about" },
    { name: "ℙℝ𝕆𝕁𝔼ℂ𝕋𝕊", href: "#projects" },
    { name: "𝕊𝕂𝕀𝕃𝕃𝕊", href: "#skills" },
    { name: "𝔼𝕏ℙ𝔼ℝ𝕀𝔼ℕℂ𝔼", href: "#experience" },
    { name: "ℂ𝕆ℕ𝕋𝔸ℂ𝕋", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-5 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold tracking-wider">
            ℙ𝕆ℝ𝕋𝔽𝕆𝕃𝕀𝕆
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-sm font-normal tracking-wider hover:opacity-70 transition-opacity duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-4 border-t border-gray-600">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-sm font-normal tracking-wider hover:opacity-70 transition-opacity duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}