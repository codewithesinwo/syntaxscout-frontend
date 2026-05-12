import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export default function Toast({
	message,
	type = "info",
	duration = 3000,
	onClose = () => {},
}) {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
			onClose();
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	if (!isVisible) return null;

	const typeStyles = {
		success: {
			bg: "rgba(16,185,129,0.12)",
			border: "1px solid rgba(16,185,129,0.3)",
			text: "#34d399",
			icon: CheckCircle,
		},
		error: {
			bg: "rgba(239,68,68,0.12)",
			border: "1px solid rgba(239,68,68,0.3)",
			text: "#f87171",
			icon: AlertCircle,
		},
		warning: {
			bg: "rgba(251,191,36,0.12)",
			border: "1px solid rgba(251,191,36,0.3)",
			text: "#fbbf24",
			icon: AlertCircle,
		},
		info: {
			bg: "rgba(99,102,241,0.12)",
			border: "1px solid rgba(99,102,241,0.3)",
			text: "#818cf8",
			icon: Info,
		},
	};

	const style = typeStyles[type] || typeStyles.info;
	const IconComponent = style.icon;

	return (
		<div
			style={{
				position: "fixed",
				bottom: 24,
				right: 24,
				maxWidth: 400,
				backgroundColor: style.bg,
				border: style.border,
				borderRadius: 12,
				padding: "1rem 1.25rem",
				display: "flex",
				alignItems: "center",
				gap: 12,
				zIndex: 1000,
				animation: "slideInUp 0.3s ease-out",
				boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
			}}
			role="alert"
			aria-live="polite">
			<IconComponent size={20} style={{ color: style.text, flexShrink: 0 }} />
			<span style={{ color: style.text, fontSize: 14, flex: 1 }}>
				{message}
			</span>
			<button
				onClick={() => setIsVisible(false)}
				style={{
					background: "none",
					border: "none",
					color: style.text,
					cursor: "pointer",
					padding: 0,
					flexShrink: 0,
				}}
				aria-label="Close notification">
				<X size={18} />
			</button>
		</div>
	);
}
