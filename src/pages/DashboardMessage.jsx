import React, { useState } from "react";
import {
  FaSearch,
  FaDownload,
  FaPaperPlane,
  FaFilePdf,
  FaImage,
  FaLink,
  FaInfoCircle,
  FaChevronLeft,
  FaEdit,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function DashboardMessage() {
  const { darkMode } = useTheme();
  const [selectedChat, setSelectedChat] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const contacts = [
    {
      id: 1,
      name: "Dr. Sarah Miller",
      role: "Instructor",
      lastMsg: "Check the PDF I sent.",
      time: "10:24 AM",
      online: true,
      unread: 2,
    },
    {
      id: 2,
      name: "Student Support",
      role: "System",
      lastMsg: "Transcript ready.",
      time: "Yesterday",
      online: true,
      unread: 0,
    },
    {
      id: 3,
      name: "Alex Rivera",
      role: "Peer",
      lastMsg: "Did you finish the lab?",
      time: "Wed",
      online: false,
      unread: 0,
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
  ];

  return (
    <div
      className={`mt-16 min-h-[calc(100vh-64px)] transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[calc(100vh-64px)] flex flex-col p-0 md:p-6 lg:p-8">
        {/* DESKTOP PAGE TITLE */}
        <div className="hidden md:flex justify-between items-center mb-6">
          <h1 className="text-3xl font-black tracking-tight">Messages</h1>
          <div className="flex gap-2">
            <button
              className={`p-3 rounded-2xl border ${darkMode ? "border-neutral-800 bg-neutral-900" : "bg-white border-gray-200"}`}
            >
              <FaSearch size={16} className="text-gray-400" />
            </button>
            <button className="bg-indigo-600 text-white px-5 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all">
              <FaEdit /> New Message
            </button>
          </div>
        </div>

        {/* MAIN CONTAINER */}
        <div
          className={`flex-1 flex overflow-hidden md:rounded-[2.5rem] border transition-all ${
            darkMode ?
              "bg-neutral-900 border-neutral-800"
            : "bg-white border-gray-200 shadow-2xl"
          }`}
        >
          {/* LEFT COLUMN: CONTACT LIST */}
          <aside
            className={`${selectedChat ? "hidden" : "flex"} lg:flex w-full lg:w-80 xl:w-96 border-r flex-col ${
              darkMode ? "border-neutral-800" : "border-gray-100"
            }`}
          >
            <div className="p-6 md:hidden flex justify-between items-center">
              <h1 className="text-2xl font-black">Messages</h1>
              <button className="p-3 bg-indigo-600 rounded-full text-white">
                <FaEdit size={14} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-1 p-2">
              {contacts.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedChat(c.id)}
                  className={`w-full text-left p-4 flex gap-4 rounded-[1.5rem] transition-all ${
                    selectedChat === c.id ?
                      "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                    : darkMode ? "hover:bg-neutral-800"
                    : "hover:bg-gray-50"
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-inner ${
                        selectedChat === c.id ?
                          "bg-white/20"
                        : "bg-indigo-500 text-white"
                      }`}
                    >
                      {c.name[0]}
                    </div>
                    {c.online && (
                      <span
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 ${
                          darkMode ? "border-neutral-900" : "border-white"
                        } bg-green-500`}
                      ></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-bold truncate">{c.name}</p>
                      <span
                        className={`text-[10px] ${selectedChat === c.id ? "text-white/60" : "opacity-40"}`}
                      >
                        {c.time}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p
                        className={`text-xs truncate ${selectedChat === c.id ? "text-white/80" : "opacity-50"}`}
                      >
                        {c.lastMsg}
                      </p>
                      {c.unread > 0 && selectedChat !== c.id && (
                        <span className="w-5 h-5 bg-indigo-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                          {c.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* CENTER COLUMN: ACTIVE CHAT */}
          <main
            className={`${!selectedChat ? "hidden" : "flex"} flex-1 flex flex-col min-w-0`}
          >
            {/* CHAT HEADER */}
            <div
              className={`p-4 md:p-6 border-b flex items-center justify-between ${
                darkMode ? "border-neutral-800" : "border-gray-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedChat(null)}
                  className="lg:hidden p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <FaChevronLeft />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <h2 className="font-bold text-sm md:text-base leading-none">
                      Dr. Sarah Miller
                    </h2>
                    <p className="text-[10px] md:text-xs text-green-500 font-medium mt-1">
                      Online Now
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className={`p-2 rounded-xl transition-colors ${showInfo ? "text-indigo-500 bg-indigo-500/10" : "text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800"}`}
              >
                <FaInfoCircle size={20} />
              </button>
            </div>

            {/* MESSAGES AREA */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
              <div className="flex justify-start">
                <div
                  className={`max-w-[85%] md:max-w-md p-4 rounded-3xl rounded-tl-none shadow-sm ${
                    darkMode ?
                      "bg-neutral-800 text-gray-200"
                    : "bg-gray-100 text-slate-800"
                  }`}
                >
                  <p className="text-sm leading-relaxed">
                    I've attached the study guide for next week. Please review
                    the Hooks section before Tuesday.
                  </p>
                  <p className="text-[9px] mt-2 opacity-40 text-right">
                    10:24 AM
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[85%] md:max-w-md p-4 rounded-3xl rounded-tr-none bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                  <p className="text-sm leading-relaxed">
                    Thanks, Dr. Miller! I'll go through it tonight and prepare
                    questions.
                  </p>
                  <p className="text-[9px] mt-2 text-indigo-200 text-right">
                    10:30 AM
                  </p>
                </div>
              </div>
            </div>

            {/* INPUT AREA */}
            <div
              className={`p-4 md:p-6 border-t ${darkMode ? "border-neutral-800" : "border-gray-100"}`}
            >
              <div
                className={`flex items-center gap-2 p-2 rounded-[2rem] border transition-all ${
                  darkMode ?
                    "bg-black border-neutral-800 focus-within:border-indigo-500"
                  : "bg-gray-50 border-gray-200 focus-within:border-indigo-300"
                }`}
              >
                <input
                  type="text"
                  placeholder="Write a message..."
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
                />
                <button className="bg-indigo-600 text-white p-3 md:p-4 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/40">
                  <FaPaperPlane size={14} />
                </button>
              </div>
            </div>
          </main>

          {/* RIGHT COLUMN: INFO PANEL (Desktop) */}
          <AnimatePresence>
            {showInfo && (
              <motion.aside
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 320, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className={`hidden xl:flex border-l flex-col overflow-hidden ${
                  darkMode ? "border-neutral-800" : "border-gray-100"
                }`}
              >
                <div className="p-8 min-w-[320px]">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 mb-6">
                    Shared Resources
                  </h3>

                  <div className="space-y-4">
                    {sharedFiles.map((file) => (
                      <div
                        key={file.id}
                        className={`group flex items-center gap-4 p-3 rounded-2xl border transition-all cursor-pointer ${
                          darkMode ?
                            "border-neutral-800 hover:bg-neutral-800"
                          : "border-gray-100 hover:bg-gray-50 shadow-sm"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            file.type === "pdf" ?
                              "bg-red-500/10 text-red-500"
                            : "bg-blue-500/10 text-blue-500"
                          }`}
                        >
                          {file.type === "pdf" ?
                            <FaFilePdf />
                          : <FaImage />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate">
                            {file.name}
                          </p>
                          <p className="text-[10px] opacity-40 uppercase font-bold">
                            {file.size} • {file.date}
                          </p>
                        </div>
                        <FaDownload
                          className="text-gray-400 group-hover:text-indigo-500 transition-colors"
                          size={14}
                        />
                      </div>
                    ))}
                  </div>

                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 mt-10 mb-4">
                    Media Links
                  </h3>
                  <div
                    className={`p-4 rounded-2xl border border-dashed text-center ${
                      darkMode ?
                        "border-neutral-800 text-neutral-600"
                      : "border-gray-200 text-gray-400"
                    }`}
                  >
                    <FaLink className="mx-auto mb-2 opacity-20" size={20} />
                    <p className="text-[10px] font-medium">
                      No links found in this chat
                    </p>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* MOBILE OVERLAY INFO (Drawer) */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="fixed inset-0 z-50 xl:hidden flex flex-col"
          >
            <div
              className="flex-1 bg-black/20 backdrop-blur-sm"
              onClick={() => setShowInfo(false)}
            ></div>
            <div
              className={`h-[70vh] rounded-t-[3rem] p-8 ${darkMode ? "bg-neutral-900" : "bg-white"}`}
            >
              <div className="w-12 h-1.5 bg-gray-300 dark:bg-neutral-700 rounded-full mx-auto mb-8"></div>
              <h2 className="text-xl font-black mb-6">Conversation Details</h2>
              {/* Mobile files content same as above */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
