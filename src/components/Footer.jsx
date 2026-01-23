import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: <FaYoutube />,
    href: "https://youtube.com/codewithesinwo",
    color: "hover:bg-red-600",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com/codewithesinwo",
    color: "hover:bg-blue-600",
  },
  {
    icon: <FaFacebookF />,
    href: "https://facebook.com/codewithesinwo",
    color: "hover:bg-blue-800",
  },
  {
    icon: <FaTwitter />,
    href: "https://x.com/codewithesinwo",
    color: "hover:bg-black",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/codewithesinwo",
    color: "hover:bg-pink-600",
  },
  {
    icon: <FaTiktok />,
    href: "https://tiktok.com/codewithesinwo",
    color: "hover:bg-black",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <img
                src="/Syntaxscout-logo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
              Syntax<span className="text-indigo-500">Scout</span>
            </Link>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Syntax Scout. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`border border-white/10 p-2.5 rounded-full text-gray-400 transition-all duration-300 hover:text-white ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Secondary Links */}
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <Link
              to="/terms"
              className="hover:text-indigo-400 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              to="/privacy"
              className="hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
