import React, { useState } from "react";
import Logo from "../assets/Syntaxscout-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaMoon,
  FaSun,
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
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
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Dropdown State
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
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

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-xl mx-8 hidden sm:block">
        <div className="relative group">
          <FaSearch
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${darkMode ? "text-gray-500 group-focus-within:text-indigo-400" : "text-gray-400"}`}
          />
          <input
            type="text"
            placeholder="Search for lessons..."
            className={`w-full pl-12 pr-4 py-2.5 rounded-2xl border outline-none transition-all ${
              darkMode ?
                "bg-white/5 border-white/10 text-gray-100 focus:border-indigo-500/50"
              : "bg-gray-100 border-transparent focus:bg-white focus:border-indigo-500"
            }`}
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <button
          className={`p-2.5 rounded-xl transition-all relative ${darkMode ? "text-gray-400 hover:bg-white/5" : "text-gray-500 hover:bg-gray-100"}`}
        >
          <FaBell size={18} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-gray-950"></span>
        </button>

        <button
          onClick={toggleDarkMode}
          className={`p-2.5 rounded-xl transition-all ${darkMode ? "text-amber-400 hover:bg-white/5" : "text-indigo-600 hover:bg-gray-100"}`}
        >
          {darkMode ?
            <FaSun size={19} />
          : <FaMoon size={19} />}
        </button>

        {/* USER PROFILE SECTION */}
        <div className="relative ml-2">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`flex items-center gap-2 p-1.5 pr-3 rounded-2xl transition-all border ${
              darkMode ?
                "border-white/5 hover:bg-white/5"
              : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                JD
              </div>
              {/* Online Status Dot */}
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-950 rounded-full"></span>
            </div>
            <span className="hidden md:block text-xs font-bold tracking-wide">
              John Doe
            </span>
          </button>

          {/* User Dropdown Menu */}
          <AnimatePresence>
            {isProfileOpen && (
              <>
                {/* Invisible backdrop to close dropdown on click outside */}
                <div
                  className="fixed inset-0 z-[-1]"
                  onClick={() => setIsProfileOpen(false)}
                ></div>

                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className={`absolute right-0 mt-3 w-56 rounded-[1.5rem] shadow-2xl border p-2 overflow-hidden ${
                    darkMode ?
                      "bg-gray-900 border-white/5"
                    : "bg-white border-gray-100"
                  }`}
                >
                  <div className="px-4 py-3 border-b border-white/5 mb-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
                      Account
                    </p>
                    <p className="text-sm font-bold truncate">
                      john.doe@syntaxscout.com
                    </p>
                  </div>

                  <Link
                    to="/dashboard/settings"
                    onClick={() => setIsProfileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${darkMode ? "hover:bg-white/5" : "hover:bg-gray-50"}`}
                  >
                    <FaUser className="opacity-40" /> My Profile
                  </Link>

                  <Link
                    to="/dashboard/settings"
                    onClick={() => setIsProfileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${darkMode ? "hover:bg-white/5" : "hover:bg-gray-50"}`}
                  >
                    <FaCog className="opacity-40" /> Settings
                  </Link>

                  <div
                    className={`h-px my-1 ${darkMode ? "bg-white/5" : "bg-gray-100"}`}
                  ></div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    <FaSignOutAlt /> Sign Out
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-xl transition-all ${darkMode ? "text-gray-300 hover:bg-white/5" : "text-gray-700 hover:bg-gray-100"}`}
        >
          {isOpen ?
            <IoMdCloseCircle className="text-indigo-500 text-2xl" />
          : <GiHamburgerMenu className="text-xl" />}
        </button>
      </div>

      {/* Mobile Nav Links Overlay... (Rest of your existing code) */}
    </motion.header>
  );
}
