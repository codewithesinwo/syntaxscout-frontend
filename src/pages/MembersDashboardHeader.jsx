import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Bell,
  Search,
  LogOut,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import profileImg from "../assets/avater.png";

const dashboardNavLinks = [
  { name: "Curriculum", href: "/all-courses" }, // Feels more academic/structured
  { name: "My Classroom", href: "my-courses" }, // Feels like a private workspace
  { name: "Study Group", href: "study-group" }, // Encourages collaboration
  { name: "Skill Mastery", href: "skills" }, // Focuses on the end goal (Mastery)
  { name: "Mentorship", href: "mentorship" }, // New: Adds high-value perception
];

const dashboardProfileLinks = [
  { name: "Edit Profile", href: "profile" },
  { name: "Membership", href: "membership-subscriptions" },
  { name: "Purchase History", href: "purchases" },
  { name: "Settings", href: "address" },
];

export default function MembersDashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const profileRef = useRef(null);

  const userJson = localStorage.getItem("user");
  const userData = userJson ? JSON.parse(userJson) : null;
  const isAdmin = userData?.role?.trim() === "admin";

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkStyles = ({ isActive }) =>
    `relative py-2 transition-all duration-200 font-medium text-sm ${
      isActive ?
        "text-teal-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-400"
      : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 fixed w-full top-0 left-0 z-[100]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-3 shrink-0">
          <img src="/Syntaxscout-logo.png" alt="Logo" className="h-7 w-auto" />
          <span className="font-black text-lg tracking-tighter text-white hidden sm:block">
            SYNTAX<span className="text-teal-500">SCOUT</span>
          </span>
        </Link>

        {/* Center: Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {dashboardNavLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.href} className={linkStyles}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop Search Bar */}
          <div className="hidden md:relative md:block">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-gray-900 border border-gray-800 rounded-full py-1.5 pl-10 pr-4 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 w-48 transition-all"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
            {hasNotifications && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full border-2 border-black animate-pulse" />
            )}
          </button>

          {/* Profile Dropdown */}
          <div className="relative hidden lg:block" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-7 h-7 rounded-full object-cover"
              />
              <ChevronDown
                size={14}
                className={`text-gray-500 transition-transform ${profileOpen ? "rotate-180" : ""}`}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-[#0a0a0a] border border-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                <div className="px-4 py-3 border-b border-gray-800">
                  <p className="text-sm font-bold truncate text-white">
                    {userData?.name || "Member"}
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
                    {userData?.role || "Student"}
                  </p>
                </div>

                <div className="py-1">
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-teal-400 hover:bg-teal-500/5"
                    >
                      <ShieldCheck size={14} /> Admin Panel
                    </Link>
                  )}
                  {dashboardProfileLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 py-2.5 text-xs text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <button className="w-full flex items-center gap-2 px-4 py-3 text-xs text-red-400 hover:bg-red-500/5 border-t border-gray-800 transition-colors">
                  <LogOut size={14} /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ?
              <X size={24} />
            : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="top-16 bg-black z-[90] p-6 animate-in slide-in-from-right duration-300">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] uppercase text-gray-600 font-bold tracking-widest">
                Learning
              </p>
              {dashboardNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-medium text-gray-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-900 space-y-2">
              <p className="text-[10px] uppercase text-gray-600 font-bold tracking-widest">
                Account
              </p>
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-teal-400 font-bold"
                >
                  Admin Dashboard
                </Link>
              )}
              {dashboardProfileLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-gray-400"
                >
                  {link.name}
                </Link>
              ))}
              <button className="text-lg text-red-500 pt-4 flex items-center gap-2">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
