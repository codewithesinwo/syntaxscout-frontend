import React, { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Play,
  CheckCircle,
  Clock,
  Filter,
  Search,
  Trophy,
  Lock,
  MoreVertical,
  GraduationCap,
  FileText,
  Video,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";

// Mock curriculum data
const curriculumData = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Master the core technologies of the web: HTML, CSS, and JavaScript",
    instructor: "John Smith",
    progress: 75,
    totalModules: 8,
    completedModules: 6,
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    modules: [
      {
        id: 1,
        title: "Introduction to HTML",
        duration: "2 hours",
        lessons: [
          { id: 1, title: "What is HTML?", duration: "15 min", type: "video", completed: true },
          { id: 2, title: "HTML Document Structure", duration: "20 min", type: "video", completed: true },
          { id: 3, title: "Headings and Paragraphs", duration: "18 min", type: "video", completed: true },
          { id: 4, title: "Links and Images", duration: "25 min", type: "video", completed: true },
          { id: 5, title: "Practice: Create Your First Page", duration: "30 min", type: "exercise", completed: true },
        ],
      },
      {
        id: 2,
        title: "CSS Styling Basics",
        duration: "3 hours",
        lessons: [
          { id: 6, title: "CSS Selectors", duration: "20 min", type: "video", completed: true },
          { id: 7, title: "Colors and Typography", duration: "25 min", type: "video", completed: true },
          { id: 8, title: "Box Model", duration: "22 min", type: "video", completed: true },
          { id: 9, title: "Flexbox Layout", duration: "35 min", type: "video", completed: true },
          { id: 10, title: "Practice: Style a Landing Page", duration: "45 min", type: "exercise", completed: true },
        ],
      },
      {
        id: 3,
        title: "JavaScript Essentials",
        duration: "4 hours",
        lessons: [
          { id: 11, title: "Variables and Data Types", duration: "25 min", type: "video", completed: false },
          { id: 12, title: "Functions and Scope", duration: "30 min", type: "video", completed: false },
          { id: 13, title: "DOM Manipulation", duration: "35 min", type: "video", completed: false },
          { id: 14, title: "Events and Listeners", duration: "28 min", type: "video", completed: false },
          { id: 15, title: "Practice: Interactive Calculator", duration: "50 min", type: "exercise", completed: false },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "React & Frontend Development",
    description: "Build modern user interfaces with React.js and component-based architecture",
    instructor: "Sarah Johnson",
    progress: 45,
    totalModules: 10,
    completedModules: 4,
    icon: Code,
    color: "from-teal-500 to-emerald-500",
    modules: [
      {
        id: 1,
        title: "React Fundamentals",
        duration: "3 hours",
        lessons: [
          { id: 1, title: "Introduction to React", duration: "20 min", type: "video", completed: true },
          { id: 2, title: "JSX and Components", duration: "25 min", type: "video", completed: true },
          { id: 3, title: "Props and State", duration: "30 min", type: "video", completed: true },
          { id: 4, title: "Event Handling", duration: "20 min", type: "video", completed: true },
        ],
      },
      {
        id: 2,
        title: "React Hooks",
        duration: "4 hours",
        lessons: [
          { id: 5, title: "useState Hook", duration: "25 min", type: "video", completed: true },
          { id: 6, title: "useEffect Hook", duration: "30 min", type: "video", completed: false },
          { id: 7, title: "Custom Hooks", duration: "35 min", type: "video", completed: false },
          { id: 8, title: "Practice: Todo Application", duration: "45 min", type: "exercise", completed: false },
        ],
      },
      {
        id: 3,
        title: "State Management",
        duration: "3 hours",
        lessons: [
          { id: 9, title: "Context API", duration: "30 min", type: "video", completed: false },
          { id: 10, title: "Redux Basics", duration: "35 min", type: "video", completed: false },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Backend Development with Node.js",
    description: "Create robust server-side applications and APIs with Node.js and Express",
    instructor: "Michael Chen",
    progress: 20,
    totalModules: 12,
    completedModules: 2,
    icon: Server,
    color: "from-purple-500 to-pink-500",
    modules: [
      {
        id: 1,
        title: "Node.js Basics",
        duration: "2 hours",
        lessons: [
          { id: 1, title: "Introduction to Node.js", duration: "20 min", type: "video", completed: true },
          { id: 2, title: "NPM and Modules", duration: "25 min", type: "video", completed: true },
          { id: 3, title: "File System Operations", duration: "30 min", type: "video", completed: false },
        ],
      },
      {
        id: 2,
        title: "Express Framework",
        duration: "3 hours",
        lessons: [
          { id: 4, title: "Setting Up Express", duration: "20 min", type: "video", completed: false },
          { id: 5, title: "Routes and Middleware", duration: "35 min", type: "video", completed: false },
          { id: 6, title: "RESTful API Design", duration: "40 min", type: "video", completed: false },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Database Management",
    description: "Design and manage databases with SQL and MongoDB",
    instructor: "Emily Davis",
    progress: 0,
    totalModules: 6,
    completedModules: 0,
    icon: Database,
    color: "from-orange-500 to-red-500",
    modules: [
      {
        id: 1,
        title: "SQL Fundamentals",
        duration: "3 hours",
        lessons: [
          { id: 1, title: "Introduction to SQL", duration: "20 min", type: "video", completed: false },
          { id: 2, title: "SELECT Queries", duration: "30 min", type: "video", completed: false },
          { id: 3, title: "Joins and Subqueries", duration: "35 min", type: "video", completed: false },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    description: "Learn design fundamentals and create beautiful user interfaces",
    instructor: "Alex Turner",
    progress: 100,
    totalModules: 5,
    completedModules: 5,
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    modules: [
      {
        id: 1,
        title: "Design Fundamentals",
        duration: "2 hours",
        lessons: [
          { id: 1, title: "Color Theory", duration: "20 min", type: "video", completed: true },
          { id: 2, title: "Typography Basics", duration: "25 min", type: "video", completed: true },
        ],
      },
      {
        id: 2,
        title: "Wireframing & Prototyping",
        duration: "3 hours",
        lessons: [
          { id: 3, title: "Creating Wireframes", duration: "30 min", type: "video", completed: true },
          { id: 4, title: "Figma Basics", duration: "45 min", type: "video", completed: true },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications with React Native",
    instructor: "Jessica Lee",
    progress: 0,
    totalModules: 8,
    completedModules: 0,
    icon: Smartphone,
    color: "from-indigo-500 to-violet-500",
    modules: [
      {
        id: 1,
        title: "React Native Setup",
        duration: "2 hours",
        lessons: [
          { id: 1, title: "Environment Setup", duration: "30 min", type: "video", completed: false },
          { id: 2, title: "Your First App", duration: "25 min", type: "video", completed: false },
        ],
      },
    ],
  },
];

export default function Curriculum() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);

  const getStatusFilter = (course) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "completed") return course.progress === 100;
    if (filterStatus === "in-progress") return course.progress > 0 && course.progress < 100;
    if (filterStatus === "not-started") return course.progress === 0;
    return true;
  };

  const filteredCurriculum = curriculumData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = getStatusFilter(course);
    return matchesSearch && matchesFilter;
  });

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
    setExpandedModule(null);
  };

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const getCompletedLessons = (course) => {
    return course.modules.reduce((acc, module) => {
      return acc + module.lessons.filter((lesson) => lesson.completed).length;
    }, 0);
  };

  const getTotalLessons = (course) => {
    return course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* --- Header Section --- */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              <GraduationCap className="text-teal-400" size={40} />
              Student Curriculum
            </h1>
            <p className="text-gray-400 mt-2">
              Track your learning journey across all courses
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search courses..."
                className="bg-gray-900 border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-teal-500 w-64 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div> */}
            <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-xl p-1">
              <Filter className="text-gray-500 ml-2" size={16} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-transparent text-sm py-2 pr-4 focus:outline-none text-gray-300 cursor-pointer"
              >
                <option value="all">All Courses</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="not-started">Not Started</option>
              </select>
            </div>
          </div>
        </header>

        {/* --- Overall Progress Stats --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="text-teal-400" size={20} />
              <span className="text-gray-400 text-sm">Total Courses</span>
            </div>
            <p className="text-3xl font-black">{curriculumData.length}</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="text-emerald-400" size={20} />
              <span className="text-gray-400 text-sm">Completed</span>
            </div>
            <p className="text-3xl font-black text-emerald-400">
              {curriculumData.filter((c) => c.progress === 100).length}
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-amber-400" size={20} />
              <span className="text-gray-400 text-sm">In Progress</span>
            </div>
            <p className="text-3xl font-black text-amber-400">
              {curriculumData.filter((c) => c.progress > 0 && c.progress < 100).length}
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="text-purple-400" size={20} />
              <span className="text-gray-400 text-sm">Avg. Progress</span>
            </div>
            <p className="text-3xl font-black text-purple-400">
              {Math.round(curriculumData.reduce((acc, c) => acc + c.progress, 0) / curriculumData.length)}%
            </p>
          </div>
        </div>

        {/* --- Curriculum List --- */}
        <div className="space-y-4">
          {filteredCurriculum.length > 0 ? (
            filteredCurriculum.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isExpanded={expandedCourse === course.id}
                expandedModule={expandedModule}
                onToggle={() => toggleCourse(course.id)}
                onToggleModule={toggleModule}
              />
            ))
          ) : (
            <div className="py-20 text-center bg-gray-900/30 rounded-3xl border border-dashed border-gray-800">
              <p className="text-gray-500">No courses found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterStatus("all");
                }}
                className="mt-4 text-teal-400 hover:underline text-sm font-bold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CourseCard({ course, isExpanded, expandedModule, onToggle, onToggleModule }) {
  const Icon = course.icon;
  const completedLessons = course.modules.reduce((acc, module) => {
    return acc + module.lessons.filter((lesson) => lesson.completed).length;
  }, 0);
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);

  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-gray-700">
      {/* Course Header */}
      <div
        className="p-5 cursor-pointer flex items-center justify-between"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
            <Icon size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold">{course.title}</h3>
            <p className="text-gray-500 text-sm">{course.instructor}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:block w-48">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">{completedLessons}/{totalLessons} Lessons</span>
              <span className="text-teal-400 font-bold">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${course.color} transition-all duration-500`}
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
          {course.progress === 100 ? (
            <CheckCircle className="text-emerald-400" size={24} />
          ) : (
            <ChevronRight
              className={`text-gray-500 transition-transform ${isExpanded ? "rotate-90" : ""}`}
              size={24}
            />
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-800 bg-gray-900/30">
          <div className="p-5">
            <p className="text-gray-400 text-sm mb-4">{course.description}</p>

            {/* Modules */}
            <div className="space-y-3">
              {course.modules.map((module, moduleIndex) => (
                <ModuleItem
                  key={module.id}
                  module={module}
                  moduleIndex={moduleIndex}
                  isExpanded={expandedModule === module.id}
                  onToggle={() => onToggleModule(module.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


function ModuleItem({ module, moduleIndex, isExpanded, onToggle }) {
  const completedCount = module.lessons.filter((l) => l.completed).length;

  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <div
        className="p-4 flex items-center justify-between cursor-pointer bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-xs font-bold">
            {moduleIndex + 1}
          </span>
          <div>
            <h4 className="font-medium text-sm">{module.title}</h4>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock size={12} />
              <span>{module.duration}</span>
              <span>•</span>
              <span>{module.lessons.length} lessons</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">
            {completedCount}/{module.lessons.length}
          </span>
          <ChevronDown
            className={`text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            size={18}
          />
        </div>
      </div>

      {/* Lessons List */}
      {isExpanded && (
        <div className="border-t border-gray-800">
          {module.lessons.map((lesson, lessonIndex) => (
            <LessonItem key={lesson.id} lesson={lesson} lessonIndex={lessonIndex} />
          ))}
        </div>
      )}
    </div>
  );
}

function LessonItem({ lesson, lessonIndex }) {
  const getIcon = () => {
    switch (lesson.type) {
      case "video":
        return Video;
      case "exercise":
        return Code;
      case "quiz":
        return FileText;
      default:
        return FileText;
    }
  };

  const Icon = getIcon();

  return (
    <div
      className={`p-3 flex items-center justify-between hover:bg-gray-800/30 transition-colors ${
        lessonIndex !== 0 ? "border-t border-gray-800/50" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        {lesson.completed ? (
          <CheckCircle size={18} className="text-emerald-400" />
        ) : (
          <div className="w-[18px] h-[18px] rounded-full border-2 border-gray-600" />
        )}
        <div className="flex items-center gap-2">
          <Icon size={14} className="text-gray-500" />
          <span className={`text-sm ${lesson.completed ? "text-gray-400" : "text-gray-300"}`}>
            {lesson.title}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-600">{lesson.duration}</span>
        {lesson.completed ? (
          <button className="p-1.5 rounded-lg bg-emerald-400/20 text-emerald-400 hover:bg-emerald-400/30 transition-colors">
            <Play size={14} />
          </button>
        ) : (
          <button className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 transition-colors">
            <Play size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
