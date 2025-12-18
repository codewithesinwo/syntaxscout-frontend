// import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { BiSolidDashboard, BiSolidMessageAltDetail } from "react-icons/bi";
// import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { SiDiscourse } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import {
  FaGoodreads,
  FaUserLock,
} from "react-icons/fa";
import { removeToken } from "../utils/localstorage";

export default function DashboardSideShow() {

  const { darkMode } = useTheme();
const navigate=useNavigate()

  const menu = [
    { to: "/dashboard", icon: BiSolidDashboard, label: "Dashboard" },
    { to: "/dashboard/courses", icon: SiDiscourse, label: "All Courses" },
    { to: "/dashboard/assignments", icon: MdAssignmentAdd, label: "Assignment" },
    { to: "/dashboard/grades", icon: FaGoodreads, label: "Grades" },
    { to: "/dashboard/messages", icon: BiSolidMessageAltDetail, label: "Messages" },
    {
      to: "/dashboard/settings",
      icon: IoSettings,
      label: "Settings",
    },
  ];

  function handleLogout(){
    navigate('/')
    removeToken()
  }

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`hidden md:flex h-screen ${
        darkMode ? "bg-black border-r-gray-200" : "bg-gray-200"
      } flex-col items-center py-6 shadow-lg duration-900 transition-colors mt-15 border-2 w-60`}
    >

      {/* Logo */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`font-extrabold text-2xl mt-5 ${
          darkMode ? "text-white" : "text-gray-950"
        } tracking-wide`}
      >
        Dashboard
      </motion.h3>

      {/* Menu */}
      <div className="w-full px-3 mt-5 space-y-2 flex-none">
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
                className={`flex items-center gap-4 p-3 rounded-md font-semibold transition-all duration-300 ${
                  darkMode
                    ? "text-white hover:bg-gray-500 "
                    : // ? "bg-teal-600 text-gray-950 "
                    !darkMode
                    ? "text-black  hover:bg-gray-500"
                    : ""
                }`}
              >
                <Icon className="text-xl text-center " />
                {<span>{item.label}</span>}
              </NavLink>
            </motion.div>
          );
        })}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 6 * 0.05 }}
        >
          <NavLink
            to={"/"}
            onClick={handleLogout}
            className={`flex items-center gap-4 p-3 rounded-md font-semibold transition-all duration-300 mt-30 ${
              darkMode
                ? "text-white hover:bg-gray-500"
                : !darkMode
                ? "text-black  hover:bg-gray-500"
                : ""
            }`}
          >
            <FaUserLock className="text-xl text-center " />
            {<span>Logout</span>}
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
}
