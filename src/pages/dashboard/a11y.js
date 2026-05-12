// Accessibility utilities and helpers

/**
 * Generate accessible link styles
 */
export const a11yLink = {
	textDecoration: "underline",
	outline: "none",
	"&:focus-visible": {
		outlineWidth: "2px",
		outlineStyle: "solid",
		outlineColor: "#818cf8",
	},
};

/**
 * Generate accessible button styles
 */
export const a11yButton = {
	cursor: "pointer",
	outline: "none",
	transition: "all 0.2s ease-out",
	"&:focus-visible": {
		outlineWidth: "2px",
		outlineStyle: "solid",
		outlineColor: "#818cf8",
		outlineOffset: "2px",
	},
};

/**
 * Common ARIA labels for different component types
 */
export const ariaLabels = {
	close: "Close",
	menu: "Open menu",
	notifications: "Notifications",
	profile: "User profile",
	search: "Search courses",
	language: "Change language",
	theme: "Toggle dark mode",
	expand: "Expand",
	collapse: "Collapse",
	loading: "Loading content",
	error: "Error occurred",
	success: "Action completed successfully",
};

/**
 * Keyboard event utilities
 */
export const keyboard = {
	isEnter: (e) => e.key === "Enter" || e.keyCode === 13,
	isEscape: (e) => e.key === "Escape" || e.keyCode === 27,
	isArrowUp: (e) => e.key === "ArrowUp" || e.keyCode === 38,
	isArrowDown: (e) => e.key === "ArrowDown" || e.keyCode === 40,
	isArrowLeft: (e) => e.key === "ArrowLeft" || e.keyCode === 37,
	isArrowRight: (e) => e.key === "ArrowRight" || e.keyCode === 39,
	isTab: (e) => e.key === "Tab" || e.keyCode === 9,
};

/**
 * Focus management utilities
 */
export const focusManagement = {
	/**
	 * Trap focus within a container
	 */
	trapFocus: (containerRef) => {
		const handleKeyDown = (e) => {
			if (e.key !== "Tab") return;

			const container = containerRef.current;
			if (!container) return;

			const focusableElements = container.querySelectorAll(
				"button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
			);

			if (focusableElements.length === 0) return;

			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			if (e.shiftKey) {
				if (document.activeElement === firstElement) {
					lastElement.focus();
					e.preventDefault();
				}
			} else {
				if (document.activeElement === lastElement) {
					firstElement.focus();
					e.preventDefault();
				}
			}
		};

		return handleKeyDown;
	},

	/**
	 * Announce changes to screen readers
	 */
	announce: (message, polite = true) => {
		const announcement = document.createElement("div");
		announcement.setAttribute("role", "status");
		announcement.setAttribute("aria-live", polite ? "polite" : "assertive");
		announcement.setAttribute("aria-atomic", "true");
		announcement.className = "sr-only"; // Visually hidden but still readable by screen readers
		announcement.textContent = message;
		document.body.appendChild(announcement);

		setTimeout(() => {
			announcement.remove();
		}, 1000);
	},
};

/**
 * Screen reader only text (sr-only) styles
 */
export const srOnlyStyles = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: "0",
};

/**
 * Create accessible form field with label
 */
export const createAccessibleFormField = (id, label, required = false) => ({
	id,
	label,
	required,
	ariaLabel: `${label}${required ? ", required" : ""}`,
	ariaRequired: required,
});

/**
 * Semantic landmark roles
 */
export const landmarks = {
	main: { role: "main" },
	nav: { role: "navigation" },
	region: { role: "region" },
	complementary: { role: "complementary" },
	contentInfo: { role: "contentinfo" },
	search: { role: "search" },
	banner: { role: "banner" },
};

export default {
	ariaLabels,
	keyboard,
	focusManagement,
	srOnlyStyles,
	createAccessibleFormField,
	landmarks,
};
