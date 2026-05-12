// import React, { useState, useEffect } from "react";
// import {
// 	BookOpen,
// 	Trophy,
// 	Target,
// 	Zap,
// 	Clock,
// 	TrendingUp,
// 	Award,
// 	CheckCircle,
// 	BarChart2,
// } from "lucide-react";
// import DashboardHeader from "./dashboard/DashboardHeader";
// import MetricCard from "./dashboard/MetricCard";
// import SectionHeader from "./dashboard/SectionHeader";
// import CourseCard from "./dashboard/CourseCard";
// import ActivityRow from "./dashboard/ActivityRow";
// import RecommendCard from "./dashboard/RecommendCard";
// import BadgeCard from "./dashboard/BadgeCard";
// import HeroSection from "./dashboard/HeroSection";
// import MobileNav from "./dashboard/MobileNav";
// import {
// 	enrolledCourses,
// 	recentActivity,
// 	recommendations,
// 	achievements,
// } from "./dashboard/constants";

// // Add keyframe animations
// const style = document.createElement("style");
// style.innerHTML = `
// 	@keyframes slideInUp {
// 		from {
// 			opacity: 0;
// 			transform: translateY(20px);
// 		}
// 		to {
// 			opacity: 1;
// 			transform: translateY(0);
// 		}
// 	}

// 	@keyframes fadeIn {
// 		from { opacity: 0; }
// 		to { opacity: 1; }
// 	}

// 	@keyframes pulse {
// 		0%, 100% { opacity: 1; }
// 		50% { opacity: 0.5; }
// 	}

// 	.animate-slide-in-up {
// 		animation: slideInUp 0.5s ease-out;
// 	}

// 	.animate-fade-in {
// 		animation: fadeIn 0.3s ease-out;
// 	}

// 	@media (max-width: 640px) {
// 		body {
// 			overflow-x: hidden;
// 		}
// 	}
// `;
// document.head.appendChild(style);

// // ─── Main component ───────────────────────────────────────────────────────────
// export default function Dashboard() {
// 	const [stats, setStats] = useState({
// 		coursesEnrolled: 3,
// 		coursesCompleted: 7,
// 		currentStreak: 14,
// 		totalHours: 87,
// 		certificates: 5,
// 		avgScore: 91,
// 		currentProgress: 72,
// 	});

// 	const [greeting, setGreeting] = useState("Good morning");

// 	useEffect(() => {
// 		const h = new Date().getHours();
// 		if (h < 12) setGreeting("Good morning");
// 		else if (h < 17) setGreeting("Good afternoon");
// 		else setGreeting("Good evening");
// 	}, []);

// 	// Simulate live streak update
// 	useEffect(() => {
// 		const t = setInterval(() => {
// 			setStats((prev) => ({
// 				...prev,
// 				currentStreak:
// 					Math.random() > 0.9 ?
// 						Math.min(60, prev.currentStreak + 1)
// 					:	prev.currentStreak,
// 			}));
// 		}, 5000);
// 		return () => clearInterval(t);
// 	}, []);

// 	return (
// 		<div
// 			style={{
// 				minHeight: "100vh",
// 				backgroundColor: "#0a0f1e",
// 				color: "#e2e8f0",
// 			}}>
// 			{/* ── Header ─────────────────────────────────────────────────────────── */}
// 			<DashboardHeader stats={stats} />

// 			{/* ── Mobile Navigation ──────────────────────────────────────────────── */}
// 			<MobileNav stats={stats} />

// 			<main
// 				style={{
// 					maxWidth: 1280,
// 					margin: "0 auto",
// 					padding: "clamp(1.5rem, 4vw, 2.5rem)",
// 					paddingBottom: "clamp(3rem, 8vw, 5rem)",
// 				}}>
// 				{/* ── Welcome hero ─────────────────────────────────────────────────── */}
// 				<div className="animate-fade-in">
// 					<HeroSection greeting={greeting} stats={stats} />
// 				</div>

// 				{/* ── Stats row ────────────────────────────────────────────────────– */}
// 				<div
// 					style={{
// 						display: "grid",
// 						gridTemplateColumns:
// 							"repeat(auto-fit, minmax(clamp(100px, 15vw, 130px), 1fr))",
// 						gap: "clamp(12px, 2vw, 16px)",
// 						marginBottom: "2.5rem",
// 					}}>
// 					<MetricCard
// 						label="Enrolled"
// 						value={stats.coursesEnrolled}
// 						icon={BookOpen}
// 						color="indigo"
// 					/>
// 					<MetricCard
// 						label="Completed"
// 						value={stats.coursesCompleted}
// 						icon={CheckCircle}
// 						color="emerald"
// 					/>
// 					<MetricCard
// 						label="Day Streak"
// 						value={`${stats.currentStreak}d`}
// 						icon={Award}
// 						color="orange"
// 					/>
// 					<MetricCard
// 						label="Hours Learned"
// 						value={`${stats.totalHours}h`}
// 						icon={Clock}
// 						color="blue"
// 					/>
// 					<MetricCard
// 						label="Certificates"
// 						value={stats.certificates}
// 						icon={Trophy}
// 						color="purple"
// 					/>
// 					<MetricCard
// 						label="Avg. Score"
// 						value={`${stats.avgScore}%`}
// 						icon={Target}
// 						color="cyan"
// 					/>
// 				</div>

// 				{/* ── Continue Learning ────────────────────────────────────────────– */}
// 				<section style={{ marginBottom: "2.5rem" }}>
// 					<SectionHeader
// 						title="Continue Learning"
// 						to="/courses"
// 						icon={BookOpen}
// 					/>

// 					<div
// 						style={{
// 							display: "grid",
// 							gridTemplateColumns:
// 								"repeat(auto-fit, minmax(clamp(250px, 90vw, 280px), 1fr))",
// 							gap: "clamp(12px, 2vw, 16px)",
// 						}}>
// 						{enrolledCourses.map((course) => (
// 							<CourseCard key={course.id} course={course} />
// 						))}
// 					</div>
// 				</section>

// 				{/* ── Recent Activity + Recommendations ───────────────────────────– */}
// 				<div
// 					style={{
// 						display: "grid",
// 						gridTemplateColumns:
// 							"repeat(auto-fit, minmax(clamp(280px, 90vw, 300px), 1fr))",
// 						gap: "clamp(16px, 3vw, 20px)",
// 						marginBottom: "2.5rem",
// 					}}>
// 					{/* Activity */}
// 					<div
// 						style={{
// 							background: "rgba(15,23,42,0.7)",
// 							border: "1px solid rgba(255,255,255,0.06)",
// 							borderRadius: 18,
// 							padding: "clamp(1rem, 3vw, 1.5rem)",
// 						}}
// 						role="region"
// 						aria-label="Recent Activity">
// 						<SectionHeader
// 							title="Recent Activity"
// 							to="/activity"
// 							icon={BarChart2}
// 							compact
// 						/>
// 						<div
// 							style={{ display: "flex", flexDirection: "column", gap: 12 }}
// 							role="list">
// 							{recentActivity.map((item, i) => (
// 								<ActivityRow key={i} item={item} />
// 							))}
// 						</div>
// 					</div>

// 					{/* Recommendations */}
// 					<div
// 						style={{
// 							background: "rgba(15,23,42,0.7)",
// 							border: "1px solid rgba(255,255,255,0.06)",
// 							borderRadius: 18,
// 							padding: "clamp(1rem, 3vw, 1.5rem)",
// 						}}
// 						role="region"
// 						aria-label="Recommended Courses">
// 						<SectionHeader
// 							title="Recommended for You"
// 							to="/browse"
// 							icon={Zap}
// 							compact
// 						/>
// 						<div
// 							style={{ display: "flex", flexDirection: "column", gap: 14 }}
// 							role="list">
// 							{recommendations.map((rec, i) => (
// 								<RecommendCard key={i} rec={rec} />
// 							))}
// 						</div>
// 					</div>
// 				</div>

// 				{/* ── Achievements ────────────────────────────────────────────────– */}
// 				<section role="region" aria-label="Achievements">
// 					<SectionHeader
// 						title="Achievements"
// 						to="/achievements"
// 						icon={Trophy}
// 					/>
// 					<div
// 						style={{
// 							display: "grid",
// 							gridTemplateColumns:
// 								"repeat(auto-fit, minmax(clamp(140px, 20vw, 160px), 1fr))",
// 							gap: "clamp(12px, 2vw, 16px)",
// 						}}
// 						role="list">
// 						{achievements.map((badge, i) => {
// 							// Map achievement badge names to icons
// 							const badgeIconMap = {
// 								"First Course": BookOpen,
// 								"7-Day Streak": Award,
// 								"Quiz Master": Target,
// 								"Speed Learner": Zap,
// 								"Top 10%": TrendingUp,
// 								Completionist: Trophy,
// 							};
// 							return (
// 								<BadgeCard
// 									key={i}
// 									badge={badge}
// 									icon={badgeIconMap[badge.label]}
// 									role="listitem"
// 								/>
// 							);
// 						})}
// 					</div>
// 				</section>
// 			</main>
// 		</div>
// 	);
// }

import React, { useState, useEffect } from "react";
import {
	BookOpen,
	Trophy,
	Target,
	Zap,
	Clock,
	TrendingUp,
	Award,
	Flame,
	ChevronRight,
	PlayCircle,
	Star,
	CheckCircle,
	BarChart2,
	Bell,
	Search,
	Users,
	Lock,
	Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

// ── Static data ───────────────────────────────────────────────────────────────
const enrolledCourses = [
	{
		id: 1,
		title: "The Complete JavaScript Bootcamp",
		instructor: "Jonas Schmedtmann",
		progress: 72,
		totalLessons: 320,
		completedLessons: 230,
		lastWatched: "Async / Await deep dive",
		category: "JavaScript",
		barColor: "bg-amber-400",
		textColor: "text-amber-400",
	},
	{
		id: 2,
		title: "React — The Complete Guide 2025",
		instructor: "Maximilian Schwarzmüller",
		progress: 38,
		totalLessons: 280,
		completedLessons: 106,
		lastWatched: "useEffect & Side Effects",
		category: "React",
		barColor: "bg-sky-400",
		textColor: "text-sky-400",
	},
	{
		id: 3,
		title: "Node.js, Express, MongoDB & More",
		instructor: "Jonas Schmedtmann",
		progress: 15,
		totalLessons: 230,
		completedLessons: 34,
		lastWatched: "RESTful API Design",
		category: "Node.js",
		barColor: "bg-emerald-400",
		textColor: "text-emerald-400",
	},
];

const recentActivity = [
	{
		title: "Closures & the Scope Chain",
		course: "JavaScript Bootcamp",
		status: "Completed",
		time: "1h ago",
	},
	{
		title: "Quiz: ES6 Features",
		course: "JavaScript Bootcamp",
		status: "Passed",
		time: "3h ago",
	},
	{
		title: "useReducer Hook",
		course: "React Guide",
		status: "In Progress",
		time: "Yesterday",
	},
	{
		title: "Assignment: Build a REST API",
		course: "Node.js Course",
		status: "Pending",
		time: "2 days ago",
	},
];

const recommendations = [
	{
		title: "TypeScript for Beginners",
		rating: 4.8,
		students: "142k",
		price: "₦18,000",
		tag: "Bestseller",
		tagClass: "bg-amber-500/20 text-amber-300",
	},
	{
		title: "Next.js 15 — Full Stack",
		rating: 4.9,
		students: "89k",
		price: "₦22,000",
		tag: "New",
		tagClass: "bg-cyan-500/20 text-cyan-300",
	},
	{
		title: "System Design for Engineers",
		rating: 4.7,
		students: "201k",
		price: "₦25,000",
		tag: "Popular",
		tagClass: "bg-purple-500/20 text-purple-300",
	},
];

const badges = [
	{
		label: "First Course",
		icon: BookOpen,
		earned: true,
		iconClass: "text-emerald-400",
		bgClass: "bg-emerald-500/10",
	},
	{
		label: "7-Day Streak",
		icon: Flame,
		earned: true,
		iconClass: "text-orange-400",
		bgClass: "bg-orange-500/10",
	},
	{
		label: "Quiz Master",
		icon: Target,
		earned: true,
		iconClass: "text-cyan-400",
		bgClass: "bg-cyan-500/10",
	},
	{
		label: "Speed Learner",
		icon: Zap,
		earned: false,
		iconClass: "text-amber-400",
		bgClass: "bg-amber-500/10",
	},
	{
		label: "Top 10%",
		icon: TrendingUp,
		earned: false,
		iconClass: "text-purple-400",
		bgClass: "bg-purple-500/10",
	},
	{
		label: "Completionist",
		icon: Award,
		earned: false,
		iconClass: "text-indigo-400",
		bgClass: "bg-indigo-500/10",
	},
];

const statusStyles = {
	Completed: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
	Passed: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
	"In Progress": "bg-amber-500/10  text-amber-400  border border-amber-500/20",
	Pending: "bg-slate-500/10  text-slate-400  border border-slate-500/20",
};

// ── Keyframe styles injected once ─────────────────────────────────────────────
const keyframes = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.6; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes progressFill {
    from { width: 0%; }
  }
  .anim-fade-up   { animation: fadeUp 0.5s ease both; }
  .anim-fade-in   { animation: fadeIn 0.4s ease both; }
  .anim-pulse-slow{ animation: pulse-slow 2.5s ease-in-out infinite; }
  .progress-bar   { animation: progressFill 1s cubic-bezier(.4,0,.2,1) both; }
  .shimmer-text {
    background: linear-gradient(90deg, #a5b4fc 0%, #e0e7ff 40%, #a5b4fc 80%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
  }
  .card-hover {
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .card-hover:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(99,102,241,0.12);
  }
`;

// ── Main Dashboard ─────────────────────────────────────────────────────────────
export default function Members() {
	const [stats, setStats] = useState({
		coursesEnrolled: 3,
		coursesCompleted: 7,
		currentStreak: 14,
		totalHours: 87,
		certificates: 5,
		avgScore: 91,
	});
	const [greeting, setGreeting] = useState("Good morning");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const h = new Date().getHours();
		setGreeting(
			h < 12 ? "Good morning"
			: h < 17 ? "Good afternoon"
			: "Good evening",
		);
	}, []);

	// Live streak ticker
	useEffect(() => {
		const t = setInterval(() => {
			setStats((p) => ({
				...p,
				currentStreak:
					Math.random() > 0.9 ?
						Math.min(60, p.currentStreak + 1)
					:	p.currentStreak,
			}));
		}, 5000);
		return () => clearInterval(t);
	}, []);

	return (
		<>
			<style>{keyframes}</style>
			<div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
				{/* ── Header ─────────────────────────────────────────────────────── */}
				<header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
						{/* Logo */}
						<div className="flex items-center gap-3 shrink-0 anim-fade-in">
							<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-bold text-white text-[17px] shadow-lg shadow-indigo-500/20">
								L
							</div>
							<span className="font-bold text-[17px] tracking-tight hidden sm:block">
								LearnHub
							</span>
						</div>

						{/* Search */}
						<div
							className="relative hidden sm:flex items-center flex-1 max-w-sm anim-fade-in"
							style={{ animationDelay: "0.1s" }}>
							<Search
								size={14}
								className="absolute left-3 text-slate-500 pointer-events-none"
							/>
							<input
								placeholder="Search courses..."
								className="w-full bg-white/[0.04] border border-white/[0.07] rounded-xl py-2 pl-9 pr-4 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
							/>
						</div>

						{/* Right side */}
						<div
							className="flex items-center gap-3 shrink-0 anim-fade-in"
							style={{ animationDelay: "0.15s" }}>
							{/* Streak badge */}
							<div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 rounded-xl px-3 py-1.5">
								<Flame size={15} className="text-orange-400 anim-pulse-slow" />
								<span className="text-sm font-bold text-orange-300">
									{stats.currentStreak}
								</span>
								<span className="text-xs text-orange-500 hidden sm:inline">
									streak
								</span>
							</div>

							{/* Bell */}
							<button className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all">
								<Bell size={15} />
							</button>

							{/* Avatar */}
							<div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-bold text-sm text-white ring-2 ring-indigo-500/30 cursor-pointer">
								DK
							</div>
						</div>
					</div>
				</header>

				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 space-y-8">
					{/* ── Welcome Hero ─────────────────────────────────────────────── */}
					<div className="anim-fade-up relative rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 overflow-hidden">
						{/* Decorative orb */}
						<div className="absolute -top-12 -right-12 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
						<div className="absolute -bottom-8 -left-8 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

						<div className="relative z-10">
							<p className="text-indigo-400 text-sm font-medium mb-1 flex items-center gap-1.5">
								<Sparkles size={13} className="anim-pulse-slow" /> {greeting}
							</p>
							<h1 className="text-2xl sm:text-[28px] font-extrabold tracking-tight leading-tight">
								Welcome back, <span className="shimmer-text">Damilola</span>
							</h1>
							<p className="text-slate-500 text-sm mt-2 max-w-sm leading-relaxed">
								You're on a{" "}
								<span className="text-orange-400 font-semibold">
									{stats.currentStreak}-day streak 🔥
								</span>{" "}
								— 72% through your JavaScript course. Keep pushing!
							</p>
						</div>

						<Link
							to="/courses"
							className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-semibold text-sm rounded-xl px-6 py-3 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 shrink-0">
							<PlayCircle size={16} /> Continue Learning
						</Link>
					</div>

					{/* ── Stats ────────────────────────────────────────────────────── */}
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
						{[
							{
								label: "Enrolled",
								value: stats.coursesEnrolled,
								icon: BookOpen,
								iconClass: "text-indigo-400",
								bgClass: "bg-indigo-500/10",
								delay: "0s",
							},
							{
								label: "Completed",
								value: stats.coursesCompleted,
								icon: CheckCircle,
								iconClass: "text-emerald-400",
								bgClass: "bg-emerald-500/10",
								delay: "0.05s",
							},
							{
								label: "Day Streak",
								value: `${stats.currentStreak}d`,
								icon: Flame,
								iconClass: "text-orange-400",
								bgClass: "bg-orange-500/10",
								delay: "0.1s",
							},
							{
								label: "Hours Learned",
								value: `${stats.totalHours}h`,
								icon: Clock,
								iconClass: "text-sky-400",
								bgClass: "bg-sky-500/10",
								delay: "0.15s",
							},
							{
								label: "Certificates",
								value: stats.certificates,
								icon: Award,
								iconClass: "text-purple-400",
								bgClass: "bg-purple-500/10",
								delay: "0.2s",
							},
							{
								label: "Avg. Score",
								value: `${stats.avgScore}%`,
								icon: Target,
								iconClass: "text-cyan-400",
								bgClass: "bg-cyan-500/10",
								delay: "0.25s",
							},
						].map((m) => (
							<MetricCard key={m.label} {...m} />
						))}
					</div>

					{/* ── Continue Learning ─────────────────────────────────────────── */}
					<section className="anim-fade-up" style={{ animationDelay: "0.2s" }}>
						<SectionHeader
							title="Continue Learning"
							to="/courses"
							icon={PlayCircle}
						/>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{enrolledCourses.map((course, i) => (
								<CourseCard
									key={course.id}
									course={course}
									delay={`${i * 0.08}s`}
								/>
							))}
						</div>
					</section>

					{/* ── Activity + Recommendations ────────────────────────────────── */}
					<div className="grid lg:grid-cols-2 gap-5">
						{/* Recent Activity */}
						<div
							className="anim-fade-up bg-slate-900/50 border border-white/[0.05] rounded-2xl p-5"
							style={{ animationDelay: "0.25s" }}>
							<SectionHeader
								title="Recent Activity"
								to="/activity"
								icon={BarChart2}
								compact
							/>
							<div className="divide-y divide-white/[0.04]">
								{recentActivity.map((item, i) => (
									<div
										key={i}
										className="flex items-center justify-between gap-3 py-3 anim-fade-up"
										style={{ animationDelay: `${0.3 + i * 0.06}s` }}>
										<div className="min-w-0">
											<p className="text-sm font-medium truncate">
												{item.title}
											</p>
											<p className="text-xs text-slate-500 mt-0.5">
												{item.course} · {item.time}
											</p>
										</div>
										<span
											className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg shrink-0 ${statusStyles[item.status]}`}>
											{item.status}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Recommendations */}
						<div
							className="anim-fade-up bg-slate-900/50 border border-white/[0.05] rounded-2xl p-5"
							style={{ animationDelay: "0.3s" }}>
							<SectionHeader
								title="Recommended for You"
								to="/browse"
								icon={Zap}
								compact
							/>
							<div className="flex flex-col gap-3">
								{recommendations.map((rec, i) => (
									<div
										key={i}
										className="card-hover flex items-center justify-between gap-3 bg-white/[0.02] hover:bg-indigo-500/[0.06] border border-white/[0.05] hover:border-indigo-500/20 rounded-xl p-3.5 cursor-pointer anim-fade-up"
										style={{ animationDelay: `${0.35 + i * 0.06}s` }}>
										<div className="min-w-0">
											<span
												className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest mb-1.5 inline-block ${rec.tagClass}`}>
												{rec.tag}
											</span>
											<p className="text-sm font-semibold truncate">
												{rec.title}
											</p>
											<div className="flex items-center gap-2 mt-1">
												<Star
													size={11}
													className="text-amber-400 fill-amber-400"
												/>
												<span className="text-xs text-slate-400">
													{rec.rating}
												</span>
												<span className="text-slate-700">·</span>
												<Users size={10} className="text-slate-500" />
												<span className="text-xs text-slate-400">
													{rec.students}
												</span>
											</div>
										</div>
										<p className="text-sm font-bold text-violet-400 shrink-0">
											{rec.price}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* ── Achievements ──────────────────────────────────────────────── */}
					<section className="anim-fade-up" style={{ animationDelay: "0.35s" }}>
						<SectionHeader
							title="Achievements"
							to="/achievements"
							icon={Trophy}
						/>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
							{badges.map((badge, i) => (
								<div
									key={i}
									className={`card-hover relative border rounded-2xl p-4 text-center anim-fade-up ${
										badge.earned ?
											"bg-slate-900/70 border-white/[0.07]"
										:	"bg-slate-900/30 border-white/[0.03] opacity-50"
									}`}
									style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
									{!badge.earned && (
										<Lock
											size={11}
											className="absolute top-2.5 right-2.5 text-slate-700"
										/>
									)}
									<div
										className={`w-11 h-11 mx-auto mb-2.5 rounded-xl flex items-center justify-center ${badge.bgClass}`}>
										<badge.icon
											size={22}
											className={
												badge.earned ? badge.iconClass : "text-slate-700"
											}
										/>
									</div>
									<p
										className={`text-[13px] font-semibold ${badge.earned ? "text-slate-200" : "text-slate-600"}`}>
										{badge.label}
									</p>
									<p
										className={`text-[11px] mt-0.5 ${badge.earned ? badge.iconClass : "text-slate-700"}`}>
										{badge.earned ? "Earned" : "Locked"}
									</p>
								</div>
							))}
						</div>
					</section>
				</main>
			</div>
		</>
	);
}

// ── Metric Card ───────────────────────────────────────────────────────────────
function MetricCard({ label, value, icon: Icon, iconClass, bgClass, delay }) {
	return (
		<div
			className="card-hover anim-fade-up bg-slate-900/60 border border-white/[0.06] rounded-2xl p-4 text-center"
			style={{ animationDelay: delay }}>
			<div
				className={`w-10 h-10 mx-auto mb-2.5 rounded-xl flex items-center justify-center ${bgClass}`}>
				<Icon size={20} className={iconClass} />
			</div>
			<p className="text-xl font-extrabold tracking-tight">{value}</p>
			<p className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest">
				{label}
			</p>
		</div>
	);
}

// ── Section Header ────────────────────────────────────────────────────────────
function SectionHeader({ title, to, icon: Icon, compact = false }) {
	return (
		<div
			className={`flex items-center justify-between ${compact ? "mb-4" : "mb-5"}`}>
			<h2
				className={`flex items-center gap-2 font-bold tracking-tight ${compact ? "text-base" : "text-xl"}`}>
				{Icon && <Icon size={compact ? 17 : 20} className="text-indigo-400" />}
				{title}
			</h2>
			{to && (
				<Link
					to={to}
					className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
					View all <ChevronRight size={15} />
				</Link>
			)}
		</div>
	);
}

// ── Course Card ───────────────────────────────────────────────────────────────
function CourseCard({ course, delay }) {
	return (
		<div
			className="card-hover anim-fade-up bg-slate-900/70 border border-white/[0.06] hover:border-indigo-500/30 rounded-2xl overflow-hidden cursor-pointer"
			style={{ animationDelay: delay }}>
			{/* Top progress stripe */}
			<div className="h-1 bg-white/[0.04]">
				<div
					className={`h-full ${course.barColor} progress-bar`}
					style={{ width: `${course.progress}%`, animationDelay: delay }}
				/>
			</div>

			<div className="p-5">
				<span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 uppercase tracking-widest mb-3">
					{course.category}
				</span>

				<p className="font-bold text-[15px] leading-snug mb-1">
					{course.title}
				</p>
				<p className="text-sm text-slate-500 mb-4">{course.instructor}</p>

				{/* Progress bar */}
				<div className="mb-3">
					<div className="flex justify-between text-xs text-slate-500 mb-1.5">
						<span>
							{course.completedLessons}/{course.totalLessons} lessons
						</span>
						<span className={`font-bold ${course.textColor}`}>
							{course.progress}%
						</span>
					</div>
					<div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
						<div
							className={`h-full ${course.barColor} rounded-full progress-bar`}
							style={{ width: `${course.progress}%`, animationDelay: delay }}
						/>
					</div>
				</div>

				{/* Last watched */}
				<div className="flex items-center gap-1.5 text-xs text-slate-500">
					<PlayCircle size={12} className="shrink-0 text-slate-600" />
					<span className="truncate">Last: {course.lastWatched}</span>
				</div>
			</div>
		</div>
	);
}
