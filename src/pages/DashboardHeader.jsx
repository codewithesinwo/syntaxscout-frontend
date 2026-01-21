import React, { useState } from "react";
import Logo from "../assets/Syntaxscout-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Assignment", href: "/dashboard/assignments" },
  { name: "Grades", href: "/dashboard/grades" },
  { name: "Messages", href: "/dashboard/messages" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  // Destructure toggleDarkMode from your context
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 z-40 flex justify-between items-center px-6 py-3 shadow-md transition-colors duration-300 ${
        darkMode ?
          "bg-black text-white border-b border-gray-800"
        : "bg-white text-gray-900 border-b border-gray-200"
      }`}
    >
      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <span className="font-bold text-xl hidden md:inline">Syntax Scout</span>
      </Link>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-4 hidden sm:block">
        <div className="relative">
          <FaSearch
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          />
          <input
            type="text"
            placeholder="Search courses..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg border outline-none transition-all focus:ring-2 focus:ring-amber-500 ${
              darkMode ?
                "bg-neutral-900 border-gray-700 text-gray-100"
              : "bg-gray-100 border-gray-300 text-gray-800"
            }`}
          />
        </div>
      </div>

      {/* Right: Actions (Theme Toggle + Mobile Menu) */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors ${
            darkMode ?
              "text-amber-400 hover:bg-gray-800"
            : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label="Toggle Theme"
        >
          {darkMode ?
            <FaSun size={20} />
          : <FaMoon size={20} />}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ?
            <IoMdCloseCircle className="text-amber-600" />
          : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`absolute top-full left-0 right-0 shadow-xl overflow-hidden md:hidden border-t ${
              darkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors ${
                      isActive ? "text-amber-500"
                      : darkMode ? "text-gray-300"
                      : "text-gray-700"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <hr
                className={darkMode ? "border-gray-800" : "border-gray-200"}
              />
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl transition-all">
                LOG OUT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
