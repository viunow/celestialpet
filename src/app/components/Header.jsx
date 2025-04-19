"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Custom NavLink component with animated underline
  const NavLink = ({ href, label }) => {
    return (
      <button
        onClick={() => scrollToSection(href)}
        className="text-celestial-brown relative group transition-colors overflow-hidden"
      >
        <span
          className={`${
            isScrolled ? "text-celestial-brown" : "text-white"
          } text-lg font-semibold`}
          style={{
            textShadow: isScrolled ? "none" : "0 1px 2px rgba(0, 0, 0, 0.7)",
          }}
        >
          {label}
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-celestial-brown/40 group-hover:w-full transition-all duration-500 ease-in-out"></span>
      </button>
    );
  };

  // Mobile NavLink with underline effect
  const MobileNavLink = ({ href, label }) => {
    return (
      <button
        onClick={() => scrollToSection(href)}
        className="text-celestial-brown relative group transition-colors py-2 w-full text-left overflow-hidden"
      >
        <span>{label}</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-celestial-blue group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="celestial-container flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Logo />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-8 items-center"
        >
          <NavLink href="sobre" label="Sobre" />
          <NavLink href="servicos" label="Serviços" />
          {/* <NavLink href="depoimentos" label="Depoimentos" /> */}
          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-celestial-blue text-celestial-brown hover:bg-celestial-blue/80 hover:drop-shadow-lg transition-all duration-300 ease-in-out"
          >
            Contato
          </Button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="text-celestial-brown"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="celestial-container py-4 flex flex-col space-y-4">
            <MobileNavLink href="sobre" label="Sobre" />
            <MobileNavLink href="servicos" label="Serviços" />
            {/* <MobileNavLink href="depoimentos" label="Depoimentos" /> */}
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-celestial-blue text-celestial-brown hover:bg-celestial-blue/80 w-full"
            >
              Contato
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
