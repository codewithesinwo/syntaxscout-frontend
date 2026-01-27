import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaCalendarPlus,
  FaStar,
  FaAward,
  FaGlobe,
  FaCertificate,
  FaPlay,
} from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Rocket, Trophy, BrainCircuit, Timer } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  // --- DYNAMIC CALENDAR LOGIC ---
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Calculate total days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  // Calculate which day of the week the 1st falls on (0 = Sunday)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // --- DATA MOCKUPS ---
  const activityData = [
    { day: "Mon", codeTime: 120 },
    { day: "Tue", codeTime: 210 },
    { day: "Wed", codeTime: 180 },
    { day: "Thu", codeTime: 240 },
    { day: "Fri", codeTime: 100 },
    { day: "Sat", codeTime: 320 },
    { day: "Sun", codeTime: 200 },
  ];

  const skillRadar = [
    { subject: "Logic", A: 120 },
    { subject: "UI/UX", A: 98 },
    { subject: "Backend", A: 86 },
    { subject: "Database", A: 99 },
    { subject: "DevOps", A: 85 },
    { subject: "Git", A: 65 },
  ];

  const goalData = [
    { name: "Completed", value: 75 },
    { name: "Remaining", value: 25 },
  ];

  const statsViews = [
    {
      label: "Profile Views",
      value: "1,284",
      icon: <FaGlobe className="text-blue-500" />,
      trend: "+12%",
    },
    {
      label: "Study Hours",
      value: "458h",
      icon: <Timer className="text-purple-500" />,
      trend: "+5.4%",
    },
    {
      label: "Completion",
      value: "82%",
      icon: <Rocket className="text-orange-500" />,
      trend: "+2%",
    },
    {
      label: "Rank",
      value: "Top 5%",
      icon: <Trophy className="text-yellow-500" />,
      trend: "Steady",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      lessons: 15,
      level: "Beginner",
      progress: 65,
      gradient: "from-gray-900 to-blue-500",
    },
    {
      id: 2,
      title: "React & Frontend Development",
      lessons: 22,
      level: "Intermediate",
      progress: 45,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 3,
      title: "Python for Data Analysis",
      lessons: 18,
      level: "Beginner",
      progress: 80,
      gradient: "from-yellow-600 to-orange-500",
    },
  ];

  const events = [
    {
      title: "Web Dev Bootcamp Live",
      date: "Jan 20, 2026",
      time: "10:00 AM",
      location: "Online",
    },
    {
      title: "AI in Business Summit",
      date: "Feb 05, 2026",
      time: "3:00 PM",
      location: "Google Meet",
    },
  ];

  const news = [
    {
      title: "AI Revolutionizes Software Testing",
      source: "TechCrunch",
      time: "3h ago",
    },
    {
      title: "Microsoft Launches Azure AI Tools",
      source: "The Verge",
      time: "6h ago",
    },
    { title: "The Future of DevOps", source: "Dev.to", time: "1d ago" },
  ];

  const achievements = [
    { title: "Frontend Mastery", icon: <FaCertificate />, date: "Aug 2025" },
    { title: "Python Pro Badge", icon: <FaCertificate />, date: "Sep 2025" },
    { title: "UI/UX Designer", icon: <FaCertificate />, date: "Oct 2025" },
  ];

  const activities = [
    {
      icon: <FaCheckCircle className="text-green-500" />,
      text: 'Completed "Props vs State"',
      time: "2h ago",
    },
    {
      icon: <FaCalendarPlus className="text-indigo-500" />,
      text: "Joined Live Session",
      time: "1d ago",
    },
    {
      icon: <FaStar className="text-yellow-500" />,
      text: "Rated JS Fundamentals",
      time: "1d ago",
    },
  ];

  const COLORS = ["#6366f1", darkMode ? "#262626" : "#e2e8f0"];

  // --- BACKEND FETCH ---
  useEffect(() => {
    const token = localStorage.getItem("token");

    // 1. If no token, don't even try to fetch; redirect to login
    if (!token) {
      setLoading(false);
      // window.location.href = "/login"; // Uncomment this if you want auto-redirect
      return;
    }

    async function fetchData() {
      try {
        const res = await fetch(
          "https://syntaxscout-backend.onrender.com/dashboard",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Ensure space after 'Bearer'
            },
          },
        );

        if (res.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
          return;
        }

        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }

        const data = await res.json();

        // Check if your backend returns { user: { firstName: "..." } }
        // or just { firstName: "..." }
        if (data.user) {
          setUsername(data.user.firstName);
        } else {
          setUsername(data.firstName);
        }
      } catch (err) {
        console.error("Fetch failed:", err.message);
        // Fallback name if server is down
        setUsername("Learner");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  
  if (loading) return <SkeletonLoader darkMode={darkMode} />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen p-6 md:p-10 mt-10 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      {/* 1. HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome back, {username || "Learner"}! 👋
          </h1>
          <p className="text-lg opacity-60 mt-1">
            You're 2 hours away from your weekly goal.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-2xl border border-orange-500/20">
          <span className="text-xl">🔥</span>
          <span className="font-bold tracking-tight">12 Day Streak</span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative overflow-hidden mb-10 p-8 rounded-[2rem] bg-indigo-950 text-white shadow-2xl shadow-indigo-500/20"
      >
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Continue Watching
            </span>
            <h2 className="text-3xl font-bold mt-3">
              Advanced React Patterns: Lesson 14
            </h2>
            <p className="opacity-80 text-lg">
              Compound Components & Context API
            </p>
          </div>
          <button className="flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black hover:bg-gray-100 transition-all shadow-xl">
            <FaPlay size={14} /> Resume Lesson
          </button>
        </div>
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
          <Rocket size={350} />
        </div>
      </motion.div>

      {/* 3. STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statsViews.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className={`${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-slate-200"} p-6 rounded-3xl border shadow-sm flex items-center justify-between transition-all`}
          >
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                {stat.label}
              </p>
              <h4 className="text-2xl font-black mt-1">{stat.value}</h4>
              <span className="text-xs text-green-500 font-bold">
                {stat.trend} from last month
              </span>
            </div>
            <div
              className={`p-4 rounded-2xl ${darkMode ? "bg-neutral-800" : "bg-slate-100"}`}
            >
              {stat.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. CORE ANALYTICS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
        <div
          className={`lg:col-span-2 p-8 rounded-3xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-slate-200 shadow-sm"}`}
        >
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
            <Timer size={22} className="text-indigo-500" /> Study Intensity
          </h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke={darkMode ? "#333" : "#e2e8f0"}
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    backgroundColor: darkMode ? "#171717" : "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="codeTime"
                  stroke="#6366f1"
                  fill="#6366f133"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className={`p-8 rounded-3xl border flex flex-col items-center justify-center ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-slate-200 shadow-sm"}`}
        >
          <h3 className="font-bold text-xl mb-4 text-center">Weekly Goal</h3>
          <div className="h-[180px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={goalData}
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={450}
                  dataKey="value"
                >
                  {goalData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black">75%</span>
              <span className="text-[10px] uppercase font-bold opacity-50 text-center">
                of 20hrs <br /> target
              </span>
            </div>
          </div>
        </div>

        <div
          className={`p-8 rounded-3xl border ${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-slate-200 shadow-sm"}`}
        >
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <BrainCircuit size={22} className="text-emerald-500" /> Skill
            Profile
          </h3>
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillRadar}>
                <PolarGrid stroke={darkMode ? "#444" : "#e2e8f0"} />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: "600" }}
                />
                <Radar
                  dataKey="A"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 5. DYNAMIC CALENDAR & EVENTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div
          className={`${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-200"} p-8 rounded-3xl shadow-sm border`}
        >
          <h2 className="font-bold text-xl mb-6 flex items-center gap-2">
            <FaCalendarPlus className="text-indigo-500" />
            {today.toLocaleString("default", { month: "long" })} {currentYear}
          </h2>

          <div className="grid grid-cols-7 gap-2 text-center text-xs">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <div key={d} className="font-black text-gray-400 mb-2">
                {d}
              </div>
            ))}

            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNumber = i + 1;
              const isToday = dayNumber === currentDay;
              return (
                <div
                  key={dayNumber}
                  className={`p-2 rounded-xl transition-all font-medium cursor-default
                    ${isToday ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "hover:bg-gray-200 dark:hover:bg-neutral-800"}`}
                >
                  {dayNumber}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`${darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-gray-200"} p-8 rounded-3xl shadow-sm border lg:col-span-2`}
        >
          <h2 className="font-bold text-xl mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <div
                key={i}
                className={`flex gap-6 p-4 rounded-2xl transition-all ${darkMode ? "hover:bg-neutral-800" : "hover:bg-slate-50"}`}
              >
                <div className="flex flex-col items-center justify-center bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 px-5 rounded-2xl min-w-[90px]">
                  <span className="text-xs font-bold uppercase">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-2xl font-black">
                    {event.date.split(" ")[1].replace(",", "")}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-lg">{event.title}</p>
                  <p className="text-sm opacity-60 mt-1">
                    {event.time} • {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. COURSES */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Your Active Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.03 }}
              className={`${darkMode ? "bg-neutral-900 border-neutral-700" : "bg-white border"} p-6 rounded-3xl shadow-sm`}
            >
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <p className="text-xs font-bold opacity-50 uppercase mb-6">
                {course.lessons} lessons • {course.level}
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1 }}
                    className={`h-full bg-gradient-to-r ${course.gradient}`}
                  />
                </div>
                <button
                  className={`w-full py-3 rounded-xl text-xs font-bold mt-4 transition-all ${darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white"}`}
                >
                  Resume Lesson
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 7. SECONDARY FEED */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          className={`${darkMode ? "bg-neutral-900" : "bg-white"} p-8 rounded-3xl border shadow-sm border-neutral-800`}
        >
          <h2 className="font-bold text-xl mb-6">Industry Insights</h2>
          <div className="space-y-6">
            {news.map((n, i) => (
              <div key={i} className="group cursor-pointer">
                <p className="text-sm font-bold group-hover:text-indigo-500 transition-colors">
                  {n.title}
                </p>
                <p className="text-xs opacity-50 mt-1">
                  {n.source} • {n.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${darkMode ? "bg-neutral-900" : "bg-white"} p-8 rounded-3xl border shadow-sm border-neutral-800`}
        >
          <h2 className="font-bold text-xl mb-6">Achievements</h2>
          <div className="space-y-5">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-2xl text-yellow-500">{a.icon}</div>
                <div>
                  <p className="text-sm font-bold">{a.title}</p>
                  <p className="text-xs opacity-50">{a.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${darkMode ? "bg-neutral-900" : "bg-white"} p-8 rounded-3xl border shadow-sm border-neutral-800`}
        >
          <h2 className="font-bold text-xl mb-6">Activity Feed</h2>
          <div className="space-y-5">
            {activities.map((act, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1">{act.icon}</div>
                <div>
                  <p className="text-sm font-bold">{act.text}</p>
                  <p className="text-xs opacity-50">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonLoader({ darkMode }) {
  return (
    <div
      className={`min-h-screen p-10 animate-pulse ${darkMode ? "bg-black" : "bg-gray-50"}`}
    >
      <div className="h-10 w-64 bg-gray-300 dark:bg-neutral-800 rounded-lg mb-4" />
      <div className="h-6 w-48 bg-gray-200 dark:bg-neutral-900 rounded-lg mb-10" />
      <div className="h-48 w-full bg-gray-200 dark:bg-neutral-900 rounded-[2rem] mb-10" />
    </div>
  );
}
