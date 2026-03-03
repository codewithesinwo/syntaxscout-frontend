import React from "react";
import {
  PlayCircle,
  Trophy,
  Clock,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Members() {
  // Fixed: Unique IDs for each course to prevent React key warnings
  const courses = [
    {
      id: 1,
      title: "Mastering React Design Patterns",
      progress: 80,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Advanced Tailwind Layouts",
      progress: 30,
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Fullstack Next.js Guide",
      progress: 45,
      image:
        "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "TypeScript Fundamentals",
      progress: 10,
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Content */}
        <main className="space-y-10">
          {/* Header Section */}
          <header>
            <h2 className="text-3xl font-bold">Welcome back, Developer</h2>
            <p className="text-gray-400 mt-2">
              You're on a 5-day learning streak! Keep it up.
            </p>
          </header>

          {/* Stats Overview */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={<PlayCircle className="text-teal-400" size={24} />}
              label="Courses in Progress"
              value={courses.length}
            />
            <StatCard
              icon={<Trophy className="text-yellow-400" size={24} />}
              label="Certificates"
              value="4"
            />
            <StatCard
              icon={<Clock className="text-purple-400" size={24} />}
              label="Learning Hours"
              value="24.5h"
            />
            <StatCard
              icon={<TrendingUp className="text-emerald-400" size={24} />}
              label="Current Streak"
              value="5 Days"
            />
          </section>

          {/* Course Grid */}
          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-2xl font-bold">Continue Learning</h3>
                <p className="text-gray-400 text-sm">
                  Pick up right where you left off
                </p>
              </div>
              <Link
                to="/courses"
                className="group text-teal-400 hover:text-teal-300 text-sm font-medium flex items-center gap-1 transition-colors"
              >
                Browse all{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>

                  <div className="p-5">
                    <h4 className="font-bold mb-4 line-clamp-1 group-hover:text-teal-400 transition-colors">
                      {course.title}
                    </h4>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Progress</span>
                      <span className="font-mono">{course.progress}%</span>
                    </div>

                    <div className="w-full bg-gray-800 rounded-full h-1.5 mb-6">
                      <div
                        className="bg-teal-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>

                    <button className="cursor-pointer w-full py-2.5 bg-white text-black rounded-xl font-bold text-sm hover:bg-teal-400 hover:text-black transition-all active:scale-95">
                      Resume Lesson
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex items-center space-x-4 hover:bg-gray-800/50 transition-colors">
      <div className="p-3 bg-gray-800 rounded-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
          {label}
        </p>
        <p className="text-2xl font-bold leading-tight mt-1">{value}</p>
      </div>
    </div>
  );
}
