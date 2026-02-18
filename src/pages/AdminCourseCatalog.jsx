import {
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  Eye,
  Filter,
  BookOpen,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    instructor: "Sarah Drasner",
    category: "Development",
    price: "$89.99",
    students: 1240,
    status: "Published",
    lastUpdated: "2023-10-24",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Gary Simon",
    category: "Design",
    price: "$59.99",
    students: 850,
    status: "Draft",
    lastUpdated: "2023-11-02",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Jose Portilla",
    category: "Data Science",
    price: "$99.99",
    students: 3200,
    status: "Published",
    lastUpdated: "2023-09-15",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
];

export default function AdminCourseCatalog() {
  return (
    <div className="space-y-6 p-6 bg-gray-950">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Course Catalog</h1>
          <p className="text-gray-400 text-sm">
            Manage your curriculum and course enrollments.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl transition-all font-medium shadow-lg shadow-indigo-600/20">
          <Plus size={18} />
          Create New Course
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full bg-gray-900 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 bg-gray-900 border border-white/10 text-gray-300 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors">
          <Filter size={18} />
          Filters
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group bg-gray-900 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-indigo-500/10"
          >
            {/* Course Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                    course.status === "Published" ?
                      "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  }`}
                >
                  {course.status}
                </span>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-5 space-y-4">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {course.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 group-hover:text-indigo-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
                  by <span className="text-gray-200">{course.instructor}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                <div className="flex items-center gap-2 text-gray-400">
                  <Users size={16} className="text-indigo-500" />
                  <span className="text-sm font-medium text-gray-200">
                    {course.students.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <DollarSign size={16} className="text-emerald-500" />
                  <span className="text-sm font-medium text-gray-200">
                    {course.price}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={14} />
                  Updated {course.lastUpdated}
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
