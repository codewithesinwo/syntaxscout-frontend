import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Added for smooth transitions
import { getToken } from "../utils/localstorage";
import { LayoutDashboard, LogIn, Code2 } from "lucide-react"; // Added modern icons

const navLinks = [
  { name: "Courses", href: "/courses" },
  { name: "Paths", href: "/leaning-paths" },
  { name: "Access", href: "/lifetime-access" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = !!getToken();

  // Helper for active link styling
  const linkStyles = ({ isActive }) =>
    `transition-colors duration-200 font-medium ${
      isActive ? "text-teal-400" : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="bg-gray-900/95 backdrop-blur-md text-white fixed w-full top-0 left-0 z-[100] border-b border-gray-800 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
        {/* Logo */}
        <Link to="/" className="group">
          <div className="flex items-center space-x-3">
            <img
              src="/Syntaxscout-logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Syntax Scout
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.href} className={linkStyles}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <NavLink to={isLoggedIn ? "/dashboard" : "/login"}>
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 p-2 px-6 rounded-xl cursor-pointer font-bold transition-all active:scale-95">
              {isLoggedIn ?
                <>
                  <LayoutDashboard size={16} className="text-teal-400" />
                  Dashboard
                </>
              : <>
                  <LogIn size={16} className="text-teal-400" />
                  Login
                </>
              }
            </button>
          </NavLink>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-transform active:scale-90"
        >
          {isOpen ?
            <IoMdCloseCircle size={28} />
          : <GiHamburgerMenu size={24} />}
        </button>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-16 right-4 w-64 bg-gray-900 border border-gray-800 text-white flex flex-col items-start p-6 gap-6 text-lg font-semibold lg:hidden rounded-3xl shadow-2xl"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={linkStyles}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <hr className="w-full border-gray-800" />

              <NavLink
                to={isLoggedIn ? "/dashboard" : "/login"}
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-gray-900 p-3 rounded-2xl font-bold transition-colors">
                  {isLoggedIn ? "Dashboard" : "Login"}
                </button>
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
