import React from "react";
import {
  TrendingUp,
  Users,
  BookOpen,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Calendar,
} from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "$42,850.00",
    change: "+12.5%",
    trendingUp: true,
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Active Students",
    value: "2,450",
    change: "+18.2%",
    trendingUp: true,
    icon: Users,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    label: "Course Sales",
    value: "124",
    change: "-4.1%",
    trendingUp: false,
    icon: BookOpen,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    label: "Avg. Engagement",
    value: "84%",
    change: "+5.4%",
    trendingUp: true,
    icon: Activity,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-950 p-6 space-y-8">
      {/* Header with Date Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Platform Insights
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Real-time performance metrics and student activity.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-gray-900 border border-white/10 p-1.5 rounded-xl self-start md:self-center">
          <button className="px-4 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-lg shadow-lg shadow-indigo-600/20 transition-all">
            Last 30 Days
          </button>
          <button className="px-4 py-1.5 text-xs font-bold text-gray-400 hover:text-white transition-all">
            All Time
          </button>
        </div>
      </div>

      {/* Stats Grid: iPhone 6s (1 col) -> Tablet (2 col) -> Desktop (4 col) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-white/10 p-6 rounded-3xl hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-bold ${stat.trendingUp ? "text-emerald-400" : "text-rose-400"}`}
              >
                {stat.change}
                {stat.trendingUp ?
                  <ArrowUpRight size={14} />
                : <ArrowDownRight size={14} />}
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-gray-900 border border-white/10 rounded-3xl p-6 h-[350px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Revenue Growth</h3>
            <TrendingUp size={20} className="text-gray-500" />
          </div>
          <div className="flex-1 flex items-end gap-2 px-2">
            {/* Simple CSS Bar Chart for Admin View */}
            {[40, 70, 45, 90, 65, 80, 95, 60, 85, 40, 75, 90].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-indigo-500/20 hover:bg-indigo-500 rounded-t-lg transition-all duration-500 cursor-pointer relative group/bar"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-950 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                    ${height}k
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="flex justify-between mt-4 px-1 text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
          </div>
        </div>

        {/* Recent Activity: iPhone 6s Friendly */}
        <div className="bg-gray-900 border border-white/10 rounded-3xl p-6 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Recent Sales</h3>
          <div className="space-y-6 flex-1 overflow-y-auto pr-1">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  JD
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">
                    John Doe purchased React course
                  </p>
                  <p className="text-[10px] text-gray-500">2 minutes ago</p>
                </div>
                <div className="ml-auto text-xs font-bold text-emerald-400">
                  +$89
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl border border-white/5 transition-all">
            View All Reports
          </button>
        </div>
      </div>
    </div>
  );
}
