import React, { useState } from "react";
import { Star, Users } from "lucide-react";

export default function RecommendCard({ rec }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 12,
				padding: "12px 14px",
				backgroundColor:
					isHovered ? "rgba(99,102,241,0.08)" : "rgba(255,255,255,0.03)",
				border: "1px solid rgba(255,255,255,0.05)",
				borderRadius: 12,
				cursor: "pointer",
				transition: "all 0.2s ease",
				transform: isHovered ? "translateX(4px)" : "translateX(0)",
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			role="article"
			aria-label={`${rec.title} - ₦${rec.price}`}>
			<div style={{ flex: 1, minWidth: 0 }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						marginBottom: 4,
					}}>
					<span
						style={{
							fontSize: 10,
							fontWeight: 700,
							padding: "2px 8px",
							borderRadius: 5,
							backgroundColor: `${rec.tagColor}22`,
							color: rec.tagColor,
							textTransform: "uppercase",
							letterSpacing: "0.06em",
						}}>
						{rec.tag}
					</span>
				</div>
				<p
					style={{
						fontWeight: 500,
						fontSize: 13,
						margin: 0,
						color: isHovered ? "#a78bfa" : "#e2e8f0",
						transition: "color 0.2s",
					}}>
					{rec.title}
				</p>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						marginTop: 4,
					}}>
					<div style={{ display: "flex", alignItems: "center", gap: 3 }}>
						<Star
							size={11}
							style={{ color: "#fbbf24", fill: "#fbbf24" }}
							aria-hidden="true"
						/>
						<span style={{ fontSize: 12, color: "#94a3b8" }}>{rec.rating}</span>
					</div>
					<span style={{ color: "#334155", fontSize: 10 }}>•</span>
					<div style={{ display: "flex", alignItems: "center", gap: 3 }}>
						<Users size={11} style={{ color: "#64748b" }} aria-hidden="true" />
						<span style={{ fontSize: 12, color: "#94a3b8" }}>
							{rec.students}
						</span>
					</div>
				</div>
			</div>
			<div style={{ textAlign: "right", flexShrink: 0 }}>
				<p
					style={{
						fontWeight: 700,
						fontSize: 14,
						color: isHovered ? "#c084fc" : "#a78bfa",
						margin: 0,
						transition: "color 0.2s",
					}}>
					{rec.price}
				</p>
			</div>
		</div>
	);
}
