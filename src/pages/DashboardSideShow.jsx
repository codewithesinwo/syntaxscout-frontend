import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { BiSolidDashboard, BiSolidMessageAltDetail } from "react-icons/bi";
import { MdAssignmentAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaGraduationCap, FaUserLock, FaUserShield } from "react-icons/fa";
import { removeToken } from "../utils/localstorage";

export default function DashboardSideShow() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const menu = [
    { to: "/dashboard", icon: BiSolidDashboard, label: "Dashboard" },
    {
      to: "/dashboard/assignments",
      icon: MdAssignmentAdd,
      label: "Assignments",
    },
    { to: "/dashboard/grades", icon: FaGraduationCap, label: "Grades" },
    {
      to: "/dashboard/messages",
      icon: BiSolidMessageAltDetail,
      label: "Messages",
    },
    { to: "/dashboard/settings", icon: IoSettings, label: "Settings" },
  ];

  function handleLogout() {
    removeToken();
    navigate("/");
  }

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Updated: strictly bg-gray-950 for dark mode
      className={`hidden md:flex sticky top-[60px] h-[calc(100vh-60px)] flex-col items-center py-8 transition-all duration-300 border-r w-64 z-30 ${
        darkMode ?
          "bg-black border-white/5"
        : "bg-white border-gray-100 shadow-sm"
      }`}
    >
      {/* Section Label */}
      <div className="w-full px-6 mb-6">
        <p
          className={`text-[10px] font-black uppercase tracking-[0.2em] ${
            darkMode ? "text-white/30" : "text-gray-400"
          }`}
        >
          Main Menu
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="w-full px-4 space-y-1.5 flex-1">
        {menu.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <NavLink
                to={item.to}
                end={item.to === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all duration-300 group ${
                    isActive ?
                      "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : darkMode ?
                      "text-white/50 hover:bg-white/5 hover:text-white"
                    : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }`
                }
              >
                <Icon className="text-xl transition-transform group-hover:scale-110" />
                <span className="text-sm tracking-tight">{item.label}</span>
              </NavLink>
            </motion.div>
          );
        })}
      </nav>

      {/* User Footer / Logout */}
      <div className="w-full px-4 pb-4">
        <button
          onClick={handleLogout}
          className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-bold transition-all duration-300 w-full group ${
            darkMode ?
              "bg-white/[0.03] hover:bg-red-500/10"
            : "bg-gray-50 hover:bg-red-50"
          }`}
        >
          <div
            className={`p-2 rounded-lg transition-all ${
              darkMode ?
                "bg-white/5 text-red-400 group-hover:bg-red-500 group-hover:text-white"
              : "bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white"
            }`}
          >
            <FaUserLock size={18} />
          </div>
          <span
            className={`text-sm transition-colors ${
              darkMode ?
                "text-white/40 group-hover:text-red-400"
              : "text-gray-500 group-hover:text-red-500"
            }`}
          >
            Logout
          </span>
        </button>
      </div>
    </motion.div>
  );
}
