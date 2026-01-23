import React, { useState } from "react";
import Logo from "../assets/Syntaxscout-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearch, FaMoon, FaSun, FaBell, FaUserCircle } from "react-icons/fa";
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
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear your local storage/context here
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-full top-0 left-0 z-50 flex justify-between items-center px-4 md:px-8 py-3 transition-all duration-300 backdrop-blur-md ${
        darkMode ?
          "bg-gray-950/80 text-white border-b border-white/5"
        : "bg-white/80 text-gray-900 border-b border-gray-200"
      }`}
    >
      {/* Left: Logo & Brand */}
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={Logo}
            alt="Syntax Scout"
            className="h-9 w-auto group-hover:scale-110 transition-transform"
          />
          <span className="font-extrabold text-xl tracking-tighter hidden lg:inline">
            SYNTAX<span className="text-indigo-500">SCOUT</span>
          </span>
        </Link>
      </div>

      {/* Center: Search Bar (Desktop) */}
      <div className="flex-1 max-w-xl mx-8 hidden sm:block">
        <div className="relative group">
          <FaSearch
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
              darkMode ?
                "text-gray-500 group-focus-within:text-indigo-400"
              : "text-gray-400"
            }`}
          />
          <input
            type="text"
            placeholder="Search for lessons, snippets, or docs..."
            className={`w-full pl-12 pr-4 py-2.5 rounded-2xl border outline-none transition-all ${
              darkMode ?
                "bg-white/5 border-white/10 text-gray-100 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10"
              : "bg-gray-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            }`}
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-gray-500 font-mono">
            CMD K
          </kbd>
        </div>
      </div>

      {/* Right: Functional Actions */}
      <div className="flex items-center gap-2 md:gap-5">
        <button
          className={`p-2.5 rounded-xl transition-all relative ${
            darkMode ?
              "text-gray-400 hover:bg-white/5"
            : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <FaBell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-gray-950"></span>
        </button>

        <button
          onClick={toggleDarkMode}
          className={`p-2.5 rounded-xl transition-all ${
            darkMode ?
              "text-amber-400 hover:bg-white/5"
            : "text-indigo-600 hover:bg-gray-100"
          }`}
        >
          {darkMode ?
            <FaSun size={19} />
          : <FaMoon size={19} />}
        </button>

        {/* User Profile Avatar (Desktop) */}
        <div className="h-8 w-[1px] bg-white/10 mx-1 hidden md:block"></div>

        <div className="hidden md:flex items-center gap-3 pl-2">
          <div className="text-right">
            <p className="text-xs font-bold leading-none">Alex Dev</p>
            <p className="text-[10px] text-indigo-400 font-medium">
              Pro Student
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20 cursor-pointer">
            AD
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-xl transition-all ${
            darkMode ?
              "text-gray-300 hover:bg-white/5"
            : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {isOpen ?
            <IoMdCloseCircle className="text-indigo-500 text-2xl" />
          : <GiHamburgerMenu className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-[-1]"
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className={`absolute top-full left-0 right-0 shadow-2xl overflow-hidden md:hidden border-t ${
                darkMode ?
                  "bg-gray-900 border-white/5"
                : "bg-white border-gray-100"
              }`}
            >
              <div className="flex flex-col p-5 gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-xl font-semibold transition-all ${
                        isActive ? "bg-indigo-600 text-white"
                        : darkMode ? "text-gray-400 hover:bg-white/5"
                        : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <div className="my-4 h-px bg-white/5"></div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white font-bold py-4 rounded-2xl transition-all"
                >
                  Sign Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
