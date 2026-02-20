import React from "react";
import {
  Users,
  BookOpen,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  Activity as ActivityIcon,
  MoreVertical,
  ExternalLink,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Jan", users: 400, revenue: 2400 },
  { name: "Feb", users: 300, revenue: 1398 },
  { name: "Mar", users: 200, revenue: 9800 },
  { name: "Apr", users: 278, revenue: 3908 },
  { name: "May", users: 189, revenue: 4800 },
  { name: "Jun", users: 239, revenue: 3800 },
];

const stats = [
  {
    label: "Total Users",
    value: "12,842",
    icon: <Users className="text-blue-400" size={20} />,
    trend: "+12.5%",
    positive: true,
  },
  {
    label: "Active Courses",
    value: "48",
    icon: <BookOpen className="text-indigo-400" size={20} />,
    trend: "+3",
    positive: true,
  },
  {
    label: "Monthly Revenue",
    value: "$14,200",
    icon: <DollarSign className="text-emerald-400" size={20} />,
    trend: "-2.4%",
    positive: false,
  },
  {
    label: "Completion Rate",
    value: "78%",
    icon: <TrendingUp className="text-purple-400" size={20} />,
    trend: "+4.2%",
    positive: true,
  },
];

const recentActivities = [
  {
    id: 1,
    user: "Alex Johnson",
    action: "Enrolled in React Masterclass",
    time: "2 mins ago",
    status: "success",
  },
  {
    id: 2,
    user: "Sarah Williams",
    action: "Completed Module: Redux Patterns",
    time: "15 mins ago",
    status: "success",
  },
  {
    id: 3,
    user: "Mike Peters",
    action: "Requested course refund",
    time: "1 hour ago",
    status: "pending",
  },
];

const recentEnrollments = [
  {
    id: "ENR-901",
    student: "Dianne Russell",
    email: "dianne.r@example.com",
    course: "JavaScript Mastery",
    amount: "$89.00",
    date: "Oct 24, 2023",
    status: "Completed",
    image: "https://i.pravatar.cc/150?u=dianne"
  },
  {
    id: "ENR-902",
    student: "Guy Hawkins",
    email: "guy.h@example.com",
    course: "Advanced React Patterns",
    amount: "$120.00",
    date: "Oct 23, 2023",
    status: "Processing",
    image: "https://i.pravatar.cc/150?u=guy"
  },
  {
    id: "ENR-903",
    student: "Esther Howard",
    email: "esther.h@example.com",
    course: "UI/UX Fundamentals",
    amount: "$55.00",
    date: "Oct 22, 2023",
    status: "Completed",
    image: "https://i.pravatar.cc/150?u=esther"
  },
];

export default function AdminDashboard() {
  return (
    <div className="p-4 mb-15 md:p-8 space-y-8 bg-gray-950 min-h-screen text-gray-100 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            Welcome back, Admin. Here's a summary of your platform's
            performance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
            <Clock size={14} /> Updated 5m ago
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-900/50 border border-white/10 p-6 rounded-2xl hover:border-indigo-500/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-950 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div
                className={`flex items-center gap-0.5 text-[11px] font-bold px-2 py-1 rounded-md ${
                  stat.positive ?
                    "text-emerald-400 bg-emerald-400/10"
                  : "text-rose-400 bg-rose-400/10"
                }`}
              >
                {stat.trend}
                {stat.positive ?
                  <ArrowUpRight size={12} />
                : <ArrowDownRight size={12} />}
              </div>
            </div>
            <h3 className="text-gray-500 text-xs font-black uppercase tracking-widest">
              {stat.label}
            </h3>
            <p className="text-2xl font-bold mt-1 text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Analytics & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-gray-900/50 border border-white/10 p-6 rounded-3xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-white">Revenue Growth</h3>
              <p className="text-xs text-gray-500 font-medium">
                Projected vs Actual Earnings
              </p>
            </div>
            <select className="bg-gray-950 border border-white/10 rounded-xl px-3 py-1.5 text-xs font-bold text-gray-400 outline-none focus:ring-1 focus:ring-indigo-500">
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          </div>

          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="4 4"
                  stroke="#ffffff05"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="#475569"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="#475569"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  cursor={{ stroke: "#6366f1", strokeWidth: 2 }}
                  contentStyle={{
                    backgroundColor: "#030712",
                    border: "1px solid #ffffff10",
                    borderRadius: "12px",
                    fontSize: "12px",
                  }}
                  itemStyle={{ color: "#818cf8", fontWeight: "bold" }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#colorRev)"
                  strokeWidth={4}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-gray-900/50 border border-white/10 p-6 rounded-3xl flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <ActivityIcon size={18} className="text-indigo-400" />
            <h3 className="text-lg font-bold text-white">Platform Activity</h3>
          </div>

          <div className="space-y-6 flex-1">
            {recentActivities.map((activity, idx) => (
              <div key={activity.id} className="flex gap-4 group">
                <div className="relative flex flex-col items-center">
                  <div
                    className={`z-10 h-9 w-9 rounded-xl flex items-center justify-center border border-white/5 shadow-lg ${
                      activity.status === "success" ?
                        "bg-emerald-500/10"
                      : "bg-amber-500/10"
                    }`}
                  >
                    {activity.status === "success" ?
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    : <Clock size={16} className="text-amber-500" />}
                  </div>
                  {idx !== recentActivities.length - 1 && (
                    <div className="w-[1px] h-full bg-white/5 absolute top-9" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-medium text-gray-300 leading-tight">
                    <span className="text-white font-bold">
                      {activity.user}
                    </span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-[11px] font-bold text-gray-500 mt-1.5 uppercase tracking-tighter">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-3 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all border border-white/5 rounded-xl hover:bg-white/5 active:scale-95">
            View All Logs
          </button>
        </div>
      </div>

      {/* Recent Enrollments Table */}
      <div className="bg-gray-900/50 border border-white/10 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-white">Recent Enrollments</h3>
            <p className="text-xs text-gray-500 font-medium mt-1">Detailed list of the latest student purchases</p>
          </div>
          <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
            View All <ExternalLink size={14} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/2 text-[10px] font-black text-gray-500 uppercase tracking-[0.15em]">
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4 text-center">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentEnrollments.map((enrollment) => (
                <tr key={enrollment.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={enrollment.image} alt="" className="w-9 h-9 rounded-full object-cover border border-white/10" />
                      <div>
                        <p className="text-sm font-bold text-white leading-none">{enrollment.student}</p>
                        <p className="text-xs text-gray-500 mt-1">{enrollment.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-300">{enrollment.course}</p>
                    <p className="text-[10px] text-gray-600 font-bold mt-0.5">{enrollment.id}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-bold text-white">{enrollment.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                      enrollment.status === "Completed" 
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                        : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${enrollment.status === "Completed" ? "bg-emerald-400" : "bg-amber-400"}`} />
                      {enrollment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
