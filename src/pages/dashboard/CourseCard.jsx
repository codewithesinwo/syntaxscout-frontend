import React, { useState } from "react";
import { PlayCircle } from "lucide-react";

export default function CourseCard({ course }) {
	const [isHovered, setIsHovered] = useState(false);
	const pct = course.progress;

	return (
		<div
			style={{
				backgroundColor: "rgba(15,23,42,0.8)",
				border: "1px solid rgba(255,255,255,0.07)",
				borderRadius: 16,
				overflow: "hidden",
				transition: "all 0.3s ease",
				cursor: "pointer",
				transform: isHovered ? "translateY(-8px)" : "translateY(0)",
				borderColor:
					isHovered ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.07)",
				boxShadow: isHovered ? "0 12px 24px rgba(99,102,241,0.15)" : "none",
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			role="article"
			aria-label={`${course.title} - ${pct}% complete`}>
			{/* Progress bar */}
			<div
				style={{
					height: 6,
					background: `linear-gradient(90deg, ${course.accentColor} ${pct}%, rgba(255,255,255,0.07) ${pct}%)`,
					transition: "all 0.6s ease",
				}}
			/>
			<div style={{ padding: "1.25rem" }}>
				<span
					style={{
						display: "inline-block",
						fontSize: 11,
						fontWeight: 600,
						padding: "3px 10px",
						borderRadius: 6,
						backgroundColor: "rgba(99,102,241,0.15)",
						color: "#818cf8",
						marginBottom: 10,
						letterSpacing: "0.05em",
						textTransform: "uppercase",
					}}>
					{course.category}
				</span>
				<p
					style={{
						fontWeight: 600,
						fontSize: 15,
						margin: "0 0 4px",
						lineHeight: 1.4,
						color: isHovered ? "#a78bfa" : "#e2e8f0",
						transition: "color 0.2s",
					}}>
					{course.title}
				</p>
				<p style={{ fontSize: 13, color: "#64748b", margin: "0 0 14px" }}>
					{course.instructor}
				</p>

				{/* Progress bar */}
				<div style={{ marginBottom: 10 }}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							fontSize: 12,
							color: "#64748b",
							marginBottom: 6,
						}}>
						<span>
							{course.completedLessons}/{course.totalLessons} lessons
						</span>
						<span style={{ color: course.accentColor, fontWeight: 600 }}>
							{pct}%
						</span>
					</div>
					<div
						style={{
							height: 5,
							backgroundColor: "rgba(255,255,255,0.06)",
							borderRadius: 99,
							overflow: "hidden",
						}}>
						<div
							style={{
								height: "100%",
								width: `${pct}%`,
								backgroundColor: course.accentColor,
								borderRadius: 99,
								transition: "width 0.6s ease",
							}}
						/>
					</div>
				</div>

				{/* Last watched */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 6,
						fontSize: 12,
						color: "#475569",
					}}>
					<PlayCircle size={13} style={{ flexShrink: 0 }} aria-hidden="true" />
					<span
						style={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}>
						Last: {course.lastWatched}
					</span>
				</div>
			</div>
		</div>
	);
}
