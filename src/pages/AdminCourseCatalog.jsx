import React, { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Clock,
  MoreHorizontal,
  BookOpen,
  User,
  Users,
  Calendar,
  Tag,
  Save,
  X,
} from "lucide-react";

const initialCourses = [
  {
    id: 1,
    title: "JavaScript Mastery",
    instructor: "Alex Johnson",
    status: "Published",
    enrollments: 1248,
    category: "Programming",
    created: "2023-10-12",
    description: "Comprehensive guide to modern JavaScript development.",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Williams",
    status: "Draft",
    enrollments: 0,
    category: "Design",
    created: "2024-01-05",
    description: "Learn the basics of user interface and experience design.",
  },
  {
    id: 3,
    title: "Data Science with Python",
    instructor: "Mike Peters",
    status: "Published",
    enrollments: 892,
    category: "Data Science",
    created: "2023-11-20",
    description:
      "Introduction to data analysis and machine learning using Python.",
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    instructor: "Emma Davis",
    status: "Under Review",
    enrollments: 456,
    category: "Programming",
    created: "2024-02-14",
    description: "Deep dive into advanced React concepts and best practices.",
  },
];

export default function AdminCourseCatalog() {
  const [courses, setCourses] = useState(initialCourses);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleEditClick = (course) => {
    setSelectedCourse({ ...course });
    setIsEditOpen(true);
  };

  const handleUpdateCourse = () => {
    setCourses(
      courses.map((c) => (c.id === selectedCourse.id ? selectedCourse : c)),
    );
    setIsEditOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8 text-gray-100 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Catalog Management
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Review and update your course inventory.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
            <Plus size={18} /> New Course
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by title or instructor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900 border border-white/10 rounded-2xl py-4 pl-12 pr-5 text-sm text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        {/* Courses List - Stacked for better readability */}
        <div className="space-y-3">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-gray-900/50 border border-white/5 hover:border-indigo-500/30 rounded-2xl p-5 transition-all flex items-start justify-between gap-4"
            >
              <div className="flex gap-4">
                {/* Visual Icon */}
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/10">
                  <BookOpen size={22} />
                </div>

                <div className="space-y-3">
                  {/* Title */}
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs font-bold text-indigo-500/80 uppercase tracking-widest mt-0.5">
                      {course.category}
                    </p>
                  </div>

                  {/* Metadata Row: Instructor, Status, Enrollments */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 md:gap-x-6 text-sm">
                    {/* Instructor */}
                    <div className="flex items-center gap-1.5 text-gray-300 bg-white/5 px-2.5 py-1 rounded-lg">
                      <User size={14} className="text-gray-500" />
                      <span className="font-medium">{course.instructor}</span>
                    </div>

                    {/* Enrollments */}
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Users size={14} />
                      <span>
                        {course.enrollments.toLocaleString()} students
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div
                      className={`flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                        course.status === "Published" ?
                          "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
                        : course.status === "Draft" ?
                          "text-gray-400 border-white/10 bg-white/5"
                        : "text-amber-400 border-amber-500/20 bg-amber-500/5"
                      }`}
                    >
                      {course.status === "Published" && (
                        <CheckCircle2 size={12} />
                      )}
                      {course.status === "Draft" && <Clock size={12} />}
                      {course.status === "Under Review" && <Eye size={12} />}
                      {course.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleEditClick(course)}
                className="shrink-0 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                <Edit size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-over (logic remains the same) */}
      {isEditOpen && selectedCourse && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsEditOpen(false)}
          />
          <aside className="relative w-full sm:w-[450px] bg-gray-950 h-full border-l border-white/10 p-6 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">Edit Course</h2>
              <button
                onClick={() => setIsEditOpen(false)}
                className="text-gray-500 hover:text-white"
              >
                <X />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {/* Title Input */}
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase">
                  Course Title
                </label>
                <input
                  value={selectedCourse.title}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      title: e.target.value,
                    })
                  }
                  className="w-full bg-gray-900 border border-white/10 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Rest of the inputs... */}
              {/* Description */}
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase">
                  Description
                </label>
                <textarea
                  value={selectedCourse.description}
                  rows={4}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      description: e.target.value,
                    })
                  }
                  className="w-full bg-gray-900 border border-white/10 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-6 border-t border-white/10 flex gap-3">
              <button
                onClick={handleUpdateCourse}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-600/20"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}