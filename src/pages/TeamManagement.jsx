import React, { useState, useEffect } from "react";
import {
  Users,
  UserPlus,
  UserCheck,
  UserX,
  Shield,
  Crown,
  MessageSquare,
  Mail,
  Calendar,
  BarChart3,
  Activity,
  MoreHorizontal,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";

export default function TeamManagement() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => setIsLoading(false), 1600);
  }, []);

  const teamStats = {
    total: 24,
    active: 19,
    pending: 3,
    inactive: 2,
    admins: 4,
    onlineNow: 11,
  };

  const teamMembers = [
    {
      id: 1,
      name: "Esther Adebayo",
      role: "Product Lead",
      status: "active",
      online: true,
      avatar: "EA",
      lastActive: "just now",
      department: "Product",
    },
    {
      id: 2,
      name: "Jamal Okoye",
      role: "Backend Engineer",
      status: "active",
      online: true,
      avatar: "JO",
      lastActive: "5m ago",
      department: "Engineering",
    },
    {
      id: 3,
      name: "Temi Alabi",
      role: "UI/UX Designer",
      status: "active",
      online: false,
      avatar: "TA",
      lastActive: "32m ago",
      department: "Design",
    },
    {
      id: 4,
      name: "David Chukwu",
      role: "DevOps Engineer",
      status: "pending",
      online: false,
      avatar: "DC",
      lastActive: "—",
      department: "Engineering",
    },
    {
      id: 5,
      name: "Aisha Mohammed",
      role: "Marketing Manager",
      status: "active",
      online: true,
      avatar: "AM",
      lastActive: "now",
      department: "Marketing",
    },
    {
      id: 6,
      name: "Kemi Ogunleye",
      role: "Frontend Developer",
      status: "active",
      online: true,
      avatar: "KO",
      lastActive: "10m ago",
      department: "Engineering",
    },
  ];

  const filteredMembers = teamMembers.filter((member) => {
    if (activeTab === "all") return true;
    if (activeTab === "active") return member.status === "active";
    if (activeTab === "pending") return member.status === "pending";
    if (activeTab === "inactive") return member.status === "inactive";
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100 pb-16 pt-20 md:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Team Management
            </h1>
            <p className="text-gray-400 mt-2">
              Manage team members, roles, permissions, and activity
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-500 rounded-xl font-medium transition-all shadow-lg shadow-teal-900/30">
              <UserPlus size={18} /> Invite Member
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-indigo-600/80 hover:bg-indigo-600 rounded-xl font-medium transition-all">
              <Crown size={18} /> Manage Roles
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard
            icon={<Users />}
            label="Total Members"
            value={teamStats.total}
          />
          <StatCard
            icon={<UserCheck />}
            label="Active"
            value={teamStats.active}
            color="emerald"
          />
          <StatCard
            icon={<Clock />}
            label="Online Now"
            value={teamStats.onlineNow}
            color="teal"
          />
          <StatCard
            icon={<UserX />}
            label="Pending"
            value={teamStats.pending}
            color="amber"
          />
          <StatCard
            icon={<Shield />}
            label="Admins"
            value={teamStats.admins}
            color="indigo"
          />
          <StatCard
            icon={<Activity />}
            label="Last 7 days activity"
            value="+18%"
            color="cyan"
          />
        </div>

        {/* Tabs & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["All", "Active", "Pending", "Inactive"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.toLowerCase() ?
                    "bg-teal-600 text-white shadow-md"
                  : "bg-gray-900/60 border border-gray-800 hover:border-teal-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Team Table / Cards */}
        {isLoading ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <MemberSkeleton key={i} />
            ))}
          </div>
        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-6">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        }
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// Reusable Components
// ────────────────────────────────────────────────────────────────

function StatCard({ icon, label, value, color = "teal" }) {
  return (
    <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-5 flex flex-col items-center text-center hover:border-teal-700/50 transition-all">
      <div
        className={`p-3 rounded-xl bg-${color}-950/50 text-${color}-400 mb-3`}
      >
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

function MemberCard({ member }) {
  const statusColor =
    {
      active: "emerald",
      pending: "amber",
      inactive: "rose",
    }[member.status] || "gray";

  return (
    <div className="group bg-gray-900/70 border border-gray-800 rounded-2xl p-6 hover:border-teal-700/60 hover:shadow-xl hover:shadow-teal-950/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-black font-bold text-lg ring-2 ring-teal-500/30 group-hover:ring-teal-400/60 transition-all`}
          >
            {member.avatar}
          </div>
          <div>
            <h3 className="font-semibold text-lg group-hover:text-teal-300 transition-colors">
              {member.name}
            </h3>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        </div>

        {member.online && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            Online
          </div>
        )}
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Department</span>
          <span className="font-medium">{member.department}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Status</span>
          <span
            className={`font-medium flex items-center gap-1.5 text-${statusColor}-400`}
          >
            {member.status === "active" ?
              <CheckCircle2 size={16} />
            : <XCircle size={16} />}
            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Last active</span>
          <span className="font-medium">{member.lastActive}</span>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-gray-800 flex justify-between items-center">
        <div className="flex gap-2">
          <button
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            title="Message"
          >
            <MessageSquare
              size={18}
              className="text-gray-400 hover:text-teal-400"
            />
          </button>
          <button
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            title="Schedule"
          >
            <Calendar size={18} className="text-gray-400 hover:text-teal-400" />
          </button>
        </div>

        <button className="flex items-center gap-1.5 text-sm text-teal-400 hover:text-teal-300 font-medium">
          Manage <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function MemberSkeleton() {
  return (
    <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6 animate-pulse">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-800" />
          <div className="space-y-2">
            <div className="h-5 bg-gray-800 rounded w-40" />
            <div className="h-4 bg-gray-800 rounded w-32" />
          </div>
        </div>
        <div className="h-5 bg-gray-800 rounded w-16" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="h-4 bg-gray-800 rounded w-24" />
          <div className="h-4 bg-gray-800 rounded w-20" />
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-800 rounded w-20" />
          <div className="h-4 bg-gray-800 rounded w-28" />
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-800 rounded w-24" />
          <div className="h-4 bg-gray-800 rounded w-16" />
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-gray-800 flex justify-between">
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-800 rounded-lg" />
          <div className="w-8 h-8 bg-gray-800 rounded-lg" />
        </div>
        <div className="h-8 bg-gray-800 rounded w-24" />
      </div>
    </div>
  );
}
