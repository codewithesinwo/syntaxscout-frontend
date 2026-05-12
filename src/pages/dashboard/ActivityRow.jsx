import React from "react";
import { statusStyles } from "./constants";

export default function ActivityRow({ item }) {
	const st = statusStyles[item.status] || statusStyles.Pending;
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 12,
				padding: "12px 0",
				borderBottom: "1px solid rgba(255,255,255,0.04)",
				transition: "background 0.2s",
				paddingLeft: "8px",
				paddingRight: "8px",
				marginLeft: "-8px",
				marginRight: "-8px",
				borderRadius: 8,
			}}
			onMouseEnter={(e) =>
				(e.currentTarget.style.backgroundColor = "rgba(99,102,241,0.05)")
			}
			onMouseLeave={(e) =>
				(e.currentTarget.style.backgroundColor = "transparent")
			}
			role="listitem">
			<div style={{ flex: 1, minWidth: 0 }}>
				<p
					style={{
						fontWeight: 500,
						fontSize: 13,
						margin: 0,
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}>
					{item.title}
				</p>
				<p style={{ fontSize: 12, color: "#475569", margin: "2px 0 0" }}>
					{item.course} · {item.time}
				</p>
			</div>
			<span
				style={{
					fontSize: 11,
					fontWeight: 600,
					padding: "4px 10px",
					borderRadius: 6,
					backgroundColor: st.bg,
					color: st.color,
					flexShrink: 0,
					whiteSpace: "nowrap",
				}}>
				{item.status}
			</span>
		</div>
	);
}
