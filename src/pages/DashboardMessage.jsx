import React, { useState, useEffect, useRef } from "react";
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
  FaCheckDouble,
  FaGraduationCap,
  FaUserFriends,
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaShare,
  FaRegBookmark,
  FaBookmark,
  FaGlobe,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function DashboardMessage() {
  const { darkMode } = useTheme();
  const [selectedId, setSelectedId] = useState(1);
  const [showInfo, setShowInfo] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("feed"); // "chats", "community", or "feed"
  const scrollRef = useRef(null);

  // 1. Social Feed Data
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Jordan Smith",
      level: "Pro",
      content:
        "Just finished the Advanced React module! If anyone is struggling with 'useImperativeHandle', feel free to reach out. 🚀",
      likes: 24,
      comments: 5,
      isLiked: false,
      isBookmarked: false,
      time: "2h ago",
    },
    {
      id: 2,
      author: "Kenji Sato",
      level: "Beginner",
      content:
        "Does anyone have a good resource for learning CSS Grid? Flexbox is making sense but Grid feels like a whole different beast.",
      likes: 12,
      comments: 18,
      isLiked: true,
      isBookmarked: true,
      time: "5h ago",
    },
  ]);

  // 2. Chat Data (Centralized)
  const [chatData, setChatData] = useState({
    1: {
      name: "Dr. Sarah Miller",
      status: "Online",
      messages: [
        {
          id: 101,
          sender: "them",
          text: "Check the PDF I sent.",
          time: "10:24 AM",
        },
      ],
      files: [],
    },
    3: {
      name: "Alex Rivera",
      status: "Offline",
      messages: [
        {
          id: 301,
          sender: "them",
          text: "Did you finish the lab?",
          time: "Wed",
        },
      ],
      files: [],
    },
  });

  const activeChat = chatData[selectedId];

  // Logic to "Message Anyone" from the feed/community
  const startMessage = (name) => {
    // Check if chat exists, otherwise create a shell
    const existingId = Object.keys(chatData).find(
      (id) => chatData[id].name === name,
    );
    if (existingId) {
      setSelectedId(Number(existingId));
    } else {
      const newId = Date.now();
      setChatData((prev) => ({
        ...prev,
        [newId]: { name, status: "Online", messages: [], files: [] },
      }));
      setSelectedId(newId);
    }
    setActiveTab("chats");
  };

  const toggleLike = (postId) => {
    setPosts(
      posts.map((p) =>
        p.id === postId ?
          {
            ...p,
            isLiked: !p.isLiked,
            likes: p.isLiked ? p.likes - 1 : p.likes + 1,
          }
        : p,
      ),
    );
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: inputValue,
      time: "Just now",
    };
    setChatData((prev) => ({
      ...prev,
      [selectedId]: {
        ...prev[selectedId],
        messages: [...prev[selectedId].messages, newMessage],
      },
    }));
    setInputValue("");
  };

  return (
    <div
      className={`mt-16 min-h-[calc(100vh-64px)] transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-gray-50 text-slate-900"}`}
    >
      <div className="max-w-7xl mx-auto h-[calc(100vh-64px)] flex flex-col p-0 md:p-6 lg:p-8">
        <div
          className={`flex-1 flex overflow-hidden md:rounded-[2.5rem] border transition-all ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-200 shadow-2xl"}`}
        >
          {/* NAVIGATION SIDEBAR */}
          <aside
            className={`${selectedId && activeTab === "chats" ? "hidden" : "flex"} lg:flex w-full lg:w-80 xl:w-96 border-r flex-col ${darkMode ? "border-neutral-800" : "border-gray-100"}`}
          >
            <div className="p-4 grid grid-cols-3 gap-2 border-b border-transparent">
              {["feed", "chats", "community"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all flex flex-col items-center gap-1 ${activeTab === tab ? "bg-indigo-600 text-white shadow-lg" : "opacity-40"}`}
                >
                  {tab === "feed" && <FaGlobe />}
                  {tab === "chats" && <FaPaperPlane />}
                  {tab === "community" && <FaUserFriends />}
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activeTab === "feed" && (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className={`p-5 rounded-[2rem] border ${darkMode ? "bg-neutral-800/50 border-neutral-800" : "bg-white border-gray-100 shadow-sm"}`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <button
                          onClick={() => startMessage(post.author)}
                          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                        >
                          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
                            {post.author[0]}
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-black">{post.author}</p>
                            <p className="text-[9px] opacity-40">
                              {post.time} • {post.level}
                            </p>
                          </div>
                        </button>
                      </div>
                      <p className="text-sm leading-relaxed mb-4">
                        {post.content}
                      </p>
                      <div
                        className={`flex justify-between items-center pt-4 border-t ${darkMode ? "border-neutral-700" : "border-gray-50"}`}
                      >
                        <div className="flex gap-4">
                          <button
                            onClick={() => toggleLike(post.id)}
                            className={`flex items-center gap-1.5 text-xs font-bold ${post.isLiked ? "text-red-500" : "opacity-40"}`}
                          >
                            {post.isLiked ?
                              <FaHeart />
                            : <FaRegHeart />}{" "}
                            {post.likes}
                          </button>
                          <button className="flex items-center gap-1.5 text-xs font-bold opacity-40 hover:opacity-100">
                            <FaRegComment /> {post.comments}
                          </button>
                        </div>
                        <div className="flex gap-4 opacity-40">
                          <FaShare className="cursor-pointer hover:text-indigo-500" />
                          <FaRegBookmark className="cursor-pointer hover:text-indigo-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "chats" &&
                Object.entries(chatData).map(([id, chat]) => (
                  <button
                    key={id}
                    onClick={() => setSelectedId(Number(id))}
                    className={`w-full text-left p-4 flex gap-4 rounded-3xl transition-all ${
                      selectedId === Number(id) ? "bg-indigo-600 text-white"
                      : darkMode ? "hover:bg-neutral-800"
                      : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500 flex-shrink-0 flex items-center justify-center font-bold">
                      {chat.name[0]}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate">{chat.name}</p>
                      <p className="text-xs truncate opacity-60">
                        Click to view messages
                      </p>
                    </div>
                  </button>
                ))}

              {activeTab === "community" && (
                <div className="text-center py-10 opacity-30">
                  <FaUserFriends size={40} className="mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest">
                    Connect with Peers
                  </p>
                </div>
              )}
            </div>
          </aside>

          {/* CHAT WINDOW (Only shows if a chat is selected) */}
          <main className="flex-1 flex flex-col min-w-0">
            {selectedId && activeTab === "chats" ?
              <>
                <div
                  className={`p-6 border-b flex items-center justify-between ${darkMode ? "border-neutral-800" : "border-gray-100"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                      {activeChat?.name[0]}
                    </div>
                    <h2 className="font-bold text-sm">{activeChat?.name}</h2>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-8 space-y-4">
                  {activeChat?.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-2xl ${
                          msg.sender === "me" ?
                            "bg-indigo-600 text-white rounded-tr-none"
                          : darkMode ?
                            "bg-neutral-800 text-gray-200 rounded-tl-none"
                          : "bg-gray-100 text-gray-800 rounded-tl-none"
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendMessage} className="p-6">
                  <div
                    className={`flex items-center gap-2 p-2 rounded-full border ${darkMode ? "bg-black border-neutral-800" : "bg-gray-50 border-gray-200"}`}
                  >
                    <input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-transparent px-4 outline-none text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white p-3 rounded-full"
                    >
                      <FaPaperPlane size={12} />
                    </button>
                  </div>
                </form>
              </>
            : <div className="flex-1 flex flex-col items-center justify-center opacity-20">
                <FaGlobe size={60} className="mb-4" />
                <p className="font-black uppercase tracking-widest text-xl">
                  Global Learning Feed
                </p>
                <p className="text-xs mt-2">
                  Select a chat or browse the community
                </p>
              </div>
            }
          </main>
        </div>
      </div>
    </div>
  );
}
