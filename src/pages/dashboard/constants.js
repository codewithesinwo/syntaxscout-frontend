// ─── Color map for Metric cards (fixes Tailwind dynamic class bug) ──────────
export const colorMap = {
	cyan: {
		bg: "rgba(6,182,212,0.1)",
		text: "#22d3ee",
		border: "rgba(6,182,212,0.2)",
	},
	emerald: {
		bg: "rgba(16,185,129,0.1)",
		text: "#34d399",
		border: "rgba(16,185,129,0.2)",
	},
	orange: {
		bg: "rgba(249,115,22,0.1)",
		text: "#fb923c",
		border: "rgba(249,115,22,0.2)",
	},
	purple: {
		bg: "rgba(168,85,247,0.1)",
		text: "#c084fc",
		border: "rgba(168,85,247,0.2)",
	},
	blue: {
		bg: "rgba(59,130,246,0.1)",
		text: "#60a5fa",
		border: "rgba(59,130,246,0.2)",
	},
	indigo: {
		bg: "rgba(99,102,241,0.1)",
		text: "#818cf8",
		border: "rgba(99,102,241,0.2)",
	},
	violet: {
		bg: "rgba(139,92,246,0.1)",
		text: "#a78bfa",
		border: "rgba(139,92,246,0.2)",
	},
	amber: {
		bg: "rgba(245,158,11,0.1)",
		text: "#fbbf24",
		border: "rgba(245,158,11,0.2)",
	},
};

// ─── Status styles ───────────────────────────────────────────────────────────
export const statusStyles = {
	Completed: { bg: "rgba(16,185,129,0.12)", color: "#34d399" },
	Passed: { bg: "rgba(16,185,129,0.12)", color: "#34d399" },
	"In Progress": { bg: "rgba(251,191,36,0.12)", color: "#fbbf24" },
	Pending: { bg: "rgba(100,116,139,0.15)", color: "#94a3b8" },
};

// ─── Enrolled courses ─────────────────────────────────────────────────────────
export const enrolledCourses = [
	{
		id: 1,
		title: "The Complete JavaScript Bootcamp",
		instructor: "Jonas Schmedtmann",
		progress: 72,
		totalLessons: 320,
		completedLessons: 230,
		lastWatched: "Async / Await deep dive",
		thumbnail: null,
		category: "JavaScript",
		accentColor: "#f59e0b",
	},
	{
		id: 2,
		title: "React — The Complete Guide 2025",
		instructor: "Maximilian Schwarzmüller",
		progress: 38,
		totalLessons: 280,
		completedLessons: 106,
		lastWatched: "useEffect & Side Effects",
		thumbnail: null,
		category: "React",
		accentColor: "#38bdf8",
	},
	{
		id: 3,
		title: "Node.js, Express, MongoDB & More",
		instructor: "Jonas Schmedtmann",
		progress: 15,
		totalLessons: 230,
		completedLessons: 34,
		lastWatched: "RESTful API Design",
		thumbnail: null,
		category: "Node.js",
		accentColor: "#86efac",
	},
];

// ─── Recent activity ─────────────────────────────────────────────────────────
export const recentActivity = [
	{
		title: "Closures & the Scope Chain",
		course: "JavaScript Bootcamp",
		type: "Video",
		status: "Completed",
		time: "1h ago",
		duration: "18 min",
	},
	{
		title: "Quiz: ES6 Features",
		course: "JavaScript Bootcamp",
		type: "Quiz",
		status: "Passed",
		time: "3h ago",
		score: "9/10",
	},
	{
		title: "useReducer Hook",
		course: "React Guide",
		type: "Video",
		status: "In Progress",
		time: "Yesterday",
		duration: "22 min",
	},
	{
		title: "Assignment: Build a REST API",
		course: "Node.js Course",
		type: "Assignment",
		status: "Pending",
		time: "2 days ago",
	},
];

// ─── Recommendations ─────────────────────────────────────────────────────────
export const recommendations = [
	{
		title: "TypeScript for Beginners",
		rating: 4.8,
		students: "142k",
		price: "₦18,000",
		tag: "Bestseller",
		tagColor: "#f59e0b",
	},
	{
		title: "Next.js 15 — Full Stack",
		rating: 4.9,
		students: "89k",
		price: "₦22,000",
		tag: "New",
		tagColor: "#22d3ee",
	},
	{
		title: "System Design for Engineers",
		rating: 4.7,
		students: "201k",
		price: "₦25,000",
		tag: "Popular",
		tagColor: "#c084fc",
	},
];

// ─── Badge achievements ───────────────────────────────────────────────────────
export const achievements = [
	{
		label: "First Course",
		color: "emerald",
		earned: true,
	},
	{
		label: "7-Day Streak",
		color: "orange",
		earned: true,
	},
	{
		label: "Quiz Master",
		color: "cyan",
		earned: true,
	},
	{
		label: "Speed Learner",
		color: "amber",
		earned: false,
	},
	{
		label: "Top 10%",
		color: "purple",
		earned: false,
	},
	{
		label: "Completionist",
		color: "indigo",
		earned: false,
	},
];
