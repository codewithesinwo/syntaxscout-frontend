import React, { useState } from "react";
import {
  FaSearch,
  FaSyncAlt,
  FaFileAlt,
  FaPlus,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function DashboardAssignment() {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const assignments = [
    {
      id: 1,
      title: "React Hooks Deep Dive",
      course: "Web Development",
      dueDate: "Jan 30, 2026",
      status: "Pending",
      type: "Coding",
      priority: "High",
    },
    {
      id: 2,
      title: "Database Schema Design",
      course: "Backend Fundamentals",
      dueDate: "Feb 02, 2026",
      status: "Submitted",
      type: "PDF Report",
      priority: "Medium",
    },
    {
      id: 3,
      title: "UI UX Case Study",
      course: "Design Systems",
      dueDate: "Jan 25, 2026",
      status: "Overdue",
      type: "Figma Link",
      priority: "High",
    },
    {
      id: 4,
      title: "System Architecture",
      course: "Cloud Computing",
      dueDate: "Feb 10, 2026",
      status: "Pending",
      type: "Quiz",
      priority: "Low",
    },
  ];

  const filteredAssignments = assignments.filter((asgn) => {
    const matchesSearch = asgn.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Pending" &&
        (asgn.status === "Pending" || asgn.status === "Overdue")) ||
      (activeTab === "Completed" && asgn.status === "Submitted");
    return matchesSearch && matchesTab;
  });

  const completionRate = Math.round(
    (assignments.filter((a) => a.status === "Submitted").length /
      assignments.length) *
      100,
  );

  return (
    <div
      className={`p-4 md:p-8 mt-16 min-h-screen transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-gray-50 text-slate-900"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER - Responsive Flex */}
        <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Assignments
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="w-32 md:w-48 h-2 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${completionRate}%` }}
                  className="h-full bg-indigo-500"
                />
              </div>
              <span className="text-xs font-bold opacity-60">
                {completionRate}% Done
              </span>
            </div>
          </div>

          <div className="flex w-full lg:w-auto gap-3">
            <button
              className={`flex-1 lg:flex-none p-3 rounded-2xl border flex justify-center items-center ${darkMode ? "border-neutral-800 bg-neutral-900" : "border-gray-200 bg-white"}`}
            >
              <FaSyncAlt className="text-gray-400" size={14} />
            </button>
            <button className="flex-3 lg:flex-none flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/20">
              <FaPlus size={14} />{" "}
              <span className="whitespace-nowrap">New Request</span>
            </button>
          </div>
        </header>

        {/* QUICK STATS - Grid adjusts from 1 to 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", val: assignments.length, color: "text-blue-500" },
            {
              label: "Done",
              val: assignments.filter((a) => a.status === "Submitted").length,
              color: "text-green-500",
            },
            {
              label: "Urgent",
              val: assignments.filter((a) => a.priority === "High").length,
              color: "text-red-500",
            },
            { label: "Grade", val: "A-", color: "text-purple-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-4 md:p-5 rounded-3xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-100 shadow-sm"}`}
            >
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
              <p
                className={`text-xl md:text-2xl font-black mt-1 ${stat.color}`}
              >
                {stat.val}
              </p>
            </div>
          ))}
        </div>

        {/* CONTROLS - Stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div
            className={`flex p-1 rounded-2xl ${darkMode ? "bg-neutral-900" : "bg-gray-200/50"} overflow-x-auto no-scrollbar`}
          >
            {["All", "Pending", "Completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab ?
                    darkMode ? "bg-neutral-800 text-white shadow-lg"
                    : "bg-white text-indigo-600 shadow-sm"
                  : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border flex-grow ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-200"}`}
          >
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search assignments..."
              className="bg-transparent border-none outline-none text-sm w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div
          className={`rounded-3xl border overflow-hidden ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-200 shadow-sm"}`}
        >
          {/* DESKTOP TABLE - Hidden on small screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr
                  className={`${darkMode ? "bg-neutral-800/50" : "bg-gray-50"} text-[10px] font-black uppercase text-gray-400 tracking-widest`}
                >
                  <th className="px-6 py-4">Assignment</th>
                  <th className="px-6 py-4">Priority</th>
                  <th className="px-6 py-4">Deadline</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                <AnimatePresence>
                  {filteredAssignments.map((asgn) => (
                    <motion.tr
                      key={asgn.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={
                        darkMode ?
                          "hover:bg-neutral-800/30"
                        : "hover:bg-slate-50"
                      }
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2.5 rounded-xl ${darkMode ? "bg-neutral-800 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`}
                          >
                            <FaFileAlt size={16} />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{asgn.title}</p>
                            <p className="text-xs opacity-50">{asgn.course}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`text-xs font-bold ${asgn.priority === "High" ? "text-red-500" : "text-gray-500"}`}
                        >
                          {asgn.priority}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-xs font-bold">
                        {asgn.dueDate}
                      </td>
                      <td className="px-6 py-5">
                        <StatusBadge status={asgn.status} />
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button
                          className={`px-4 py-2 rounded-xl text-xs font-black ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
                        >
                          Open
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* MOBILE LIST - Shown only on small screens */}
          <div className="md:hidden divide-y divide-gray-100 dark:divide-neutral-800">
            {filteredAssignments.map((asgn) => (
              <div key={asgn.id} className="p-4 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div
                      className={`p-3 h-fit rounded-2xl ${darkMode ? "bg-neutral-800 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`}
                    >
                      <FaFileAlt size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight">
                        {asgn.title}
                      </p>
                      <p className="text-xs opacity-50 mt-1">{asgn.course}</p>
                    </div>
                  </div>
                  <StatusBadge status={asgn.status} />
                </div>

                <div className="flex items-center justify-between text-xs border-t border-gray-100 dark:border-neutral-800 pt-4">
                  <div className="flex items-center gap-2 opacity-60">
                    <FaCalendarAlt />
                    <span>{asgn.dueDate}</span>
                  </div>
                  <button
                    className={`px-5 py-2 rounded-xl text-xs font-black ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
                  >
                    Open Task
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredAssignments.length === 0 && (
            <div className="py-20 text-center opacity-30">
              <FaSearch size={40} className="mx-auto mb-4" />
              <p className="font-bold italic">No assignments found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Sub-component for clean status logic
function StatusBadge({ status }) {
  const styles = {
    Submitted: "bg-green-500/10 text-green-500",
    Overdue: "bg-red-500/10 text-red-500",
    Pending: "bg-orange-500/10 text-orange-500",
  };
  return (
    <span
      className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter ${styles[status]}`}
    >
      {status}
    </span>
  );
}
