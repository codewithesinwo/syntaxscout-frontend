import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import profileImg from "../assets/avater.png";
import Logo from "../assets/Syntaxscout-logo.png";

export default function AdminDashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  // const navigate = useNavigate();

  // Close profile dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // localStorage.removeItem("token");
    // navigate("/login");
  };

  const navLinks = [
    { name: "Dashboard", path: "/admin", icon: <Icons.LayoutDashboard size={20} /> },
    { name: "User Management", path: "/admin/users", icon: <Icons.Users size={20} /> },
    {
      name: "Course Catalog",
      path: "/admin/courses",
      icon: <Icons.BookOpen size={20} />,
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: <Icons.BarChart3 size={20} />,
    },
    {
      name: "Transactions",
      path: "/admin/transactions",
      icon: <Icons.CreditCard size={20} />,
    },
    {
      name: "Support Tickets",
      path: "/admin/support",
      icon: <Icons.MessageSquare size={20} />,
    },
    { name: "Settings", path: "/admin/settings", icon: <Icons.Settings size={20} /> },
  ];

  return (
    <header className="bg-gray-950 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-white group"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-8 h-8 group-hover:scale-110 transition-transform"
              />
              <span className="font-black text-xl tracking-tighter">
                SYNTAX<span className="text-indigo-500">SCOUT</span>
              </span>
            </NavLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Toggle (Optional visual filler) */}
            <button className="hidden sm:flex text-gray-500 hover:text-white p-2">
              <Icons.Search size={20} />
            </button>

            <button className="text-gray-500 hover:text-white transition-colors relative p-2">
              <Icons.Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-gray-950"></span>
            </button>

            <div className="h-6 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1 rounded-xl border border-white/5 bg-white/5 hover:border-indigo-500/50 transition-all"
              >
                <img
                  src={profileImg}
                  alt="Admin"
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <div className="hidden sm:block text-left pr-2">
                  <p className="text-[10px] font-black text-gray-500 uppercase leading-none mb-1">
                    Admin
                  </p>
                  <p className="text-xs font-bold text-white leading-none">
                    Alex Johnson
                  </p>
                </div>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl py-2 animate-in fade-in zoom-in-95 duration-200">
                  <div className="px-4 py-3 border-b border-white/5 mb-2">
                    <p className="text-sm font-bold text-white">Alex Johnson</p>
                    <p className="text-[11px] text-gray-500 truncate">
                      alex.j@syntaxscout.com
                    </p>
                  </div>
                  <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-indigo-600/10 transition-colors">
                    <Icons.User size={16} className="text-indigo-500" /> Account
                    Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors mt-1"
                  >
                    <Icons.LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {isOpen ?
                <Icons.X size={24} />
              : <Icons.Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-950 border-b border-white/10 animate-in slide-in-from-top duration-300">
          <nav className="p-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-4 rounded-xl text-base font-bold transition-all ${
                    isActive ?
                      "text-white"
                    : "text-gray-400 hover:bg-white/5"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
