import React from "react";
import { Lock } from "lucide-react";
import { colorMap } from "./constants";

export default function BadgeCard({ badge, icon: Icon }) {
	const c = colorMap[badge.color] || colorMap.indigo;
	return (
		<div
			style={{
				backgroundColor:
					badge.earned ? "rgba(15,23,42,0.8)" : "rgba(15,23,42,0.4)",
				border: `1px solid ${badge.earned ? c.border : "rgba(255,255,255,0.04)"}`,
				borderRadius: 14,
				padding: "1.1rem 1rem",
				textAlign: "center",
				opacity: badge.earned ? 1 : 0.5,
				position: "relative",
				overflow: "hidden",
				cursor: "pointer",
				transition: "all 0.3s ease",
			}}
			onMouseEnter={(e) => {
				if (badge.earned) {
					e.currentTarget.style.borderColor = c.text;
					e.currentTarget.style.transform = "translateY(-4px)";
				}
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.borderColor =
					badge.earned ? c.border : "rgba(255,255,255,0.04)";
				e.currentTarget.style.transform = "translateY(0)";
			}}
			role="article"
			aria-label={`${badge.label} badge - ${badge.earned ? "Earned" : "Locked"}`}>
			{!badge.earned && (
				<Lock
					size={12}
					style={{
						position: "absolute",
						top: 10,
						right: 10,
						color: "#334155",
					}}
					aria-hidden="true"
				/>
			)}
			<div
				style={{
					width: 44,
					height: 44,
					margin: "0 auto 10px",
					borderRadius: 12,
					backgroundColor: badge.earned ? c.bg : "rgba(255,255,255,0.04)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				{Icon && (
					<Icon
						size={22}
						style={{ color: badge.earned ? c.text : "#334155" }}
						aria-hidden="true"
					/>
				)}
			</div>
			<p
				style={{
					fontSize: 13,
					fontWeight: 500,
					margin: 0,
					color: badge.earned ? "#e2e8f0" : "#475569",
				}}>
				{badge.label}
			</p>
			<p
				style={{
					fontSize: 11,
					color: badge.earned ? c.text : "#334155",
					margin: "4px 0 0",
				}}>
				{badge.earned ? "Earned" : "Locked"}
			</p>
		</div>
	);
}
