import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/Syntaxscout-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaMoon,
  FaSun,
  FaBell,
  FaUserCircle,
  FaBookmark,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Global Feed", href: "/dashboard/feed" }, // Added to match sidebar
  { name: "Messages", href: "/dashboard/messages" },
];

export default function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const profileRef = useRef(null);

  // Syncing with the "Social" data we built earlier
  const user = {
    name: "Alex Dev",
    role: "Pro Student",
    initials: "AD",
    levelProgress: 75, // Matches the info panel we built
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      {/* Left: Logo */}
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={Logo}
            alt="Syntax Scout"
            className="h-9 w-auto group-hover:scale-110 transition-transform"
          />
          <span className="font-extrabold text-xl tracking-tighter hidden lg:inline uppercase">
            SYNTAX<span className="text-indigo-500">SCOUT</span>
          </span>
        </Link>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-xl mx-8 hidden sm:block">
        <div className="relative group">
          <FaSearch
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${darkMode ? "text-gray-500 group-focus-within:text-indigo-400" : "text-gray-400"}`}
          />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search lessons or peers..."
            className={`w-full pl-12 pr-4 py-2.5 rounded-2xl border outline-none transition-all ${
              darkMode ?
                "bg-white/5 border-white/10 text-gray-100 focus:border-indigo-500/50"
              : "bg-gray-100 border-transparent focus:bg-white focus:border-indigo-500"
            }`}
          />
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        <button
          className={`p-2.5 rounded-xl transition-all relative ${darkMode ? "text-gray-400 hover:bg-white/5" : "text-gray-500 hover:bg-gray-100"}`}
        >
          <FaBell size={18} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-gray-900"></span>
        </button>

        <button
          onClick={toggleDarkMode}
          className={`p-2.5 rounded-xl transition-all ${darkMode ? "text-amber-400 hover:bg-white/5" : "text-indigo-600 hover:bg-gray-100"}`}
        >
          {darkMode ?
            <FaSun size={19} />
          : <FaMoon size={19} />}
        </button>

        <div className="h-8 w-[1px] bg-white/10 mx-1 hidden md:block"></div>

        {/* PROFILE SECTION */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 pl-2 group"
          >
            <div className="hidden md:text-right md:block">
              <p className="text-xs font-black leading-none group-hover:text-indigo-500 transition-colors">
                {user.name}
              </p>
              <p className="text-[9px] text-indigo-400 font-bold uppercase tracking-tighter">
                {user.role}
              </p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform">
              {user.initials}
            </div>
            <FaChevronDown
              size={10}
              className={`opacity-30 transition-transform ${showProfile ? "rotate-180" : ""}`}
            />
          </button>

          {/* Profile Dropdown */}
          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className={`absolute right-0 mt-4 w-64 rounded-[2rem] p-4 shadow-2xl border ${
                  darkMode ?
                    "bg-gray-900 border-white/5 text-white"
                  : "bg-white border-gray-100 text-gray-900"
                }`}
              >
                <div className="mb-4 p-4 rounded-3xl bg-indigo-600/5 border border-indigo-600/10">
                  <p className="text-[10px] font-black text-indigo-500 uppercase mb-2">
                    Learning Goal
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full"
                      style={{ width: `${user.levelProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-[10px] mt-2 opacity-50">
                    {user.levelProgress}% to Senior Level
                  </p>
                </div>

                <div className="space-y-1">
                  <button
                    onClick={() => navigate("/dashboard/settings")}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-sm font-bold"
                  >
                    <FaUserCircle className="opacity-50" /> Profile
                  </button>
                  <button
                    onClick={() => navigate("/dashboard/favorites")}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-sm font-bold"
                  >
                    <FaBookmark className="opacity-50" /> Bookmarks
                  </button>
                  <div className="h-px bg-white/5 my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500 hover:text-white transition-all text-sm font-bold text-red-500"
                  >
                    <FaSignOutAlt /> Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
