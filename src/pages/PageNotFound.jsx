import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6 bg-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        {/* Visual Element: Muted Container */}
        <div className="flex justify-center mb-8">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <FaExclamationTriangle size={48} className="text-white/20" />
          </div>
        </div>

        {/* Status Code: Large Ghost Text */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter opacity-10 mb-[-2rem] md:mb-[-3.5rem] select-none">
          404
        </h1>

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Oops!
        </h2>

        <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.15em] mb-6 text-white/40">
          Page Not Found
        </p>

        <p className="max-w-md mx-auto text-lg mb-10 text-white/60">
          It seems the path you followed doesn't exist or has been moved to a
          new coordinate in the scout.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Action: High Contrast */}
          <Link to="/" className="w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 bg-white text-gray-950 hover:bg-gray-200 transition-all duration-300 cursor-pointer shadow-xl shadow-white/5"
            >
              <FaHome size={18} />
              Back to Base
            </button>
          </Link>

          {/* Secondary Action: Outline */}
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold border border-white/10 text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
