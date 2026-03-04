import React, { useState, useRef, useEffect } from "react";
import {
  Users,
  MessageSquare,
  Plus,
  Video,
  Search,
  MoreHorizontal,
  Hash,
  Send,
  FileText,
  Globe,
  Zap,
} from "lucide-react";
import { useStudyStore } from "../store/useStudyStore";   // ← NEW: Zustand store

export default function StudyGroup() {
  // === Zustand State (global, scalable, no prop drilling) ===
  const {
    activeChannel,
    messages,
    setActiveChannel,
    addMessage,
    toggleReaction,
  } = useStudyStore();

  const [inputValue, setInputValue] = useState("");
  const [pickerFor, setPickerFor] = useState(null); // which message shows emoji picker

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages/reactions appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const groups = [
    { id: "react-mastery", name: "React Mastery", members: 124, active: true },
    { id: "typescript-pro", name: "TypeScript Pros", members: 89, active: false },
    { id: "ui-ux-design", name: "UI/UX Foundry", members: 56, active: true },
  ];

  const activeGroup = groups.find((g) => g.id === activeChannel) || groups[0];

  const popularEmojis = ["❤️", "👍", "😂", "🎉", "🔥", "👏", "🤔", "🚀"];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMsg = {
      id: Date.now(),
      user: "You",
      text: inputValue.trim(),
      time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      isSystem: false,
    };

    addMessage(newMsg);           // ← Zustand action
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pt-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl h-[calc(100vh-120px)] flex gap-6">
        {/* LEFT: Group Explorer */}
        <aside className="w-72 hidden lg:flex flex-col bg-slate-900/40 border border-slate-800/60 rounded-3xl overflow-hidden backdrop-blur-xl">
          <div className="p-6 border-b border-slate-800/60">
            <button className="w-full py-3 bg-teal-500 text-black rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/10">
              <Plus size={16} /> New Group
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-2 mb-4">
              Your Squads
            </p>
            {groups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveChannel(group.id)}  
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  activeChannel === group.id
                    ? "bg-slate-800 text-teal-400 shadow-inner"
                    : "hover:bg-slate-800/50 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Hash size={16} />
                  <span className="text-sm font-bold">{group.name}</span>
                </div>
                {group.active && (
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* CENTER: Chat */}
        <main className="flex-1 flex flex-col bg-slate-900/20 border border-slate-800/60 rounded-3xl overflow-hidden">
          {/* Group Header */}
          <div className="p-6 border-b border-slate-800/60 bg-slate-900/40 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 border border-teal-500/20">
                <Users size={24} />
              </div>
              <div>
                <h2 className="font-black text-white italic uppercase tracking-tight">
                  {activeGroup.name} Hub
                </h2>
                <p className="text-xs text-slate-500 font-bold">
                  12 Members Online • 4 Active Threads
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 bg-slate-800 rounded-xl hover:text-teal-400 transition-colors">
                <Video size={18} />
              </button>
              <button className="p-2.5 bg-slate-800 rounded-xl hover:text-teal-400 transition-colors">
                <Search size={18} />
              </button>
              <button className="p-2.5 bg-slate-800 rounded-xl hover:text-teal-400 transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {messages.map((msg) => {
              const isOwn = msg.user === "You";
              const showPicker = pickerFor === msg.id;

              return (
                <div
                  key={msg.id}
                  className={`flex ${isOwn ? "justify-end" : ""} relative group`}
                >
                  {/* Avatar (only for others) */}
                  {!msg.isSystem && !isOwn && (
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center font-black text-xs mt-1">
                      {msg.user.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  <div className={`max-w-[70%] ${isOwn ? "items-end" : ""}`}>
                    {!msg.isSystem && (
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-black ${isOwn ? "text-teal-400" : "text-teal-500"}`}>
                          {isOwn ? "You" : msg.user}
                        </span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
                          {msg.time}
                        </span>
                      </div>
                    )}

                    {/* Message Bubble */}
                    {msg.isSystem ? (
                      <div className="flex items-center gap-4 px-6 py-2 bg-teal-500/5 border border-teal-500/20 rounded-full text-[10px] font-black uppercase text-teal-500 tracking-widest italic">
                        <Zap size={14} /> {msg.text}
                      </div>
                    ) : (
                      <div
                        className={`p-4 rounded-3xl text-sm leading-relaxed border transition-all ${
                          isOwn
                            ? "bg-teal-600/10 border-teal-500/30 rounded-br-none"
                            : "bg-slate-900/60 border-slate-700 rounded-bl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                    )}

                    {/* === REACTIONS (Zustand powered) === */}
                    {!msg.isSystem && (
                      <div className="flex gap-1.5 mt-3 flex-wrap">
                        {Object.entries(msg.reactions || {}).map(([emoji, count]) => {
                          const hasReacted = (msg.myReactions || []).includes(emoji);
                          return (
                            <button
                              key={emoji}
                              onClick={() => toggleReaction(msg.id, emoji)}
                              className={`flex items-center gap-1.5 px-3 py-1 rounded-2xl text-xs font-medium border transition-all hover:scale-105 ${
                                hasReacted
                                  ? "bg-teal-500/20 border-teal-500 text-teal-400"
                                  : "bg-slate-800/80 border-transparent hover:border-slate-600"
                              }`}
                            >
                              <span className="text-base">{emoji}</span>
                              <span className="tabular-nums text-slate-400 font-mono">
                                {count}
                              </span>
                            </button>
                          );
                        })}

                        {/* + Add Reaction Button */}
                        <button
                          onClick={() =>
                            setPickerFor(showPicker ? null : msg.id)
                          }
                          className="flex items-center justify-center w-8 h-8 bg-slate-800 hover:bg-slate-700 border border-transparent hover:border-slate-600 rounded-2xl text-xl transition-all"
                        >
                          +
                        </button>

                        {/* Emoji Picker (appears under the message) */}
                        {showPicker && (
                          <div className="absolute top-full left-0 mt-3 bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl z-50 flex gap-3">
                            {popularEmojis.map((emoji) => (
                              <button
                                key={emoji}
                                onClick={() => {
                                  toggleReaction(msg.id, emoji);
                                  setPickerFor(null);
                                }}
                                className="text-3xl hover:scale-125 active:scale-90 transition-transform p-2"
                              >
                                {emoji}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-6 bg-slate-900/40 border-t border-slate-800/60">
            <div className="relative group">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Message #${activeChannel}...`}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-6 pr-14 text-sm focus:border-teal-500/50 focus:ring-4 ring-teal-500/5 outline-none transition-all"
              />
              <button
                onClick={handleSend}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-teal-500 text-black rounded-xl hover:scale-105 transition-transform"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </main>

        {/* RIGHT: Shared Context (unchanged) */}
        <aside className="w-80 hidden xl:flex flex-col gap-6">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center gap-2">
              <FileText size={14} className="text-teal-500" /> Group Resources
            </h3>
            <div className="space-y-3">
              <ResourceItem title="Context API Cheat Sheet" type="PDF" />
              <ResourceItem title="Custom Hooks Library" type="Gist" />
              <ResourceItem title="Next.js Performance" type="Video" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0a0a0a] to-slate-900 border border-slate-800/60 rounded-3xl p-6 flex-1">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center gap-2">
              <Globe size={14} className="text-teal-500" /> Active Voices
            </h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-black rounded-full" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 italic">
                    User_Peer_0{i}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ResourceItem({ title, type }) {
  return (
    <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl hover:border-teal-500/30 cursor-pointer transition-colors group">
      <p className="text-[10px] font-black uppercase text-teal-500 mb-1">
        {type}
      </p>
      <p className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors line-clamp-1">
        {title}
      </p>
    </div>
  );
}