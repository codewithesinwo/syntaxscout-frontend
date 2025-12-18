import React from "react";
import { motion } from "framer-motion";
import { Settings, LogOut } from "lucide-react";

export default function AdminDashboardSideShow() {
  const menu = [
    "Dashboard",
    "Students",
    "Teachers",
    "Attendance",
    "Courses",
    "Exam",
    "Payment",
  ];

  return (
    <div className="w-64 bg-slate-800 text-white flex flex-col">
      <div className="p-6 text-xl font-bold tracking-wide">SCHOOL</div>

      <nav className="flex-1 px-4 space-y-2">
        {menu.map((item) => (
          <motion.div
            key={item}
            whileHover={{ x: 6 }}
            className="px-4 py-3 rounded-lg cursor-pointer hover:bg-slate-700"
          >
            {item}
          </motion.div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700 space-y-3">
        <div className="flex items-center gap-2 cursor-pointer hover:text-slate-300">
          <Settings size={18} />
          <span>Settings</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-slate-300">
          <LogOut size={18} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
