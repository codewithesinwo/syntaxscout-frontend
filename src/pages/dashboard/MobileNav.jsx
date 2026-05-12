import React, { useState } from "react";
import { Menu, X, Bell, Search } from "lucide-react";

export default function MobileNav({ stats }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Mobile menu toggle */}
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					height: 56,
					backgroundColor: "rgba(10,15,30,0.95)",
					borderBottom: "1px solid rgba(255,255,255,0.07)",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0 1rem",
					zIndex: 50,
				}}
				className="sm:hidden">
				{/* Logo */}
				<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
					<div
						style={{
							width: 32,
							height: 32,
							borderRadius: 8,
							background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontWeight: 700,
							fontSize: 16,
							color: "#fff",
						}}>
						L
					</div>
				</div>

				{/* Right controls */}
				<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
					<button
						style={{
							background: "rgba(255,255,255,0.05)",
							border: "none",
							borderRadius: 8,
							width: 36,
							height: 36,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
							color: "#94a3b8",
						}}>
						<Bell size={16} />
					</button>
					<button
						onClick={() => setIsOpen(!isOpen)}
						style={{
							background: "rgba(255,255,255,0.05)",
							border: "none",
							borderRadius: 8,
							width: 36,
							height: 36,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
							color: "#94a3b8",
						}}>
						{isOpen ?
							<X size={20} />
						:	<Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile menu content */}
			{isOpen && (
				<div
					style={{
						position: "fixed",
						top: 56,
						left: 0,
						right: 0,
						backgroundColor: "rgba(10,15,30,0.95)",
						borderBottom: "1px solid rgba(255,255,255,0.07)",
						zIndex: 40,
						maxHeight: "calc(100vh - 56px)",
						overflowY: "auto",
					}}
					className="sm:hidden">
					<div style={{ padding: "1rem" }}>
						{/* Search */}
						<div
							style={{
								position: "relative",
								marginBottom: "1rem",
							}}>
							<Search
								size={16}
								style={{
									position: "absolute",
									left: 12,
									top: "50%",
									transform: "translateY(-50%)",
									color: "#64748b",
									pointerEvents: "none",
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
								}}
							/>
						</div>

						{/* Stats */}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: 8,
								marginBottom: "1rem",
							}}>
							<div
								style={{
									backgroundColor: "rgba(255,255,255,0.03)",
									borderRadius: 8,
									padding: "0.75rem",
									textAlign: "center",
								}}>
								<div style={{ fontSize: 18, fontWeight: 700 }}>
									{stats.currentStreak}
								</div>
								<div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
									day streak
								</div>
							</div>
							<div
								style={{
									backgroundColor: "rgba(255,255,255,0.03)",
									borderRadius: 8,
									padding: "0.75rem",
									textAlign: "center",
								}}>
								<div style={{ fontSize: 18, fontWeight: 700 }}>
									{stats.coursesEnrolled}
								</div>
								<div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
									enrolled
								</div>
							</div>
						</div>

						{/* Quick links */}
						<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
							{[
								{ label: "Courses", href: "/courses" },
								{ label: "Activity", href: "/activity" },
								{ label: "Achievements", href: "/achievements" },
								{ label: "Settings", href: "/settings" },
							].map((link) => (
								<a
									key={link.href}
									href={link.href}
									style={{
										padding: "0.75rem 1rem",
										backgroundColor: "rgba(99,102,241,0.08)",
										borderRadius: 8,
										color: "#818cf8",
										textDecoration: "none",
										fontSize: 14,
										fontWeight: 500,
										border: "1px solid rgba(99,102,241,0.15)",
									}}>
									{link.label}
								</a>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Spacer for mobile menu */}
			<div className="sm:hidden" style={{ height: 56 }} />
		</>
	);
}
