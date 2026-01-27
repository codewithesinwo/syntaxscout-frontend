import React, { useState } from "react";
import {
  FaDownload,
  FaSearch,
  FaSyncAlt,
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaFilter,
  FaPlus,
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

  // Logic for filtering
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
      className={`p-6 mt-16 min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Assignments
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="w-48 h-2 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${completionRate}%` }}
                  className="h-full bg-indigo-500"
                />
              </div>
              <span className="text-xs font-bold opacity-60">
                {completionRate}% Course Completion
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className={`p-3 rounded-2xl border ${darkMode ? "border-neutral-800 hover:bg-neutral-900" : "border-gray-200 hover:bg-white"} transition-all`}
            >
              <FaSyncAlt className="text-gray-400" size={14} />
            </button>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/20">
              <FaPlus size={14} /> New Request
            </button>
          </div>
        </header>

        {/* QUICK STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Tasks",
              val: assignments.length,
              color: "text-blue-500",
            },
            {
              label: "Completed",
              val: assignments.filter((a) => a.status === "Submitted").length,
              color: "text-green-500",
            },
            {
              label: "Urgent",
              val: assignments.filter((a) => a.priority === "High").length,
              color: "text-red-500",
            },
            { label: "Avg. Grade", val: "A-", color: "text-purple-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-5 rounded-3xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-100 shadow-sm"}`}
            >
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
              <p className={`text-2xl font-black mt-1 ${stat.color}`}>
                {stat.val}
              </p>
            </div>
          ))}
        </div>

        {/* CONTROLS & TABS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div
            className={`flex p-1 rounded-2xl ${darkMode ? "bg-neutral-900" : "bg-gray-200/50"} w-fit`}
          >
            {["All", "Pending", "Completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab ?
                    darkMode ? "bg-neutral-800 text-white shadow-lg"
                    : "bg-white text-indigo-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border min-w-[300px] ${
              darkMode ?
                "bg-neutral-900 border-neutral-800"
              : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by title..."
              className="bg-transparent border-none outline-none text-sm w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* TABLE SECTION */}
        <div
          className={`overflow-hidden rounded-3xl border ${
            darkMode ?
              "bg-neutral-900 border-neutral-800"
            : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className={`${darkMode ? "bg-neutral-800/50" : "bg-gray-50"} text-[10px] font-black uppercase text-gray-400 tracking-widest`}
                >
                  <th className="px-6 py-4">Title & Course</th>
                  <th className="px-6 py-4">Priority</th>
                  <th className="px-6 py-4">Deadline</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                <AnimatePresence>
                  {filteredAssignments.length > 0 ?
                    filteredAssignments.map((asgn) => (
                      <motion.tr
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={asgn.id}
                        className={`group transition-colors ${darkMode ? "hover:bg-neutral-800/30" : "hover:bg-slate-50"}`}
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <div
                              className={`p-3 rounded-2xl ${darkMode ? "bg-neutral-800 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`}
                            >
                              <FaFileAlt size={18} />
                            </div>
                            <div>
                              <p className="font-bold text-sm">{asgn.title}</p>
                              <p className="text-xs opacity-50 font-medium">
                                {asgn.course}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                asgn.priority === "High" ?
                                  "bg-red-500 animate-pulse"
                                : asgn.priority === "Medium" ? "bg-orange-400"
                                : "bg-blue-400"
                              }`}
                            />
                            <span className="text-xs font-bold opacity-80">
                              {asgn.priority}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">
                              {asgn.dueDate}
                            </span>
                            <span className="text-[10px] opacity-40 font-bold uppercase">
                              Before 11:59 PM
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter
                            ${
                              asgn.status === "Submitted" ?
                                "bg-green-500/10 text-green-500"
                              : asgn.status === "Overdue" ?
                                "bg-red-500/10 text-red-500"
                              : "bg-orange-500/10 text-orange-500"
                            }`}
                          >
                            {asgn.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button
                            className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                              darkMode ?
                                "bg-white text-black hover:bg-gray-200"
                              : "bg-black text-white hover:bg-neutral-800"
                            }`}
                          >
                            Open
                          </button>
                        </td>
                      </motion.tr>
                    ))
                  : <tr>
                      <td colSpan="5" className="px-6 py-20 text-center">
                        <div className="flex flex-col items-center opacity-30">
                          <FaSearch size={40} className="mb-4" />
                          <p className="font-bold italic">
                            No assignments found matching your criteria
                          </p>
                        </div>
                      </td>
                    </tr>
                  }
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
