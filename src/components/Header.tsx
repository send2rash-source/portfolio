"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg shadow-slate-100/50 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-display text-xl font-bold gradient-text">Rashmi Singh</div>
        
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium relative group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2"
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className={`block h-0.5 w-6 bg-slate-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-slate-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-slate-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-indigo-600 transition-colors text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}