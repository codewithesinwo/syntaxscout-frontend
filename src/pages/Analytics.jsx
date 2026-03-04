import React, { useState } from "react";
import {
  TrendingUp,
  Users,
  BookOpen,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Calendar,
  ChevronDown,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

// Sample data (replace with real API data in production)
const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 19000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 28000 },
  { month: "Jun", revenue: 32000 },
  { month: "Jul", revenue: 35000 },
  { month: "Aug", revenue: 30000 },
  { month: "Sep", revenue: 38000 },
  { month: "Oct", revenue: 42000 },
  { month: "Nov", revenue: 45000 },
  { month: "Dec", revenue: 48000 },
];

const stats = [
  {
    label: "Total Revenue",
    value: "$48,250.00",
    change: "+18.3%",
    trendingUp: true,
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Active Students",
    value: "3,120",
    change: "+22.7%",
    trendingUp: true,
    icon: Users,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    label: "Courses Sold",
    value: "187",
    change: "+9.4%",
    trendingUp: true,
    icon: BookOpen,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
  {
    label: "Avg. Completion Rate",
    value: "78%",
    change: "+6.8%",
    trendingUp: true,
    icon: Activity,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

const recentSales = [
  {
    id: 1,
    buyer: "Aisha Bello",
    course: "Advanced React & TS",
    amount: 89,
    time: "2 min ago",
    avatar: "AB",
  },
  {
    id: 2,
    buyer: "Chinedu Okeke",
    course: "Next.js 15 Mastery",
    amount: 129,
    time: "14 min ago",
    avatar: "CO",
  },
  {
    id: 3,
    buyer: "Fatima Yusuf",
    course: "UI/UX Design Pro",
    amount: 99,
    time: "45 min ago",
    avatar: "FY",
  },
  {
    id: 4,
    buyer: "Tunde Adebayo",
    course: "Full-Stack Bootcamp",
    amount: 199,
    time: "1 hr ago",
    avatar: "TA",
  },
  {
    id: 5,
    buyer: "Ngozi Eze",
    course: "Python for Data",
    amount: 79,
    time: "3 hrs ago",
    avatar: "NE",
  },
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("30days");

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Platform Analytics
          </h1>
          <p className="text-gray-400 mt-2">
            Overview of revenue, student growth, and engagement • Updated live
          </p>
        </div>

        <div className="flex items-center gap-2 bg-gray-900/80 border border-gray-800 rounded-xl p-1.5 backdrop-blur-sm">
          {["7days", "30days", "90days", "all"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                timeRange === range ?
                  "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-gray-400 hover:text-white hover:bg-gray-800/60"
              }`}
            >
              {range === "7days" ?
                "7 Days"
              : range === "30days" ?
                "30 Days"
              : range === "90days" ?
                "90 Days"
              : "All Time"}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-6 hover:border-indigo-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-5">
              <div className={`p-4 rounded-2xl ${stat.bg}`}>
                <stat.icon size={28} className={stat.color} />
              </div>
              <div
                className={`flex items-center gap-1.5 text-sm font-bold ${stat.trendingUp ? "text-emerald-400" : "text-rose-400"}`}
              >
                {stat.change}
                {stat.trendingUp ?
                  <ArrowUpRight size={16} />
                : <ArrowDownRight size={16} />}
              </div>
            </div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
              {stat.label}
            </p>
            <h3 className="text-3xl font-black text-white group-hover:text-indigo-400 transition-colors">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>

      {/* Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Area Chart */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              Revenue Trend <TrendingUp size={20} className="text-indigo-400" />
            </h3>
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <Calendar size={16} /> {timeRange.replace("days", " Days")}
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "12px",
                    color: "#f3f4f6",
                  }}
                  labelStyle={{ color: "#fff" }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Sales */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-6">
            Recent Transactions
          </h3>
          <div className="space-y-5 flex-1 overflow-y-auto">
            {recentSales.map((sale) => (
              <div key={sale.id} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-teal-500/20 border border-indigo-500/30 flex items-center justify-center text-sm font-bold text-indigo-300 shrink-0">
                  {sale.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white truncate">
                    {sale.buyer}
                  </p>
                  <p className="text-xs text-gray-500">{sale.course}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-emerald-400">
                    +${sale.amount}
                  </p>
                  <p className="text-xs text-gray-600">{sale.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold rounded-xl border border-gray-700 transition-all flex items-center justify-center gap-2">
            View Full Report <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Footer CTA or extra stats if needed */}
      <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-800">
        Platform powered by real-time insights • Lagos, NG • March 2026
      </div>
    </div>
  );
}
