import React, { useState } from "react";
import {
  Play,
  Search,
  Filter,
  Clock,
  CheckCircle,
  MoreVertical,
  LayoutGrid,
  List as ListIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MyCourses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const myCourses = [
    {
      id: 1,
      title: "Mastering React Design Patterns",
      instructor: "Sarah Drasner",
      progress: 85,
      totalLessons: 42,
      completedLessons: 36,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      lastAccessed: "2 hours ago",
    },
    {
      id: 2,
      title: "Advanced Tailwind Layouts & Animations",
      instructor: "Adam Wathan",
      progress: 30,
      totalLessons: 28,
      completedLessons: 8,
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop",
      lastAccessed: "Yesterday",
    },
    {
      id: 3,
      title: "Fullstack Next.js 14 Guide",
      instructor: "Guillermo Rauch",
      progress: 10,
      totalLessons: 55,
      completedLessons: 5,
      image:
        "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400&h=250&fit=crop",
      lastAccessed: "3 days ago",
    },
  ];

  const filteredCourses = myCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* --- Header Section --- */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight">My Courses</h1>
            <p className="text-gray-400 mt-2">
              You have {myCourses.length} active courses in your library.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search my library..."
                className="bg-gray-900 border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-teal-500 w-64 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex bg-gray-900 p-1 rounded-xl border border-gray-800">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-gray-800 text-teal-400" : "text-gray-500"}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-gray-800 text-teal-400" : "text-gray-500"}`}
              >
                <ListIcon size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* --- Course Display --- */}
        {filteredCourses.length > 0 ?
          <div
            className={
              viewMode === "grid" ?
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col gap-4"
            }
          >
            {filteredCourses.map((course) => (
              <CourseListItem key={course.id} course={course} mode={viewMode} />
            ))}
          </div>
        : <div className="py-20 text-center bg-gray-900/30 rounded-3xl border border-dashed border-gray-800">
            <p className="text-gray-500">
              No courses found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-teal-400 hover:underline text-sm font-bold"
            >
              Clear Search
            </button>
          </div>
        }
      </div>
    </div>
  );
}

function CourseListItem({ course, mode }) {
  const isGrid = mode === "grid";

  return (
    <>
      <div
        className={`group bg-[#0a0a0a] border border-gray-800 overflow-hidden transition-all hover:border-teal-500/50 ${
          isGrid ? "rounded-2xl" : "rounded-xl flex items-center p-4 gap-6"
        }`}
      >
        {/* Image Section */}
        <div
          className={`relative overflow-hidden shrink-0 ${isGrid ? "h-44 w-full" : "h-24 w-40 rounded-lg"}`}
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-teal-500 text-black p-3 rounded-full scale-90 group-hover:scale-100 transition-transform">
              <Play fill="currentColor" size={20} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`flex-1 ${isGrid ? "p-5" : "pr-4"}`}>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg leading-tight group-hover:text-teal-400 transition-colors line-clamp-1">
              {course.title}
            </h3>
            <button className="text-gray-600 hover:text-white transition-colors">
              <MoreVertical size={18} />
            </button>
          </div>

          <p className="text-xs text-gray-500 mb-4 font-medium">
            By {course.instructor}
          </p>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
              <span className="text-gray-500">
                {course.completedLessons}/{course.totalLessons} Lessons
              </span>
              <span className="text-teal-400">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-teal-500 h-full rounded-full transition-all duration-1000"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Link
              to={`/watch/${course.id}`}
              className="text-xs font-black uppercase tracking-tighter bg-white text-black px-4 py-2 rounded-lg hover:bg-teal-400 transition-colors"
            >
              {course.progress > 0 ? "Resume" : "Start"} Lesson
            </Link>
            <span className="text-[10px] text-gray-600 flex items-center gap-1">
              <Clock size={12} /> {course.lastAccessed}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
