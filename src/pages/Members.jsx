import React from "react";
import {
  PlayCircle,
  Trophy,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Members() {

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
    
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-12 px-6">
      <div className="gap-8">
        
        {/* Main Content */}
        <main className="lg:col-span-3 space-y-8">
          {/* Stats Overview */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard
              icon={<PlayCircle className="text-teal-400" />}
              label="Courses in Progress"
              value={courses.length}
            />
            <StatCard
              icon={<Trophy className="text-yellow-400" />}
              label="Certificates"
              value="4"
            />
            <StatCard
              icon={<Clock className="text-purple-400" />}
              label="Learning Hours"
              value="24.5h"
            />
            <StatCard
              icon={<Clock className="text-amber-600" />}
              label="Learning Hours"
              value="24.5h"
            />
          </section>

          {/* Course Grid */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-2xl font-bold">Continue Learning</h3>
              <Link
                to="/courses"
                className="text-teal-400 hover:underline text-sm flex items-center gap-1"
              >
                Browse all <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group hover:border-teal-500/50 transition-colors"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h4 className="font-bold mb-4 line-clamp-1">
                      {course.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 mb-6">
                      <div
                        className="bg-teal-500 h-1.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <button className="cursor-pointer w-full py-2 bg-white text-black rounded-xl font-bold text-sm hover:bg-teal-400 transition-colors">
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
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex items-center space-x-4">
      <div className="p-3 bg-gray-800 rounded-xl">{icon}</div>
      <div>
        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
          {label}
        </p>
        <p className="text-2xl font-bold leading-tight">{value}</p>
      </div>
    </div>
  );
}
