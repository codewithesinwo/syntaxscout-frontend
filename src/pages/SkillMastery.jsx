import React from "react";
import {
  Compass,
  Map,
  ChevronRight,
  Lock,
  CheckCircle2,
  Star,
  Layers,
  Zap,
  Target,
  Trophy,
  Crown,
  TrendingUp,
} from "lucide-react";

const learningPaths = [
  {
    id: 1,
    title: "Frontend Architect",
    level: "Intermediate",
    progress: 65,
    modules: 12,
    status: "active",
    description:
      "Master React, Performance Optimization, and Advanced CSS Architectures.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: 2,
    title: "Backend Specialist",
    level: "Beginner",
    progress: 10,
    modules: 15,
    status: "active",
    description:
      "Deep dive into Node.js, System Design, and Database Management.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Fullstack Mastery",
    level: "Advanced",
    progress: 0,
    modules: 24,
    status: "locked",
    description:
      "Unlock this path by completing both Frontend and Backend foundations.",
    color: "from-purple-500 to-pink-500",
  },
];

const leaderboardData = [
  { rank: 1, name: "CyberNinja", xp: 12450, avatar: "CN" },
  { rank: 2, name: "ReactQueen", xp: 11200, avatar: "RQ" },
  { rank: 3, name: "DevOps_Dan", xp: 9800, avatar: "DD" },
  { rank: 14, name: "You (Alex)", xp: 2450, avatar: "AX", isUser: true },
];

export default function SkillMastery() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tighter uppercase italic">
              Skill Mastery
            </h1>
            <p className="text-gray-400">
              Level up your stack and outrank the competition.
            </p>
          </div>

          <div className="flex items-center gap-6 bg-gray-900/40 p-5 rounded-3xl border border-gray-800 backdrop-blur-md">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold"
                >
                  U{i}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-black bg-teal-500 flex items-center justify-center text-[10px] font-bold text-black">
                +42
              </div>
            </div>
            <div className="h-10 w-[1px] bg-gray-800" />
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Global Rank
              </p>
              <p className="text-xl font-black text-white italic">#1,432</p>
            </div>
          </div>
        </div>

        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <SkillStat icon={<Layers />} label="Tech Stack" value="12" />
          <SkillStat icon={<Zap />} label="Streak" value="8 Days" />
          <SkillStat icon={<Star />} label="Badges" value="03" />
          <SkillStat
            icon={<Trophy className="text-yellow-500" />}
            label="XP Points"
            value="2,450"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- Left: Learning Paths (2 Cols) --- */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Compass className="text-teal-500" size={20} /> Active Roadmaps
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {learningPaths.map((path) => (
                <PathCard key={path.id} path={path} />
              ))}
            </div>
          </div>

          {/* --- Right: Leaderboard --- */}
          <aside className="space-y-6">
            <div className="bg-[#080808] border border-gray-800 rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Crown size={80} />
              </div>

              <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                <Trophy className="text-yellow-500" size={20} /> Leaderboard
              </h2>

              <div className="space-y-3">
                {leaderboardData.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${user.isUser ? "bg-teal-500/10 border-teal-500/30" : "bg-gray-900/30 border-gray-800/50 hover:bg-gray-800"}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-black w-5 ${user.rank <= 3 ? "text-yellow-500" : "text-gray-500"}`}
                      >
                        {user.rank}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${user.isUser ? "bg-teal-500 text-black" : "bg-gray-800 text-white"}`}
                      >
                        {user.avatar}
                      </div>
                      <span
                        className={`text-sm font-bold ${user.isUser ? "text-white" : "text-gray-300"}`}
                      >
                        {user.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-teal-400">
                        {user.xp.toLocaleString()}
                      </p>
                      <p className="text-[8px] text-gray-600 uppercase font-bold tracking-tighter">
                        Total XP
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 border border-gray-800 rounded-xl text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:bg-white hover:text-black transition-all">
                View Full Rankings
              </button>
            </div>

            {/* Mastery Insight */}
            <div className="bg-gradient-to-br from-teal-900/20 to-black border border-gray-800 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-teal-400" size={20} />
                <h3 className="font-bold text-sm">Learning Insight</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed italic">
                "You're learning 20% faster than last month. Completing 'Backend
                Specialist' will put you in the top 10% of users."
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function PathCard({ path }) {
  const isLocked = path.status === "locked";

  return (
    <div
      className={`relative group overflow-hidden bg-[#0a0a0a] border ${isLocked ? "border-gray-900 opacity-60" : "border-gray-800 hover:border-teal-500/50"} rounded-3xl transition-all duration-300`}
    >
      <div className="flex flex-col md:flex-row">
        <div
          className={`w-full md:w-2 h-2 md:h-auto bg-gradient-to-b ${path.color}`}
        />

        <div className="p-6 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <h3 className="text-xl font-bold">{path.title}</h3>
              {isLocked ?
                <Lock size={16} className="text-gray-600" />
              : <CheckCircle2 size={16} className="text-teal-500" />}
            </div>
            <p className="text-gray-500 text-xs max-w-sm leading-relaxed">
              {path.description}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gray-600">
                <Map size={12} /> {path.modules} Modules
              </span>
              <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gray-600">
                <Target size={12} /> {path.level}
              </span>
            </div>
          </div>

          <div className="w-full md:w-56 space-y-4">
            {!isLocked ?
              <>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">
                    Progress
                  </span>
                  <span className="text-sm font-black text-teal-400">
                    {path.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${path.color} transition-all duration-1000`}
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
                <button className="w-full py-2.5 bg-white text-black rounded-xl text-[10px] font-black uppercase hover:bg-teal-400 transition-all flex items-center justify-center gap-2">
                  Continue <ChevronRight size={14} />
                </button>
              </>
            : <div className="py-4 px-4 bg-gray-950 rounded-2xl border border-gray-900 text-center">
                <p className="text-[9px] font-bold text-gray-700 uppercase">
                  Finish Foundations First
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillStat({ icon, label, value }) {
  return (
    <div className="bg-[#0a0a0a] border border-gray-800 p-4 rounded-2xl flex items-center gap-4 group hover:bg-gray-900/50 transition-colors">
      <div className="p-2.5 bg-gray-900 rounded-lg text-teal-500 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <div>
        <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">
          {label}
        </p>
        <p className="text-lg font-black">{value}</p>
      </div>
    </div>
  );
}
