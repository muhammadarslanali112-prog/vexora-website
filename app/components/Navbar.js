"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-vexora-black/90 backdrop-blur-sm border-b border-vexora-red/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Vexora Visual Logo"
            width={45}
            height={45}
          />
          <span className="font-heading text-xl font-bold tracking-wider">
            VEXORA
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a  
              key={link.name}
              href={link.href}
              className="font-body text-sm uppercase tracking-wide hover:text-vexora-red transition-colors"
            >
              {link.name}
            </a>
          ))}
            <a
            href="#contact"
            className="bg-vexora-red text-white px-5 py-2 text-sm uppercase font-semibold tracking-wide hover:bg-red-700 transition-colors"
          >
          
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-body text-sm uppercase tracking-wide hover:text-vexora-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-vexora-red text-white px-5 py-2 text-sm uppercase font-semibold tracking-wide"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}