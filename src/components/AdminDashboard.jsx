import {
  Users,
  BookOpen,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
} from "lucide-react";
import {
  BarChart,
  Bar,
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
    icon: <Users className="text-blue-500" size={20} />,
    trend: "+12.5%",
    positive: true,
  },
  {
    label: "Active Courses",
    value: "48",
    icon: <BookOpen className="text-indigo-500" size={20} />,
    trend: "+3",
    positive: true,
  },
  {
    label: "Monthly Revenue",
    value: "$14,200",
    icon: <DollarSign className="text-emerald-500" size={20} />,
    trend: "-2.4%",
    positive: false,
  },
  {
    label: "Completion Rate",
    value: "78%",
    icon: <TrendingUp className="text-purple-500" size={20} />,
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

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-8 bg-gray-950 min-h-screen text-gray-100">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-gray-400">
          Welcome back, Admin. Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-white/10 p-6 rounded-2xl shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-white/5 rounded-lg">{stat.icon}</div>
              <span
                className={`flex items-center text-xs font-medium ${stat.positive ? "text-emerald-400" : "text-rose-400"}`}
              >
                {stat.trend}
                {stat.positive ?
                  <ArrowUpRight size={14} />
                : <ArrowDownRight size={14} />}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-gray-900 border border-white/10 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-6">Revenue Growth</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#ffffff10"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #ffffff10",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#fff" }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#colorRev)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-gray-900 border border-white/10 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                <div className="mt-1">
                  {activity.status === "success" ?
                    <CheckCircle2 size={18} className="text-emerald-500" />
                  : <Clock size={18} className="text-amber-500" />}
                </div>
                <div>
                  <p className="text-sm font-medium">
                    <span className="text-indigo-400">{activity.user}</span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors border border-white/5 rounded-lg hover:bg-white/5">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
