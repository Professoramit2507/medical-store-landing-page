
"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Pill,
  Upload,
  Box,
  Phone,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll hole background change hobe
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Medicines", href: "/medicines", icon: <Pill size={18} /> },
    { name: "Prescription", href: "/prescription", icon: <Upload size={18} /> },
    { name: "Orders", href: "/orders", icon: <Box size={18} /> },
    { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 px-4 md:px-10 py-3 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-green-600 p-2 rounded-xl text-white group-hover:rotate-12 transition-transform duration-300">
            <Pill size={22} />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight leading-none">
              Medi<span className="text-green-600">Care</span>
            </h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest hidden sm:block">
              Pharmacy Online
            </p>
          </div>
        </Link>

        {/* CENTER: Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-2 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-500 hover:text-green-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-4.5 left-0 w-full h-0.75 bg-green-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 md:gap-4">
        

          <div className="hidden sm:flex items-center gap-2">
            <Link href="/login">
              <button className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/20 transition-all active:scale-95">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/20 transition-all active:scale-95">
                Register
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-xl transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-24 left-4 right-4 bg-white shadow-2xl rounded-4xl border border-gray-100 p-6 z-99"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${
                    pathname === link.href
                      ? "bg-green-50 text-green-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`${pathname === link.href ? "text-green-600" : "text-gray-400"}`}
                  >
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              ))}

              <div className="h-px bg-gray-100 my-4" />

              <div className="grid grid-cols-2 gap-4">
                <Link href="/login" className="w-full">
                  <button className="w-full py-4 text-gray-700 font-bold border border-gray-200 rounded-2xl">
                    Login
                  </button>
                </Link>
                <Link href="/register" className="w-full">
                  <button className="w-full py-4 bg-green-600 text-white font-bold rounded-2xl">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
