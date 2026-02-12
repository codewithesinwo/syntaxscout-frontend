import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaArrowRight } from "react-icons/fa";
import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name is too short.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("https://syntaxscout-backend.onrender.com/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({
          general: data.error || data.message || "Registration failed.",
        });
        return;
      }

      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setErrors({ general: "Connection error. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-gray-950 relative overflow-hidden">
      {/* Decorative Brand Glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <header className="absolute top-0 left-0 w-full p-6 md:p-10 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 group transition-all duration-300"
        >
          <img
            src="/Syntaxscout-logo.png"
            alt="SyntaxScout Logo"
            className="w-10 h-10 mb-5 group-hover:scale-110 transition-transform"
          />
        </Link>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 md:p-10 space-y-8 bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl z-10"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Create Account
          </h2>
          <p className="text-gray-400 mt-2">
            Join the next generation of programmers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none transition-all ${
                errors.fullName ? "border-red-500" : (
                  "border-white/10 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                )
              }`}
            />
            {errors.fullName && (
              <p className="text-[10px] text-red-400 font-medium ml-1">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none focus:ring-2 transition-all ${
                errors.email ?
                  "border-red-500 focus:ring-red-500/20"
                : "border-white/10 focus:ring-indigo-500/20 focus:border-indigo-500"
              }`}
            />
            {errors.email && (
              <p className="text-[10px] text-red-400 font-medium ml-1">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none transition-all ${
                errors.password ? "border-red-500" : (
                  "border-white/10 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                )
              }`}
            />
            {errors.password && (
              <p className="text-[10px] text-red-400 font-medium ml-1">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || success}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
            {!isSubmitting && (
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            )}
          </button>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm"
              >
                <MdCheckCircleOutline size={20} /> Registration successful!
                Redirecting...
              </motion.div>
            )}
            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
              >
                <MdErrorOutline size={20} /> {errors.general}
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <div className="mt-8 space-y-6">
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-400 font-bold hover:text-indigo-300 underline underline-offset-4"
            >
              Log in here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
