import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Submissions() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState("All");
	const [filterPlatform, setFilterPlatform] = useState("All");

	const submissions = [
		{
			id: 1,
			title: "Longest Palindromic Substring",
			platform: "LeetCode",
			difficulty: "Medium",
			status: "Accepted",
			time: "2 hours ago",
			runtime: "12 ms",
			memory: "44.8 MB",
			language: "JavaScript",
		},
		{
			id: 2,
			title: "1849C – Make it Alternating",
			platform: "Codeforces",
			difficulty: "Hard",
			status: "Accepted",
			time: "Yesterday",
			runtime: "78 ms",
			memory: "12.4 MB",
			language: "C++",
			points: "+128",
		},
		{
			id: 3,
			title: "LRU Cache",
			platform: "LeetCode",
			difficulty: "Medium",
			status: "Time Limit Exceeded",
			time: "4 days ago",
			runtime: "N/A",
			memory: "N/A",
			language: "Python",
		},
		{
			id: 4,
			title: "Weather Observation Station 18",
			platform: "HackerRank",
			difficulty: "Easy",
			status: "Accepted",
			time: "5 days ago",
			runtime: "45 ms",
			memory: "5.2 MB",
			language: "SQL",
		},
		{
			id: 5,
			title: "Binary Tree Maximum Path Sum",
			platform: "LeetCode",
			difficulty: "Hard",
			status: "Accepted",
			time: "1 week ago",
			runtime: "8 ms",
			memory: "42.1 MB",
			language: "JavaScript",
		},
	];

	const filteredSubmissions = submissions.filter((sub) => {
		const matchesSearch = sub.title
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesStatus = filterStatus === "All" || sub.status === filterStatus;
		const matchesPlatform =
			filterPlatform === "All" || sub.platform === filterPlatform;
		return matchesSearch && matchesStatus && matchesPlatform;
	});

	return (
		<div className="min-h-screen bg-gray-950 text-gray-100">
			{/* Header */}
			<header className="sticky top-0 z-30 border-b border-gray-800 bg-gray-900/95 backdrop-blur-md">
				<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Link
							to="/"
							className="flex items-center gap-3 hover:text-violet-400 transition-colors">
							← Back to Dashboard
						</Link>
						<h1 className="text-2xl font-bold">All Submissions</h1>
					</div>

					<div className="flex items-center gap-4">
						<img
							src="https://picsum.photos/id/64/40/40"
							alt="avatar"
							className="w-9 h-9 rounded-full object-cover"
						/>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-6 py-8">
				{/* Filters & Search */}
				<div className="flex flex-col md:flex-row gap-4 mb-8">
					<div className="relative flex-1">
						<img
							src="https://picsum.photos/id/1015/24/24"
							alt="search"
							className="absolute left-4 top-3.5 w-5 h-5 opacity-50"
						/>
						<input
							type="text"
							placeholder="Search submissions..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full bg-gray-900 border border-gray-700 pl-12 py-3 rounded-2xl focus:border-violet-500 outline-none"
						/>
					</div>

					<select
						value={filterPlatform}
						onChange={(e) => setFilterPlatform(e.target.value)}
						className="bg-gray-900 border border-gray-700 px-5 py-3 rounded-2xl focus:border-violet-500 outline-none">
						<option value="All">All Platforms</option>
						<option value="LeetCode">LeetCode</option>
						<option value="Codeforces">Codeforces</option>
						<option value="HackerRank">HackerRank</option>
					</select>

					<select
						value={filterStatus}
						onChange={(e) => setFilterStatus(e.target.value)}
						className="bg-gray-900 border border-gray-700 px-5 py-3 rounded-2xl focus:border-violet-500 outline-none">
						<option value="All">All Status</option>
						<option value="Accepted">Accepted</option>
						<option value="Time Limit Exceeded">Time Limit Exceeded</option>
					</select>
				</div>

				{/* Submissions List */}
				<div className="space-y-4">
					{filteredSubmissions.map((sub) => (
						<div
							key={sub.id}
							className="bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all">
							<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
								<div className="flex-1">
									<h3 className="font-semibold text-lg">{sub.title}</h3>
									<div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
										<span className="font-medium text-white">
											{sub.platform}
										</span>
										<span className="px-3 py-1 bg-gray-800 rounded-lg text-xs">
											{sub.difficulty}
										</span>
										<span>{sub.language}</span>
										<span>• {sub.time}</span>
									</div>
								</div>

								<div className="flex items-center gap-6">
									<div
										className={`px-5 py-2 rounded-xl text-sm font-medium ${
											sub.status === "Accepted" ?
												"bg-emerald-900/50 text-emerald-400 border border-emerald-800"
											:	"bg-rose-900/50 text-rose-400 border border-rose-800"
										}`}>
										{sub.status}
									</div>

									<div className="text-right text-sm">
										{sub.runtime !== "N/A" && (
											<p>
												{sub.runtime} / {sub.memory}
											</p>
										)}
										{sub.points && (
											<p className="text-emerald-400 font-medium">
												{sub.points}
											</p>
										)}
									</div>

									<img
										src="https://picsum.photos/id/1015/32/32"
										alt="view"
										className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
									/>
								</div>
							</div>
						</div>
					))}
				</div>

				{filteredSubmissions.length === 0 && (
					<div className="text-center py-20 text-gray-500">
						No submissions found matching your filters.
					</div>
				)}
			</main>
		</div>
	);
}
