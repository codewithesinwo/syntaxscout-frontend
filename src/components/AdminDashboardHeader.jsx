import React from 'react'
import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Bell,
  ShieldCheck,
  User
} from "lucide-react";
import profileImg from "../assets/avater.png";


export default function AdminDashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

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

  const linkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
      isActive 
        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`;

  return (
    <header className="bg-gray-950 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Search */}
          <div className="flex items-center gap-2 text-white">
            <input type="search" name="search" id="search-input" 
            placeholder="Search..." 
            className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-gray-950"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1 rounded-full border border-white/10 hover:border-indigo-500/50 transition-all"
              >
                <img src={profileImg} alt="Admin" className="w-8 h-8 rounded-full object-cover" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-white/10 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-white/5 mb-2">
                    <p className="text-sm font-medium text-white">Admin User</p>
                    <p className="text-xs text-gray-500 truncate">admin@example.com</p>
                  </div>
                  <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">
                    <User size={16} /> Profile Settings
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
              {/* hamburger menu for mobile */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
          </div>
        </div>
      </div>
    </header>
  );
}