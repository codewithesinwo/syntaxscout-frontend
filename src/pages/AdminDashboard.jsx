import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  UserPlus,
  BookOpen,
  CreditCard,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Students", value: "12,478", trend: "+4.2%", up: true },
    { label: "Teachers", value: "478", trend: "+1.1%", up: true },
    { label: "Parents", value: "8,908", trend: "-0.6%", up: false },
    { label: "Earnings", value: "$42.8k", trend: "+8.9%", up: true },
  ];

  return (
    <div className="space-y-8 p-6 bg-slate-100 min-h-screen">
      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>

            <div className="flex items-center justify-between mt-2">
              <h2 className="text-3xl font-semibold">{stat.value}</h2>

              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.up ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {stat.up ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
                {stat.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EARNINGS + CALENDAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Earnings Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-6">Monthly Earnings</h3>

          <div className="h-64 flex items-end gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${40 + i * 5}%` }}
                transition={{ delay: i * 0.05 }}
                className="flex-1 bg-indigo-500 rounded-t-lg"
              />
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Events Calendar</h3>

          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {Array.from({ length: 31 }).map((_, i) => (
              <div
                key={i}
                className={`p-2 rounded-full cursor-pointer ${
                  i === 18 ? "bg-indigo-500 text-white" : "hover:bg-slate-100"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-4 text-sm">
            <li className="flex justify-between">
              <span>New student registered</span>
              <span className="text-slate-400">2 min ago</span>
            </li>
            <li className="flex justify-between">
              <span>Teacher profile updated</span>
              <span className="text-slate-400">1 hr ago</span>
            </li>
            <li className="flex justify-between">
              <span>Exam results published</span>
              <span className="text-slate-400">Yesterday</span>
            </li>
          </ul>
        </div>

        {/* Attendance */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
          <h3 className="font-semibold mb-4">Attendance Rate</h3>

          <div className="relative w-40 h-40 rounded-full border-8 border-indigo-500 flex items-center justify-center">
            <span className="text-3xl font-bold">84%</span>
          </div>

          <p className="mt-4 text-slate-500">Overall Students</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Quick Actions</h3>

          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600">
              <UserPlus size={18} /> Add Student
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-100 hover:bg-slate-200">
              <BookOpen size={18} /> Create Course
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-100 hover:bg-slate-200">
              <CreditCard size={18} /> Record Payment
            </button>
          </div>
        </div>
      </div>

      {/* PAYMENTS TABLE */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4">Recent Payments</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr>
                <th className="pb-3">Student</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {[
                { name: "John Doe", amount: "$250", status: "Paid" },
                { name: "Mary Smith", amount: "$180", status: "Pending" },
                { name: "Samuel Green", amount: "$300", status: "Paid" },
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="py-3">{row.name}</td>
                  <td className="py-3">{row.amount}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        row.status === "Paid"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 text-slate-500">Today</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
