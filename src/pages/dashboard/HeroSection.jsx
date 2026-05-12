import React from "react";
import { Link } from "react-router-dom";
import { PlayCircle } from "lucide-react";

export default function HeroSection({ greeting, stats }) {
	return (
		<div
			style={{
				background:
					"linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 100%)",
				border: "1px solid rgba(99,102,241,0.2)",
				borderRadius: 20,
				padding: "clamp(1.5rem, 5vw, 2.5rem)",
				marginBottom: "2.5rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexWrap: "wrap",
				gap: "1.5rem",
				minHeight: 140,
			}}>
			<div style={{ flex: 1, minWidth: "280px" }}>
				<p style={{ color: "#818cf8", fontSize: 14, marginBottom: 6 }}>
					{greeting} 👋
				</p>
				<h1
					style={{
						fontSize: "clamp(1.5rem, 3vw, 2rem)",
						fontWeight: 700,
						letterSpacing: "-0.03em",
						margin: 0,
						lineHeight: 1.2,
						color: "#e2e8f0",
					}}>
					Welcome back, Damilola
				</h1>
				<p
					style={{
						color: "#64748b",
						marginTop: 8,
						fontSize: "clamp(13px, 2vw, 14px)",
						maxWidth: 420,
						lineHeight: 1.5,
					}}>
					You're on a {stats.currentStreak}-day streak 🔥 Keep going — you're{" "}
					{stats.currentProgress}% through your JavaScript course.
				</p>
			</div>
			<Link
				to="/courses"
				style={{
					display: "inline-flex",
					alignItems: "center",
					gap: 8,
					background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
					color: "#fff",
					borderRadius: 12,
					padding: "12px 24px",
					fontWeight: 600,
					fontSize: 14,
					textDecoration: "none",
					whiteSpace: "nowrap",
					flexShrink: 0,
					transition: "all 0.3s ease",
					border: "none",
					cursor: "pointer",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.transform = "translateY(-2px)";
					e.currentTarget.style.boxShadow = "0 8px 16px rgba(99,102,241,0.3)";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.transform = "translateY(0)";
					e.currentTarget.style.boxShadow = "none";
				}}>
				<PlayCircle size={18} aria-hidden="true" /> Continue Learning
			</Link>
		</div>
	);
}
