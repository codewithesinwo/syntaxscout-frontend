// Global dashboard styles
export const globalStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .animate-slide-in-up {
    animation: slideInUp 0.5s ease-out;
  }

  .animate-slide-in-down {
    animation: slideInDown 0.5s ease-out;
  }

  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.7);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(99, 102, 241, 0.5);
  }

  /* Mobile optimizations */
  @media (max-width: 640px) {
    body {
      overflow-x: hidden;
    }

    /* Prevent zoom on input focus */
    input, select, textarea {
      font-size: 16px !important;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: more) {
    * {
      border-width: 2px;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

// Animation utilities
export const animations = {
	slideInUp: {
		animation: "slideInUp 0.5s ease-out",
	},
	slideInDown: {
		animation: "slideInDown 0.5s ease-out",
	},
	fadeIn: {
		animation: "fadeIn 0.3s ease-out",
	},
	pulse: {
		animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
	},
	shimmer: {
		animation: "shimmer 2s infinite",
	},
};

// Transition utilities
export const transitions = {
	fast: "all 0.15s ease-out",
	normal: "all 0.3s ease-out",
	slow: "all 0.5s ease-out",
	colors:
		"color 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out",
};

// Hover effects
export const hoverEffects = {
	lift: {
		onMouseEnter: (e) => {
			e.currentTarget.style.transform = "translateY(-4px)";
			e.currentTarget.style.boxShadow = "0 12px 24px rgba(99, 102, 241, 0.2)";
		},
		onMouseLeave: (e) => {
			e.currentTarget.style.transform = "translateY(0)";
			e.currentTarget.style.boxShadow = "none";
		},
	},
	glow: {
		onMouseEnter: (e) => {
			e.currentTarget.style.boxShadow = "0 0 20px rgba(99, 102, 241, 0.4)";
		},
		onMouseLeave: (e) => {
			e.currentTarget.style.boxShadow = "none";
		},
	},
	scale: {
		onMouseEnter: (e) => {
			e.currentTarget.style.transform = "scale(1.05)";
		},
		onMouseLeave: (e) => {
			e.currentTarget.style.transform = "scale(1)";
		},
	},
	slide: {
		onMouseEnter: (e) => {
			e.currentTarget.style.transform = "translateX(4px)";
		},
		onMouseLeave: (e) => {
			e.currentTarget.style.transform = "translateX(0)";
		},
	},
};
