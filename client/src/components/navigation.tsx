import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoPath from "@assets/Neoteq Logo.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold gradient-text">Neoteq</div>
            <img 
              src={logoPath} 
              alt="Neoteq Logo"
              className="w-8 h-8 object-contain rounded-full"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-[hsl(var(--light-green))] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-[hsl(var(--light-green))] transition-colors duration-300"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[hsl(var(--light-green))] transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[hsl(var(--light-green))] transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          <button className="md:hidden text-[hsl(var(--light-green))]">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
