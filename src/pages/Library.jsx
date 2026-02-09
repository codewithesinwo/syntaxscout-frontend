import React, { useState } from "react";
import {
  FaSearch,
  FaFilePdf,
  FaCode,
  FaBook,
  FaVideo,
  FaDownload,
  FaFolderOpen,
  FaPlus,
  FaBookmark,
  FaRegBookmark,
  FaFilter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Library() {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Documentation",
    "Cheat Sheets",
    "Video Tutorials",
    "Lab Manuals",
  ];

  const resources = [
    {
      id: 1,
      title: "Advanced React Patterns",
      type: "PDF",
      category: "Documentation",
      size: "2.4 MB",
      author: "Dr. Sarah Miller",
      isSaved: true,
    },
    {
      id: 2,
      title: "Flexbox & Grid Master Guide",
      type: "Cheat Sheet",
      category: "Cheat Sheets",
      size: "1.1 MB",
      author: "SyntaxScout Team",
      isSaved: false,
    },
    {
      id: 3,
      title: "Node.js Performance Optimization",
      type: "Video",
      category: "Video Tutorials",
      size: "15:42 mins",
      author: "Alex Dev",
      isSaved: false,
    },
  ];

  return (
    <div
      className={`mt-16 p-6 md:p-10 min-h-screen transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tighter flex items-center gap-3">
              RESOURCE <span className="text-indigo-500">LIBRARY</span>{" "}
              <FaBook className="text-indigo-500 text-2xl" />
            </h1>
            <p className="text-sm font-bold opacity-40 uppercase tracking-[0.2em] mt-2">
              The SyntaxScout Knowledge Vault
            </p>
          </div>

          <div className="flex gap-3">
            <button
              className={`p-4 rounded-2xl border transition-all ${
                darkMode ?
                  "bg-white/5 border-white/10 hover:bg-white/10"
                : "bg-white border-gray-200 hover:bg-gray-50 shadow-sm"
              }`}
            >
              <FaFilter className="text-indigo-500" />
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-2xl font-black flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20">
              <FaPlus /> Upload Resource
            </button>
          </div>
        </div>

        {/* Search & Category Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-1 group">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              placeholder="Search for snippets, PDFs, or tutorials..."
              className={`w-full pl-14 pr-6 py-4 rounded-[2rem] outline-none border transition-all ${
                darkMode ?
                  "bg-neutral-900 border-white/10 focus:border-indigo-500/50"
                : "bg-white border-gray-200 focus:border-indigo-500 shadow-sm"
              }`}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                  activeCategory === cat ?
                    "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : darkMode ? "bg-white/5 text-gray-400 hover:bg-white/10"
                  : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={item.id}
              className={`p-6 rounded-[2.5rem] border group transition-all ${
                darkMode ?
                  "bg-neutral-900 border-white/5 hover:border-indigo-500/30"
                : "bg-white border-gray-100 hover:border-indigo-500/30 shadow-sm"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`p-4 rounded-2xl ${
                    item.type === "PDF" ? "bg-red-500/10 text-red-500"
                    : item.type === "Video" ? "bg-blue-500/10 text-blue-500"
                    : "bg-emerald-500/10 text-emerald-500"
                  }`}
                >
                  {item.type === "PDF" && <FaFilePdf size={24} />}
                  {item.type === "Video" && <FaVideo size={24} />}
                  {item.type === "Cheat Sheet" && <FaCode size={24} />}
                </div>
                <button
                  className={`p-2 transition-colors ${item.isSaved ? "text-indigo-500" : "opacity-20 hover:opacity-100"}`}
                >
                  {item.isSaved ?
                    <FaBookmark size={18} />
                  : <FaRegBookmark size={18} />}
                </button>
              </div>

              <h3 className="font-black text-lg mb-1 group-hover:text-indigo-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-6">
                By {item.author} • {item.size}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${
                    darkMode ?
                      "bg-white/5 text-gray-400"
                    : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {item.category}
                </span>
                <button className="flex items-center gap-2 text-xs font-black text-indigo-500 hover:gap-3 transition-all">
                  DOWNLOAD <F aDownload />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
