import React, { useState } from "react";
import {
  FaSearch,
  FaDownload,
  FaTrash,
  FaEnvelope,
  FaPaperPlane,
  FaPaperclip,
  FaEllipsisV,
  FaFilePdf,
  FaImage,
  FaLink,
  FaInfoCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function DashboardMessage() {
  const { darkMode } = useTheme();
  const [selectedChat, setSelectedChat] = useState(1);
  const [showInfo, setShowInfo] = useState(true); // Toggle the right sidebar

  const contacts = [
    {
      id: 1,
      name: "Dr. Sarah Miller",
      role: "Instructor",
      lastMsg: "Check the PDF I sent.",
      time: "10:24 AM",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Student Support",
      role: "System",
      lastMsg: "Transcript ready.",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
  ];

  const sharedFiles = [
    {
      id: 1,
      name: "React_Hooks_Guide.pdf",
      size: "2.4 MB",
      type: "pdf",
      date: "Jan 20",
    },
    {
      id: 2,
      name: "Dashboard_Draft.png",
      size: "1.1 MB",
      type: "image",
      date: "Jan 18",
    },
    {
      id: 3,
      name: "Source_Code_Archive.zip",
      size: "15 MB",
      type: "zip",
      date: "Jan 15",
    },
  ];

  return (
    <div
      className={`p-4 md:p-6 mt-16 min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[calc(100vh-160px)] flex flex-col">
        {/* HEADER */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">Messages</h1>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`p-3 rounded-2xl border ${
              showInfo ? "bg-indigo-600 text-white"
              : darkMode ? "border-neutral-800"
              : "bg-white border-gray-200"
            }`}
          >
            <FaInfoCircle size={18} />
          </button>
        </header>

        <div
          className={`flex-1 flex overflow-hidden rounded-[2.5rem] border ${
            darkMode ?
              "bg-neutral-900 border-neutral-800"
            : "bg-white border-gray-200 shadow-xl"
          }`}
        >
          {/* COLUMN 1: CONTACTS */}
          <aside
            className={`hidden lg:flex w-80 border-r flex-col ${darkMode ? "border-neutral-800" : "border-gray-100"}`}
          >
            <div className="p-4 border-b border-neutral-800">
              <div
                className={`flex items-center gap-3 px-4 py-2 rounded-xl ${darkMode ? "bg-black" : "bg-gray-100"}`}
              >
                <FaSearch className="text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm w-full"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {contacts.map((c) => (
                <div
                  key={c.id}
                  className={`p-4 flex gap-3 cursor-pointer hover:bg-indigo-500/5 ${selectedChat === c.id && "bg-indigo-500/10 border-r-4 border-indigo-500"}`}
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">
                    {c.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{c.name}</p>
                    <p className="text-xs opacity-50 truncate w-40">
                      {c.lastMsg}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* COLUMN 2: MAIN CHAT */}
          <main className="flex-1 flex flex-col min-w-0">
            <div
              className={`p-4 border-b flex items-center gap-3 ${darkMode ? "border-neutral-800" : "border-gray-100"}`}
            >
              <span className="font-bold">Dr. Sarah Miller</span>
              <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#10b981]"></span>
            </div>

            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
              <div className="flex justify-start">
                <div
                  className={`max-w-md p-4 rounded-2xl ${darkMode ? "bg-neutral-800" : "bg-gray-100"}`}
                >
                  <p className="text-sm font-medium">
                    I've attached the study guide for next week. Please review
                    the Hooks section before Tuesday.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-neutral-800 flex gap-2">
              <input
                className={`flex-1 p-3 rounded-2xl outline-none text-sm ${darkMode ? "bg-black" : "bg-gray-100"}`}
                placeholder="Message..."
              />
              <button className="bg-indigo-600 p-4 rounded-2xl text-white hover:scale-105 transition-transform">
                <FaPaperPlane />
              </button>
            </div>
          </main>

          {/* COLUMN 3: SHARED FILES (The addition) */}
          <AnimatePresence>
            {showInfo && (
              <motion.aside
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 300, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className={`hidden xl:flex border-l flex-col ${darkMode ? "border-neutral-800" : "border-gray-100"}`}
              >
                <div className="p-6">
                  <h3 className="font-bold mb-6 flex items-center gap-2 uppercase text-xs tracking-widest opacity-60">
                    <FaFilePdf /> Shared Files
                  </h3>

                  <div className="space-y-4">
                    {sharedFiles.map((file) => (
                      <div
                        key={file.id}
                        className={`group p-3 rounded-2xl border transition-all cursor-pointer ${darkMode ? "border-neutral-800 hover:bg-neutral-800" : "border-gray-100 hover:bg-gray-50"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${file.type === "pdf" ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"}`}
                          >
                            {file.type === "pdf" ?
                              <FaFilePdf />
                            : <FaImage />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold truncate">
                              {file.name}
                            </p>
                            <p className="text-[10px] opacity-40">
                              {file.size} • {file.date}
                            </p>
                          </div>
                          <FaDownload
                            size={12}
                            className="opacity-0 group-hover:opacity-100 text-indigo-500 transition-opacity"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold mt-10 mb-6 flex items-center gap-2 uppercase text-xs tracking-widest opacity-60">
                    <FaLink /> Shared Links
                  </h3>
                  <div className="p-3 rounded-2xl border border-neutral-800 text-xs font-medium opacity-50 italic">
                    No links shared yet.
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
