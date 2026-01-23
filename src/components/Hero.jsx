import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-20 lg:py-32 overflow-hidden bg-gray-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full max-w-7xl"
      >
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1]"
          >
            Empowering the Future of{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Web Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Syntax Scout is a forward-thinking hub for developers. Build sleek,
            reusable UI components and modern frameworks that power the next
            generation of digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 flex-wrap justify-center lg:justify-start"
          >
            <Link
              to="/signup"
              className="group bg-indigo-600 hover:bg-indigo-500 transition-colors py-4 px-8 rounded-xl block text-lg font-medium text-white shadow-lg shadow-indigo-500/20"
            >
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                Sign up for free
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Animated Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full lg:w-1/2 max-w-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm rounded-xl p-1 shadow-2xl overflow-hidden"
        >
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
            <div className="flex gap-2">
              <div className="h-3 w-3 bg-red-500/80 rounded-full"></div>
              <div className="h-3 w-3 bg-amber-500/80 rounded-full"></div>
              <div className="h-3 w-3 bg-emerald-500/80 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-500 font-mono">App.jsx</span>
            <div className="w-10"></div> {/* Spacer */}
          </div>

          {/* Code Block */}
          <div className="p-6 overflow-x-auto">
            <pre className="text-left text-sm md:text-base font-mono leading-relaxed">
              <code>
                <span className="text-indigo-400">import</span> React{" "}
                <span className="text-indigo-400">from</span> 'react';{"\n"}
                <span className="text-indigo-400">import</span> Button{" "}
                <span className="text-indigo-400">from</span>{" "}
                './components/Button';
                {"\n\n"}
                <span className="text-emerald-400">function</span>{" "}
                <span className="text-blue-400">App</span>() {"{"}
                {"\n"}
                {"  "}return ({"\n"}
                {"    "}&lt;<span className="text-pink-400">div</span>{" "}
                className="app"&gt;{"\n"}
                {"      "}&lt;<span className="text-pink-400">h1</span>&gt;
                Welcome to Syntax Scout&lt;/
                <span className="text-pink-400">h1</span>&gt;
                {"\n"}
                {"      "}&lt;<span className="text-blue-300">Button</span>{" "}
                text="Click Me" /&gt;
                {"\n"}
                {"    "}&lt;/<span className="text-pink-400">div</span>&gt;
                {"\n"}
                {"  "});{"\n"}
                {"}"}
                {"\n\n"}
                <span className="text-indigo-400">export default</span> App;
              </code>
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
