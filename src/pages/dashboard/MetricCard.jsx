import React from "react";
import { colorMap } from "./constants";

export default function MetricCard({
	label,
	value,
	icon: Icon,
	color = "indigo",
}) {
	const c = colorMap[color] || colorMap.indigo;
	return (
		<div
			style={{
				backgroundColor: "rgba(15,23,42,0.7)",
				border: `1px solid ${c.border}`,
				borderRadius: 14,
				padding: "1.1rem 1rem",
				textAlign: "center",
				transition: "all 0.3s ease",
				cursor: "pointer",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.borderColor = c.text;
				e.currentTarget.style.transform = "translateY(-4px)";
				e.currentTarget.style.boxShadow = `0 8px 16px ${c.bg}`;
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.borderColor = c.border;
				e.currentTarget.style.transform = "translateY(0)";
				e.currentTarget.style.boxShadow = "none";
			}}>
			<div
				style={{
					width: 40,
					height: 40,
					margin: "0 auto 10px",
					borderRadius: 10,
					backgroundColor: c.bg,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Icon size={20} style={{ color: c.text }} aria-hidden="true" />
			</div>
			<div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>
				{value}
			</div>
			<div
				style={{
					fontSize: 11,
					color: "#475569",
					marginTop: 4,
					textTransform: "uppercase",
					letterSpacing: "0.07em",
				}}>
				{label}
			</div>
		</div>
	);
}
