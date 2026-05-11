import React, { useState, useEffect } from "react";
import {
	Code,
	Trophy,
	Target,
	Zap,
	Clock,
	TrendingUp,
	Award,
	Flame,
	ChevronRight,
	CheckCircle2,
	XCircle,
	BarChart3,
	CalendarDays,
	Search,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
	const [loading, setLoading] = useState(true);

	// Mock data – replace with real API/context later
	const stats = {
		problemsSolved: 187,
		contestsParticipated: 14,
		currentStreak: 14,
		longestStreak: 42,
		rating: 1680,
		ratingChange: +78,
		globalRank: 1842,
		acceptanceRate: 68.4,
		hoursThisMonth: 87,
	};

	const recentSubmissions = [
		{
			title: "Longest Palindromic Substring",
			platform: "LeetCode",
			difficulty: "Medium",
			status: "Accepted",
			time: "2h ago",
			runtime: "12 ms",
			memory: "44.8 MB",
		},
		{
			title: "1849C – Make it Alternating",
			platform: "Codeforces",
			rating: 1600,
			status: "Accepted",
			time: "yesterday",
			points: "+128",
		},
		{
			title: "LRU Cache",
			platform: "LeetCode",
			difficulty: "Medium",
			status: "TLE",
			time: "4 days ago",
		},
		{
			title: "Weather Observation Station 18",
			platform: "HackerRank",
			status: "Accepted",
			time: "5 days ago",
		},
	];

	const nextContest = {
		name: "Codeforces Round 952 (Div. 2)",
		start: "March 05, 2026 19:35 WAT",
		duration: "2 hours",
		link: "https://codeforces.com/contest/952",
	};

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 800);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="min-h-screen bg-gray-950 text-gray-100">
			{/* Top bar – minimal */}
			<header className="sticky top-0 z-30 border-b border-gray-800 bg-gray-900/90 backdrop-blur-md mt-15">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
							C
						</div>
						<h1 className="text-xl font-semibold tracking-tight">
							Competitive Programming
						</h1>
					</div>

					<div className="flex items-center gap-5">
						<div className="flex items-center gap-2 text-sm">
							<Flame className="text-orange-400" size={18} />
							<span className="font-medium">{stats.currentStreak}</span>
							<span className="text-gray-500 text-xs">streak</span>
						</div>

						<div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/70 rounded-lg text-sm">
							<span className="font-medium text-cyan-300">
								#{stats.globalRank}
							</span>
							<span className="text-gray-500 text-xs">global</span>
						</div>

						<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-medium">
							DK
						</div>
					</div>
				</div>
			</header>

			{/* Main content – centered, no sidebar */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
				{/* Hero stats */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
					<Metric
						label="Solved"
						value={stats.problemsSolved}
						icon={Code}
						color="cyan"
					/>
					<Metric
						label="Rating"
						value={stats.rating}
						change={stats.ratingChange}
						icon={TrendingUp}
						color="emerald"
					/>
					<Metric
						label="Streak"
						value={`${stats.currentStreak}d`}
						icon={Flame}
						color="orange"
					/>
					<Metric
						label="Contests"
						value={stats.contestsParticipated}
						icon={Award}
						color="purple"
					/>
					<Metric
						label="Acceptance"
						value={`${stats.acceptanceRate}%`}
						icon={Target}
						color="blue"
					/>
					<Metric
						label="Hours"
						value={`${stats.hoursThisMonth}h`}
						icon={Clock}
						color="indigo"
					/>
				</div>

				{/* Recent submissions */}
				<section className="mb-12">
					<div className="flex items-center justify-between mb-5">
						<h2 className="text-2xl font-semibold flex items-center gap-3">
							<Code size={22} className="text-cyan-400" /> Recent Submissions
						</h2>
						<Link
							to="/submissions"
							className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1">
							View all <ChevronRight size={16} />
						</Link>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{recentSubmissions.map((sub) => (
							<div
								key={sub.title}
								className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
								<div className="font-medium mb-2">{sub.title}</div>
								<div className="text-sm text-gray-500 flex flex-wrap items-center gap-x-3 gap-y-1">
									<span>{sub.platform}</span>
									{sub.difficulty && (
										<span
											className={`px-2.5 py-0.5 rounded text-xs font-medium ${
												sub.difficulty.includes("Easy") ?
													"bg-emerald-900/40 text-emerald-300"
												: sub.difficulty.includes("Medium") ?
													"bg-amber-900/40 text-amber-300"
												:	"bg-rose-900/40 text-rose-300"
											}`}>
											{sub.difficulty}
										</span>
									)}
									{sub.rating && (
										<span className="text-gray-400">{sub.rating}</span>
									)}
									<span>• {sub.time}</span>
								</div>
								<div className="mt-3 flex items-center gap-3">
									<div
										className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
											sub.status === "Accepted" ?
												"bg-emerald-950/60 text-emerald-300 border border-emerald-800/40"
											:	"bg-rose-950/60 text-rose-300 border border-rose-800/40"
										}`}>
										{sub.status}
									</div>
									{sub.runtime && (
										<span className="text-xs text-gray-500">
											{sub.runtime} / {sub.memory}
										</span>
									)}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Next contest & quick actions */}
				<div className="grid md:grid-cols-2 gap-6">
					{/* Next contest */}
					<div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
						<h3 className="text-xl font-semibold mb-5 flex items-center gap-3">
							<CalendarDays className="text-teal-400" /> Next Contest
						</h3>
						<div className="space-y-4">
							<div>
								<p className="font-medium text-lg">{nextContest.name}</p>
								<p className="text-sm text-gray-400 mt-1">
									{nextContest.start}
								</p>
								<p className="text-sm text-gray-500">{nextContest.duration}</p>
							</div>
							<a
								href={nextContest.link}
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full py-3 bg-teal-600/80 hover:bg-teal-600 rounded-xl text-center font-medium transition-colors">
								Register / Preview
							</a>
						</div>
					</div>

					{/* Quick actions */}
					<div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
						<h3 className="text-xl font-semibold mb-5 flex items-center gap-3">
							<Zap className="text-amber-400" /> Quick Actions
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{[
								{ label: "Daily Challenge", desc: "LeetCode daily problem" },
								{ label: "Blind 75", desc: "Classic interview list" },
								{ label: "NeetCode 150", desc: "Curated problem set" },
								{ label: "System Design", desc: "Grokking / ByteByteGo" },
							].map((item, i) => (
								<button
									key={i}
									className="bg-gray-800/60 hover:bg-gray-800 border border-gray-700 hover:border-teal-700 rounded-xl p-4 text-left transition-all">
									<p className="font-medium">{item.label}</p>
									<p className="text-xs text-gray-500 mt-1">{item.desc}</p>
								</button>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

function Metric({ label, value, icon: Icon, color = "teal", change }) {
	return (
		<div
			className={`bg-gray-900/70 border border-gray-800 rounded-xl p-5 text-center hover:border-${color}-700/60 transition-colors`}>
			<div
				className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-${color}-950/50 flex items-center justify-center text-${color}-400`}>
				<Icon size={20} />
			</div>
			<div className="text-2xl font-bold">{value}</div>
			{change !== undefined && (
				<div
					className={`text-xs mt-1 ${change >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
					{change >= 0 ? "+" : ""}
					{change}
				</div>
			)}
			<div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
				{label}
			</div>
		</div>
	);
}
