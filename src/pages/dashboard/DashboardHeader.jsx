import React from "react";
import { Bell, Search, Flame } from "lucide-react";

export default function DashboardHeader({ stats }) {
	return (
		<header
			style={{
				position: "sticky",
				top: 0,
				zIndex: 30,
				borderBottom: "1px solid rgba(255,255,255,0.07)",
				backgroundColor: "rgba(10,15,30,0.92)",
				backdropFilter: "blur(12px)",
			}}>
			<div
				style={{
					maxWidth: 1280,
					margin: "0 auto",
					padding: "0 1.5rem",
					minHeight: 64,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: "1rem",
					flexWrap: "wrap",
				}}>
				{/* Logo */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 12,
						flexShrink: 0,
					}}>
					<div
						style={{
							width: 36,
							height: 36,
							borderRadius: 10,
							background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontWeight: 700,
							fontSize: 18,
							color: "#fff",
							flexShrink: 0,
						}}>
						L
					</div>
					<span
						style={{
							fontWeight: 600,
							fontSize: 17,
							letterSpacing: "-0.02em",
						}}>
						LearnHub
					</span>
				</div>

				{/* Search bar (desktop) */}
				<div
					style={{
						flex: 1,
						maxWidth: 420,
						minWidth: 0,
						position: "relative",
						display: "flex",
						alignItems: "center",
					}}
					className="hidden sm:flex">
					<Search
						size={16}
						style={{
							position: "absolute",
							left: 12,
							color: "#64748b",
							pointerEvents: "none",
							flexShrink: 0,
						}}
					/>
					<input
						placeholder="Search courses..."
						style={{
							width: "100%",
							backgroundColor: "rgba(255,255,255,0.05)",
							border: "1px solid rgba(255,255,255,0.08)",
							borderRadius: 10,
							padding: "8px 12px 8px 36px",
							color: "#e2e8f0",
							fontSize: 14,
							outline: "none",
							transition: "border-color 0.2s",
						}}
						onFocus={(e) =>
							(e.target.style.borderColor = "rgba(99,102,241,0.3)")
						}
						onBlur={(e) =>
							(e.target.style.borderColor = "rgba(255,255,255,0.08)")
						}
					/>
				</div>

				{/* Right side */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 16,
						flexShrink: 0,
					}}>
					{/* Streak */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 6,
							fontSize: 14,
							padding: "4px 12px",
							backgroundColor: "rgba(251,115,60,0.08)",
							borderRadius: 8,
							border: "1px solid rgba(251,115,60,0.15)",
						}}>
						<Flame size={18} style={{ color: "#fb923c", flexShrink: 0 }} />
						<span style={{ fontWeight: 600 }}>{stats.currentStreak}</span>
						<span style={{ color: "#475569", fontSize: 12 }}>day streak</span>
					</div>

					{/* Notifications */}
					<button
						style={{
							background: "rgba(255,255,255,0.05)",
							border: "1px solid rgba(255,255,255,0.08)",
							borderRadius: 8,
							width: 36,
							height: 36,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
							color: "#94a3b8",
							transition: "background 0.2s",
							flexShrink: 0,
						}}
						onMouseEnter={(e) =>
							(e.currentTarget.style.background = "rgba(255,255,255,0.08)")
						}
						onMouseLeave={(e) =>
							(e.currentTarget.style.background = "rgba(255,255,255,0.05)")
						}
						aria-label="Notifications">
						<Bell size={17} />
					</button>

					{/* Avatar */}
					<div
						style={{
							width: 36,
							height: 36,
							borderRadius: "50%",
							background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontWeight: 600,
							fontSize: 14,
							color: "#fff",
							flexShrink: 0,
							cursor: "pointer",
							transition: "transform 0.2s",
						}}
						onMouseEnter={(e) =>
							(e.currentTarget.style.transform = "scale(1.05)")
						}
						onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
						role="button"
						tabIndex={0}
						aria-label="User profile">
						DK
					</div>
				</div>
			</div>
		</header>
	);
}
