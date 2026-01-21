import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Play,
  CheckCircle2,
  FileText,
  Lock,
  MessageSquare,
  Download,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("overview");

  const lessons = [
    {
      id: 1,
      title: "Getting Started with React",
      duration: "12:00",
      locked: false,
      completed: true,
    },
    {
      id: 2,
      title: "Advanced Hooks & Context",
      duration: "18:45",
      locked: false,
      completed: true,
    },
    {
      id: 3,
      title: "Compound Component Patterns",
      duration: "22:10",
      locked: false,
      completed: false,
    },
    {
      id: 4,
      title: "Performance Optimization",
      duration: "15:30",
      locked: true,
      completed: false,
    },
  ];

  return (
    <div
      className={`min-h-screen mt-16 flex flex-col lg:flex-row ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-amber-500 transition-colors mb-6"
        >
          <ChevronLeft size={16} /> Back to Dashboard
        </button>

        {/* Video Player Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video w-full rounded-3xl bg-neutral-900 shadow-2xl flex items-center justify-center relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10">
            <Play fill="white" className="text-white ml-1" />
          </div>
        </motion.div>

        {/* Tabs & Info */}
        <div className="mt-10">
          <div className="flex gap-8 border-b dark:border-neutral-800 mb-6">
            {["overview", "resources", "discussion"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold capitalize transition-all relative ${
                  activeTab === tab ? "text-amber-500" : "text-gray-500"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="min-h-[200px]"
            >
              {activeTab === "overview" && (
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-bold mb-4">
                    Lesson 3: Compound Component Patterns
                  </h2>
                  <p
                    className={
                      darkMode ? "text-gray-400" : (
                        "text-gray-600 leading-relaxed"
                      )
                    }
                  >
                    Learn how to build flexible and expressive components using
                    the compound pattern. This approach allows you to share
                    state implicitly between a parent and its children, similar
                    to how HTML `select` and `option` tags work.
                  </p>
                </div>
              )}
              {activeTab === "resources" && (
                <div className="space-y-3">
                  <div
                    className={`p-4 rounded-2xl border flex items-center justify-between ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-200"}`}
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="text-blue-500" />
                      <span className="font-medium">
                        Final Project Files.zip
                      </span>
                    </div>
                    <Download
                      size={18}
                      className="cursor-pointer text-gray-500 hover:text-amber-500"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CURRICULUM SIDEBAR */}
      <div
        className={`w-full lg:w-96 border-l p-6 ${
          darkMode ?
            "bg-neutral-950 border-neutral-900"
          : "bg-white border-gray-200"
        }`}
      >
        <h3 className="text-xl font-bold mb-6">Course Curriculum</h3>
        <div className="space-y-3">
          {lessons.map((lesson, idx) => (
            <div
              key={lesson.id}
              className={`p-4 rounded-2xl border flex items-center gap-4 transition-all ${
                lesson.id === 3 ? "border-amber-500 bg-amber-500/5"
                : darkMode ? "bg-neutral-900 border-neutral-800"
                : "bg-gray-50 border-gray-100"
              } ${lesson.locked ? "opacity-50 grayscale" : "cursor-pointer hover:border-amber-500"}`}
            >
              <div className="shrink-0">
                {lesson.completed ?
                  <CheckCircle2 className="text-green-500" size={20} />
                : lesson.locked ?
                  <Lock size={18} className="text-gray-500" />
                : <div className="w-5 h-5 rounded-full border-2 border-amber-500" />
                }
              </div>
              <div className="flex-1">
                <p
                  className={`text-sm font-bold ${lesson.id === 3 ? "text-amber-500" : ""}`}
                >
                  {idx + 1}. {lesson.title}
                </p>
                <span className="text-xs text-gray-500">{lesson.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
