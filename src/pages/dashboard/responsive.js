// Responsive breakpoints
export const breakpoints = {
	xs: 0,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
};

// Common responsive utilities
export const responsiveStyles = {
	container: {
		maxWidth: 1280,
		margin: "0 auto",
		padding: "clamp(1rem, 4vw, 2.5rem)",
	},
	gridAuto: (minSize) => ({
		display: "grid",
		gridTemplateColumns: `repeat(auto-fit, minmax(${minSize}, 1fr))`,
		gap: "clamp(0.75rem, 2vw, 1.5rem)",
	}),
	heroSection: {
		padding: "clamp(1.5rem, 5vw, 2.5rem)",
		minHeight: 140,
	},
};

// Utility to generate media queries
export const media = {
	mobile: "@media (max-width: 640px)",
	tablet: "@media (min-width: 641px) and (max-width: 1024px)",
	desktop: "@media (min-width: 1025px)",
	"max-sm": "@media (max-width: 639px)",
	"max-md": "@media (max-width: 767px)",
	"max-lg": "@media (max-width: 1023px)",
};
