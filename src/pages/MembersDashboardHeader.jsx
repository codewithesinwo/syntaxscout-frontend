import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import profileImg from "../assets/avater.png";

const dashboardNavLinks = [
  { name: "All Courses", href: "/all-courses" },
  { name: "My Courses", href: "/my-courses" },
  { name: "Lifetime Access", href: "/lifetime-access" },
  { name: "Forum", href: "/forum" },
  { name: "Learning Paths", href: "/learning-paths" },
  { name: "Contact", href: "/contact" },
];

const dashboardProfileLinks = [
  { name: "Edit Profile", href: "profile" },
  { name: "Membership & Subscriptions", href: "membership-subscriptions" },
  { name: "Purchase History", href: "purchases" },
  { name: "Add / Change Credit Card", href: "credit-card" },
  { name: "Address", href: "address" },
];

export default function MembersDashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false); // New state for mobile toggle
  const profileRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkStyles = ({ isActive }) =>
    `transition-colors duration-200 font-medium ${
      isActive ? "text-teal-400" : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="bg-black fixed w-full top-0 left-0 z-[100] shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
        {/* Logo */}
        <Link to="/" className="group">
          <div className="flex items-center space-x-3">
            <img
              src="/Syntaxscout-logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent md:inline-block hidden">
              SYNTAXSCOUT
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8 text-sm">
            {dashboardNavLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.href} className={linkStyles}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Profile Dropdown */}
          <div className="relative ml-4" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="border border-gray-600 rounded-full p-1 hover:border-teal-400 transition-colors cursor-pointer focus:outline-none"
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-[#111] border border-gray-800 rounded-lg shadow-2xl z-50">
                <ul className="flex flex-col py-2">
                  {dashboardProfileLinks.map((link) => (
                    <li key={link.name}>
                      <NavLink
                        to={link.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                        onClick={() => setProfileOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                  <hr className="border-gray-800 my-1" />
                  <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 transition-colors">
                    Logout
                  </button>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ?
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            : <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[90] bg-black p-6 flex flex-col h-[100dvh] mt-15">
          <div className="flex-1 overflow-y-auto pb-32 overscroll-contain">
            {/* Main Nav Links */}
            <div className="flex flex-col gap-4 mb-8">
              {dashboardNavLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-xl font-semibold text-gray-300 pb-2 border-b border-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Profile Section */}
            <div className="mt-4">
              <button
                onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
                className="flex items-center justify-between w-full p-3 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border border-gray-700"
                  />
                  <span className="text-gray-200 font-medium">
                    Abasiubong Esinwo
                  </span>
                </div>
              </button>

              {/* Collapsible Mobile Dropdown Content */}
              {mobileProfileOpen && (
                <div className="mt-2 flex flex-col gap-1 pl-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  {dashboardProfileLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.href}
                      className="text-gray-400 hover:text-white py-3 text-base"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                  <button className="text-left text-red-400 py-3 text-base font-medium">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
