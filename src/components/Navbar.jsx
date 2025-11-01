import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Modern, responsive Navbar using Tailwind CSS
// Usage:
// 1) Put your logo image in public/images/logo.jpg (or change the src)
// 2) Ensure Tailwind CSS is configured in the project
// 3) Install lucide-react: `npm i lucide-react`

export default function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "preset", label: "Try Preset" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (id) => {
    if (scrollToSection) scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LEFT: Logo + name */}
            <div className="flex items-center">
              <button
                onClick={() => handleNav("home")}
                className="focus:outline-none"
                aria-label="Go to home"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-25 h-25 object-contain" // ubah ukuran sesuai kebutuhan
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </button>
            </div>

            {/* CENTER / DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="relative px-2 py-1 text-sm font-medium hover:text-gray-700 transition"
                >
                  {item.label}
                  <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-linear-to-r from-transparent via-gray-400 to-transparent opacity-0 group-hover:opacity-100 transition"></span>
                </button>
              ))}

              {/* CTA */}
              <button
                onClick={() => handleNav("contact")}
                className="ml-2 inline-block rounded-full px-4 py-2 text-sm font-semibold bg-linear-to-r from-gray-900 to-gray-500 text-white shadow-md hover:opacity-95 transition"
              >
                Book Now
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Toggle menu"
                className="p-2 rounded-md border border-gray-200 bg-white/60 shadow-sm"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE PANEL */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="mt-2 space-y-2 rounded-lg bg-white/95 p-3 shadow ring-1 ring-black/5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 transition"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => handleNav("preset")}
                className="w-full mt-1 text-left px-3 py-2 rounded bg-linear-to-r from-black to-gray-500 text-white font-semibold"
              >
                Book Now
              </button>


            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
