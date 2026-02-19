import React, { useState } from "react";
import {
  MessageSquare,
  Clock,
  AlertCircle,
  CheckCircle2,
  User,
  Search,
  X,
  Send,
  Zap,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

const initialTickets = [
  {
    id: "TICK-402",
    user: "Alex Johnson",
    subject: "Cannot access React Module 3",
    category: "Technical",
    priority: "High",
    status: "Open",
    timeAgo: "2h ago",
  },
  {
    id: "TICK-405",
    user: "Sarah Williams",
    subject: "Refund request for Design Course",
    category: "Billing",
    priority: "Medium",
    status: "In Progress",
    timeAgo: "5h ago",
  },
  {
    id: "TICK-411",
    user: "Michael Chen",
    subject: "Video playback freezes on lesson 7",
    category: "Technical",
    priority: "High",
    status: "Open",
    timeAgo: "12h ago",
  },
];

export default function SupportTickets() {
  const [tickets] = useState(initialTickets);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyText, setReplyText] = useState("");

  const cannedResponses = [
    "We're looking into this issue right now — we'll update you soon.",
    "Please try clearing your browser cache and restarting the app.",
    "Your refund has been processed and should appear in 3–5 business days.",
    "Can you please share a screenshot of the error you're seeing?",
  ];

  const handleReplyClick = (ticket) => {
    setSelectedTicket(ticket);
    setIsReplyOpen(true);
  };

  const sendReply = () => {
    // TODO: real send logic + optimistic update
    setIsReplyOpen(false);
    setReplyText("");
  };

  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-6 lg:p-8 text-gray-100">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 lg:gap-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Support Tickets
          </h1>
          <div className="relative w-full sm:w-80 lg:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search tickets..."
              className="w-full bg-gray-900 border border-white/10 rounded-xl py-3 pl-12 pr-5 text-sm lg:text-base text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Tickets Table / List */}
        <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Mobile: card-like list */}
          <div className="md:hidden divide-y divide-white/5">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="p-5 flex items-center justify-between hover:bg-white/[0.03] transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        ticket.priority === "High" ?
                          "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                        : "bg-emerald-500"
                      }`}
                    />
                    <span className="text-xs font-mono text-gray-500">
                      {ticket.id}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white truncate">
                    {ticket.subject}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {ticket.user} • {ticket.category} • {ticket.timeAgo}
                  </p>
                </div>
                <button
                  onClick={() => handleReplyClick(ticket)}
                  className="ml-4 p-3 bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-xl transition-all"
                >
                  <MessageSquare size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* md+: proper table layout */}
          <div className="hidden md:block overflow-x-auto scrollbar-hide">
            <table className="w-full text-left min-w-[900px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/5">
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Ticket
                  </th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Priority / Status
                  </th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {tickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className="hover:bg-white/[0.03] transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div>
                        <p className="text-base font-medium text-white truncate max-w-[320px]">
                          {ticket.subject}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {ticket.id} • {ticket.timeAgo}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-300">
                      {ticket.user}
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-xs font-medium bg-white/5 px-3 py-1.5 rounded-full text-gray-300">
                        {ticket.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-3 w-3 rounded-full ${
                            ticket.priority === "High" ?
                              "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                            : "bg-emerald-500"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            ticket.status === "Open" ? "text-rose-400"
                            : ticket.status === "In Progress" ? "text-amber-400"
                            : "text-emerald-400"
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button
                        onClick={() => handleReplyClick(ticket)}
                        className="p-3 text-indigo-400 hover:bg-indigo-500/10 rounded-xl transition-all"
                      >
                        <MessageSquare size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer / pagination placeholder */}
          <div className="px-6 py-4 border-t border-white/5 text-sm text-gray-400 flex items-center justify-between">
            <p>Showing {tickets.length} active tickets</p>
            <button className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              View all tickets <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Reply Slide-over */}
      {isReplyOpen && selectedTicket && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsReplyOpen(false)}
          />
          <aside className="relative w-full sm:w-[420px] lg:w-[480px] bg-gray-950 h-full border-l border-white/10 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gray-900/60">
              <div>
                <h2 className="text-xl font-bold text-white">Quick Reply</h2>
                <p className="text-xs text-gray-500 mt-1 font-mono">
                  {selectedTicket.id}
                </p>
              </div>
              <button
                onClick={() => setIsReplyOpen(false)}
                className="p-2.5 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 lg:space-y-8">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs text-gray-400 mb-2 font-bold uppercase tracking-wide">
                  Student's request:
                </p>
                <p className="text-base text-gray-200 leading-relaxed italic">
                  "{selectedTicket.subject}"
                </p>
              </div>

              <div>
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest block mb-4 flex items-center gap-2">
                  <Zap size={14} className="text-amber-400" /> Quick Responses
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {cannedResponses.map((res, i) => (
                    <button
                      key={i}
                      onClick={() => setReplyText(res)}
                      className="text-sm bg-gray-900 border border-white/10 text-gray-300 px-4 py-3 rounded-xl hover:border-indigo-500 hover:text-white transition-all text-left"
                    >
                      {res}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest block mb-4">
                  Your Message
                </label>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={7}
                  className="w-full bg-gray-900 border border-white/10 rounded-2xl p-5 text-base text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none placeholder-gray-600"
                  placeholder="Write your response here..."
                />
              </div>
            </div>

            <div className="p-6 bg-gray-900/40 border-t border-white/5">
              <button
                onClick={sendReply}
                disabled={!replyText.trim()}
                className="w-full flex items-center justify-center gap-3 bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 text-white font-semibold py-4 rounded-2xl transition-all shadow-xl shadow-indigo-600/25 text-base active:scale-[0.98]"
              >
                <Send size={20} /> Send Reply
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
