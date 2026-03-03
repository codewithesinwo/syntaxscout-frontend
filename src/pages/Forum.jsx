import React, { useState } from "react";
import {
  Search,
  MessageSquare,
  TrendingUp,
  Hash,
  Plus,
  Bell,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Forum() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const threads = [
    {
      title: "Best practices for state management in 2026?",
      author: "reactfan2026",
      replies: 24,
      views: 1420,
      time: "2h ago",
      tags: ["React", "State"],
    },
    {
      title: "How are you handling auth in Next.js App Router?",
      author: "nextjs_noob",
      replies: 18,
      views: 890,
      time: "1d ago",
      tags: ["Next.js", "Auth"],
    },
    {
      title: "Show me your 2026 side projects! 🚀",
      author: "indiehacker42",
      replies: 67,
      views: 3840,
      time: "3d ago",
      tags: ["Showcase"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      {/* --- SIDEBAR --- */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            DevForum
          </h1>
        </div>

        <nav className="px-4 space-y-2">
          <SidebarItem
            icon={<TrendingUp size={18} />}
            label="Trending"
            active
          />
          <SidebarItem
            icon={<MessageSquare size={18} />}
            label="All Discussions"
          />
          <SidebarItem icon={<Hash size={18} />} label="Tags" />
          <div className="pt-4 pb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            My Feed
          </div>
          <SidebarItem icon={<Plus size={18} />} label="Followed Tags" />
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b border-gray-800 bg-gray-900/50 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
          >
            {isSidebarOpen ?
              <X />
            : <Menu />}
          </button>

          <div className="flex-1 max-w-xl mx-4">
            <div className="relative group">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-medium text-sm transition-all items-center gap-2">
              <Plus size={16} /> New Post
            </button>
            <Bell
              className="text-gray-400 cursor-pointer hover:text-white"
              size={20}
            />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-xs">
              JD
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-4 lg:p-8 max-w-5xl mx-auto w-full">
          {/* Category Chips */}
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {["All", "Development", "Design", "Marketing", "Showcase"].map(
              (cat) => (
                <button
                  key={cat}
                  className="whitespace-nowrap px-4 py-1.5 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-500 text-sm transition-colors"
                >
                  {cat}
                </button>
              ),
            )}
          </div>

          {/* Discussion List */}
          <div className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Latest Activity</h2>
            {threads.map((thread, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 p-5 rounded-2xl hover:border-gray-600 transition-all cursor-pointer group"
              >
                <div className="flex gap-4">
                  <div className="hidden sm:block">
                    <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <User size={20} className="text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium group-hover:text-blue-400 transition-colors leading-tight">
                      {thread.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Started by{" "}
                      <span className="text-gray-300 font-medium">
                        {thread.author}
                      </span>{" "}
                      • {thread.time}
                    </p>
                    <div className="flex gap-2 mt-3">
                      {thread.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex flex-col justify-center gap-1 min-w-[70px]">
                    <span className="text-sm font-bold text-gray-200">
                      {thread.replies}
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                      Replies
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${active ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" : "text-gray-400 hover:bg-gray-800 hover:text-gray-100"}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}
