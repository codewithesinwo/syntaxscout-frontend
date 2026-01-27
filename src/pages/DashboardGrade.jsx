import React, { useState } from "react";
import {
  FaDownload,
  FaSearch,
  FaSyncAlt,
  FaGraduationCap,
  FaChartLine,
  FaArrowUp,
  FaCalculator,
  FaLightbulb,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function DashboardGrade() {
  const { darkMode } = useTheme();

  // State for GPA Projection
  const [targetGrade, setTargetGrade] = useState(90);
  const currentGPA = 3.82;

  // Logic to simulate a projected GPA based on the slider
  const projectedGPA = (currentGPA + (targetGrade / 100) * 0.2).toFixed(2);

  const gradeHistory = [
    { month: "Sep", gpa: 3.2 },
    { month: "Oct", gpa: 3.4 },
    { month: "Nov", gpa: 3.3 },
    { month: "Dec", gpa: 3.8 },
    { month: "Jan", gpa: 3.9 },
  ];

  const courses = [
    { id: 1, name: "Web Development", grade: "A", percentage: 94, credits: 4 },
    {
      id: 2,
      name: "Backend Fundamentals",
      grade: "A-",
      percentage: 89,
      credits: 3,
    },
    { id: 3, name: "Design Systems", grade: "B+", percentage: 87, credits: 3 },
    { id: 4, name: "Cloud Computing", grade: "A", percentage: 92, credits: 4 },
  ];

  return (
    <div
      className={`p-6 mt-16 min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* 1. HEADER */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Grades & Progress
            </h1>
            <p
              className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              Analyze your performance and project future outcomes.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/20">
              <FaDownload size={14} /> Export Transcript
            </button>
          </div>
        </header>

        {/* 2. GPA PROJECTOR TOOL (New Section) */}
        <section
          className={`mb-8 p-8 rounded-[2.5rem] border ${
            darkMode ?
              "bg-neutral-900 border-neutral-800"
            : "bg-white border-gray-100 shadow-sm"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <FaCalculator className="text-indigo-500" />
                <h2 className="text-xl font-bold">GPA Projector</h2>
              </div>
              <p className="text-sm opacity-60 mb-6">
                Adjust the slider to see how your average grade in remaining
                assignments will affect your final GPA.
              </p>

              <input
                type="range"
                min="60"
                max="100"
                value={targetGrade}
                onChange={(e) => setTargetGrade(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mb-4"
              />
              <div className="flex justify-between text-xs font-bold opacity-50 uppercase tracking-widest">
                <span>Passing (60%)</span>
                <span>Perfect (100%)</span>
              </div>
            </div>

            <div
              className={`w-full lg:w-64 p-6 rounded-3xl text-center border-2 border-dashed ${
                darkMode ? "border-neutral-800" : "border-gray-100"
              }`}
            >
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">
                Projected GPA
              </p>
              <h3 className="text-5xl font-black text-indigo-500">
                {projectedGPA}
              </h3>
              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase text-green-500">
                <FaLightbulb /> On Track for Honors
              </div>
            </div>
          </div>
        </section>

        {/* 3. KEY METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            className={`p-6 rounded-3xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-100 shadow-sm"}`}
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              Current GPA
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl font-black">3.82</h2>
              <span className="text-green-500 text-sm font-bold flex items-center gap-1">
                <FaArrowUp size={10} /> 0.2
              </span>
            </div>
          </div>
          <div
            className={`p-6 rounded-3xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-100 shadow-sm"}`}
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              Credits Earned
            </p>
            <h2 className="text-4xl font-black">
              42 <span className="text-lg opacity-30">/ 60</span>
            </h2>
          </div>
          <div
            className={`p-6 rounded-3xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-100 shadow-sm"}`}
          >
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
              Standing
            </p>
            <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-lg w-fit font-black text-xs uppercase">
              Excellent
            </div>
          </div>
        </div>

        {/* 4. ANALYTICS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div
            className={`p-8 rounded-3xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-100 shadow-sm"}`}
          >
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <FaChartLine className="text-indigo-500" /> GPA Trend
            </h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={gradeHistory}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke={darkMode ? "#333" : "#eee"}
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#888", fontSize: 12 }}
                  />
                  <YAxis hide domain={[0, 4.5]} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "15px",
                      border: "none",
                      backgroundColor: darkMode ? "#171717" : "#fff",
                      color: darkMode ? "#fff" : "#000",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="gpa"
                    stroke="#6366f1"
                    strokeWidth={4}
                    dot={{ r: 6, fill: "#6366f1" }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* COURSE PERFORMANCE LIST */}
          <div
            className={`p-8 rounded-3xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-100 shadow-sm"}`}
          >
            <h3 className="font-bold text-lg mb-6">Subject Mastery</h3>
            <div className="space-y-6">
              {courses.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>{course.name}</span>
                    <span className="text-indigo-500">
                      {course.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.percentage}%` }}
                      className="h-full bg-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
