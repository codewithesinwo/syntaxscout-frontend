import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function SectionHeader({
	title,
	to,
	icon: Icon,
	compact = false,
}) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				marginBottom: compact ? "1rem" : "1.25rem",
				flexWrap: "wrap",
				gap: "1rem",
			}}>
			<h2
				style={{
					display: "flex",
					alignItems: "center",
					gap: 10,
					fontSize: compact ? 16 : 20,
					fontWeight: 600,
					margin: 0,
					letterSpacing: "-0.02em",
				}}>
				{Icon && (
					<Icon
						size={compact ? 18 : 22}
						style={{ color: "#818cf8" }}
						aria-hidden="true"
					/>
				)}
				{title}
			</h2>
			{to && (
				<Link
					to={to}
					style={{
						display: "flex",
						alignItems: "center",
						gap: 4,
						color: "#818cf8",
						fontSize: 13,
						textDecoration: "none",
						transition: "color 0.2s",
					}}
					onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
					onMouseLeave={(e) => (e.currentTarget.style.color = "#818cf8")}>
					View all <ChevronRight size={16} />
				</Link>
			)}
		</div>
	);
}
