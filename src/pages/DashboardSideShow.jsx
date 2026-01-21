import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { BiSolidDashboard, BiSolidMessageAltDetail } from "react-icons/bi";
import { MdAssignmentAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaGoodreads, FaUserLock, FaUserShield } from "react-icons/fa";
import { removeToken } from "../utils/localstorage";

export default function DashboardSideShow() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const menu = [
    { to: "/dashboard", icon: BiSolidDashboard, label: "Dashboard" },
    {
      to: "/dashboard/assignments",
      icon: MdAssignmentAdd,
      label: "Assignment",
    },
    { to: "/dashboard/grades", icon: FaGoodreads, label: "Grades" },
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
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Fixed height to account for the header (mt-15)
      className={`hidden md:flex sticky top-15 h-[calc(100vh-3.75rem)] ${
        darkMode ? "bg-black border-gray-800" : "bg-gray-50 border-gray-200"
      } flex-col items-center py-6 shadow-lg transition-colors border-r w-60`}
    >
      {/* Sidebar Title */}
      <motion.h3
        className={`font-extrabold text-xl mb-8 ${
          darkMode ? "text-white" : "text-gray-950"
        } tracking-wide`}
      >
        NAVIGATION
      </motion.h3>

      {/* Main Menu Items */}
      <div className="w-full px-3 space-y-2 flex-1">
        {menu.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <NavLink
                to={item.to}
                end={item.to === "/dashboard"} // Prevents dashboard staying active on sub-routes
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive ?
                      darkMode ?
                        "bg-amber-600 text-white shadow-lg shadow-amber-900/20"
                      : "bg-amber-500 text-white shadow-md"
                    : darkMode ?
                      "text-gray-400 hover:bg-gray-800 hover:text-white"
                    : "text-gray-600 hover:bg-gray-200"
                  }`
                }
              >
                <Icon className="text-xl" />
                <span>{item.label}</span>
              </NavLink>
            </motion.div>
          );
        })}

        {/* Admin Section (Uncomment when ready) */}
        {/* <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-4 border-t border-gray-700/30 mt-4"
        >
          <NavLink
            to="/dashboard/admin"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl font-semibold transition-all duration-300 ${
                isActive 
                  ? "bg-teal-600 text-white" 
                  : darkMode ? "text-gray-400 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-200"
              }`
            }
          >
            <FaUserShield className="text-xl text-teal-500" />
            <span>Admin</span>
          </NavLink>
        </motion.div> 
        */}
      </div>

      {/* Logout Section - Pushed to bottom using mt-auto */}
      <div className="w-full px-3 mt-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={handleLogout}
            className={`flex items-center gap-4 p-3 rounded-xl font-semibold transition-all duration-300 w-full group ${
              darkMode ? "hover:bg-red-950/30" : "hover:bg-red-50"
            }`}
          >
            <FaUserLock className="text-xl text-red-500 group-hover:scale-110 transition-transform" />
            <span className="text-red-500">Logout</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
