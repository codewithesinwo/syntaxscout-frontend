import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaExclamationCircle,
  FaEllipsisV,
  FaSearch,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

// --- MOCK DATA FOR ADMIN ---

// 1. Enrollment Data (Bar Chart)
const enrollmentData = [
  { name: "Jan", students: 40 },
  { name: "Feb", students: 70 },
  { name: "Mar", students: 50 },
  { name: "Apr", students: 90 },
  { name: "May", students: 120 },
  { name: "Jun", students: 150 },
];

// 2. Course Category Distribution (Pie Chart)
const courseDistData = [
  { name: "Web Dev", value: 45 },
  { name: "Data Science", value: 25 },
  { name: "Cybersec", value: 20 },
  { name: "Mobile", value: 10 },
];
const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

// 3. Recent Users Table Data
const recentUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Student",
    status: "Active",
    date: "2025-01-20",
  },
  {
    id: 2,
    name: "Mark Smith",
    email: "mark@dev.com",
    role: "Instructor",
    status: "Active",
    date: "2025-01-19",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@test.com",
    role: "Student",
    status: "Inactive",
    date: "2025-01-18",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@amazon.com",
    role: "Student",
    status: "Banned",
    date: "2025-01-18",
  },
];

export default function AdminDashboard() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-8 bg-gray-50 min-h-screen text-gray-800 mt-16"
    >
      {/* --- HEADER --- */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Admin Control Center
          </h1>
          <p className="text-gray-500">
            Overview of platform performance and user management.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition">
            <FaSearch className="text-gray-400" />
            <span className="text-sm font-medium">Search Users</span>
          </button>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition">
            <FaPlus />
            <span className="text-sm font-medium">Create Course</span>
          </button>
        </div>
      </div>
      {/* --- STATS CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Students",
            value: "2,543",
            icon: FaUsers,
            color: "bg-blue-100 text-blue-600",
          },
          {
            title: "Active Instructors",
            value: "45",
            icon: FaChalkboardTeacher,
            color: "bg-purple-100 text-purple-600",
          },
          {
            title: "Total Revenue",
            value: "$124,500",
            icon: FaMoneyBillWave,
            color: "bg-green-100 text-green-600",
          },
          {
            title: "Pending Issues",
            value: "12",
            icon: FaExclamationCircle,
            color: "bg-red-100 text-red-600",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className={`p-4 rounded-full ${stat.color} text-xl`}>
              <stat.icon />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      [Image of Data Visualization Charts]
      {/* --- CHARTS SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Chart 1: Student Growth */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Monthly Student Enrollment
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  cursor={{ fill: "#F3F4F6" }}
                />
                <Bar
                  dataKey="students"
                  fill="#4F46E5"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Chart 2: Course Distribution */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Course Categories
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseDistData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {courseDistData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              {courseDistData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 text-xs text-gray-500"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {/* --- RECENT USER MANAGEMENT --- */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">
            Recent Registrations
          </h3>
          <button className="text-indigo-600 text-sm font-medium hover:underline">
            View All Users
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">User</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Date Joined</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {recentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {user.name}
                        </p>
                        <p className="text-gray-500 text-xs">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{user.role}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium 
                        ${
                          user.status === "Active" ?
                            "bg-green-100 text-green-700"
                          : user.status === "Inactive" ?
                            "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                        }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500">{user.date}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <FaEdit />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
