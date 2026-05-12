/**
 * Common UI utility functions and patterns for dashboard components
 */

/**
 * Create a base card style
 */
export const createCardStyle = (elevated = false) => ({
	backgroundColor: "rgba(15,23,42,0.7)",
	border: "1px solid rgba(255,255,255,0.06)",
	borderRadius: 16,
	padding: "clamp(1rem, 3vw, 1.5rem)",
	transition: "all 0.3s ease",
	boxShadow: elevated ? "0 10px 25px rgba(99,102,241,0.1)" : "none",
});

/**
 * Create a button style with optional variant
 */
export const createButtonStyle = (variant = "primary") => {
	const variants = {
		primary: {
			background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
			color: "#fff",
			border: "none",
		},
		secondary: {
			background: "rgba(255,255,255,0.05)",
			color: "#818cf8",
			border: "1px solid rgba(255,255,255,0.08)",
		},
		ghost: {
			background: "transparent",
			color: "#818cf8",
			border: "none",
		},
	};

	return {
		...variants[variant],
		borderRadius: 8,
		padding: "8px 16px",
		fontSize: 14,
		fontWeight: 600,
		cursor: "pointer",
		transition: "all 0.2s ease",
	};
};

/**
 * Create an input style
 */
export const createInputStyle = () => ({
	width: "100%",
	backgroundColor: "rgba(255,255,255,0.05)",
	border: "1px solid rgba(255,255,255,0.08)",
	borderRadius: 10,
	padding: "8px 12px",
	color: "#e2e8f0",
	fontSize: 14,
	outline: "none",
	transition: "border-color 0.2s, background-color 0.2s",
});

/**
 * Create a badge style for status/tag
 */
export const createBadgeStyle = (color, size = "sm") => {
	const sizes = {
		xs: { padding: "2px 6px", fontSize: 10 },
		sm: { padding: "4px 10px", fontSize: 11 },
		md: { padding: "6px 12px", fontSize: 12 },
	};

	return {
		display: "inline-block",
		borderRadius: 6,
		backgroundColor: `${color}22`,
		color: color,
		fontWeight: 600,
		textTransform: "uppercase",
		letterSpacing: "0.05em",
		...sizes[size],
	};
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = {
	singleLine: {
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
	multiLine: (lines = 2) => ({
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		WebkitLineClamp: lines,
		overflow: "hidden",
	}),
};

/**
 * Create a gradient background
 */
export const createGradient = (color1, color2, angle = "135deg") => ({
	background: `linear-gradient(${angle}, ${color1}, ${color2})`,
});

/**
 * Create a flex center utility
 */
export const flexCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

/**
 * Create a flex between utility
 */
export const flexBetween = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
};

/**
 * Common gap utilities
 */
export const gaps = {
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 20,
	"2xl": 24,
};

/**
 * Common padding utilities
 */
export const padding = {
	xs: "0.25rem",
	sm: "0.5rem",
	md: "1rem",
	lg: "1.5rem",
	xl: "2rem",
	"2xl": "2.5rem",
};

/**
 * Common border radius utilities
 */
export const borderRadius = {
	sm: 6,
	md: 10,
	lg: 14,
	xl: 16,
	full: 9999,
};

/**
 * Format large numbers
 */
export const formatNumber = (num) => {
	if (num >= 1000000) return (num / 1000000).toFixed(1) + "m";
	if (num >= 1000) return (num / 1000).toFixed(1) + "k";
	return num.toString();
};

/**
 * Format percentage with optional decimal places
 */
export const formatPercent = (value, decimals = 0) => {
	return `${parseFloat(value).toFixed(decimals)}%`;
};

/**
 * Format time duration
 */
export const formatDuration = (minutes) => {
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;
	if (hours === 0) return `${mins}m`;
	if (mins === 0) return `${hours}h`;
	return `${hours}h ${mins}m`;
};

/**
 * Get contrasting text color based on background brightness
 */
export const getContrastColor = (hexColor) => {
	const r = parseInt(hexColor.slice(1, 3), 16);
	const g = parseInt(hexColor.slice(3, 5), 16);
	const b = parseInt(hexColor.slice(5, 7), 16);
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;
	return brightness > 128 ? "#000000" : "#ffffff";
};

/**
 * Delay helper for animations
 */
export const createDelayedStyle = (delayMs) => ({
	animationDelay: `${delayMs}ms`,
});

/**
 * Create a smooth transition
 */
export const createTransition = (
	props = "all",
	duration = "0.3s",
	timing = "ease-out",
) => ({
	transition: `${props} ${duration} ${timing}`,
});

/**
 * Common shadow utilities
 */
export const shadows = {
	sm: "0 1px 2px rgba(0, 0, 0, 0.1)",
	md: "0 4px 6px rgba(0, 0, 0, 0.1)",
	lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
	xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
	glow: "0 0 20px rgba(99, 102, 241, 0.4)",
};
