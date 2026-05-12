import React from "react";

export default function SkeletonLoader({ type = "card", count = 1 }) {
	const baseStyle = {
		backgroundColor: "rgba(255,255,255,0.05)",
		borderRadius: 12,
		animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
	};

	const skeletons = Array.from({ length: count });

	if (type === "metric") {
		return skeletons.map((_, i) => (
			<div
				key={i}
				style={{
					...baseStyle,
					height: 140,
					borderRadius: 14,
				}}
			/>
		));
	}

	if (type === "course") {
		return skeletons.map((_, i) => (
			<div
				key={i}
				style={{
					...baseStyle,
					height: 240,
					borderRadius: 16,
					overflow: "hidden",
				}}>
				<div style={{ height: 6, backgroundColor: "rgba(255,255,255,0.08)" }} />
				<div style={{ padding: "1.25rem" }}>
					<div
						style={{
							...baseStyle,
							height: 20,
							width: "60%",
							marginBottom: "0.75rem",
						}}
					/>
					<div
						style={{
							...baseStyle,
							height: 16,
							width: "80%",
							marginBottom: "0.75rem",
						}}
					/>
					<div
						style={{
							...baseStyle,
							height: 6,
							width: "100%",
							marginBottom: "0.75rem",
						}}
					/>
				</div>
			</div>
		));
	}

	if (type === "activity") {
		return skeletons.map((_, i) => (
			<div
				key={i}
				style={{
					...baseStyle,
					height: 50,
					marginBottom: "0.75rem",
				}}
			/>
		));
	}

	// Default card skeleton
	return skeletons.map((_, i) => (
		<div
			key={i}
			style={{
				...baseStyle,
				height: 120,
			}}
		/>
	));
}
