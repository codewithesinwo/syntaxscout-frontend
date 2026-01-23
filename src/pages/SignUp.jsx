import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaArrowRight } from "react-icons/fa";
import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name is too short.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
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
          firstName: formData.firstName,
          lastName: formData.lastName,
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
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-indigo-600/10 rounded-2xl mb-6 border border-indigo-500/20">
            <img
              src="/Syntaxscout-logo.png"
              alt="Syntax Scout Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Create Account
          </h2>
          <p className="text-gray-400 mt-2">
            Join the next generation of full-stack developers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none focus:ring-2 transition-all ${
                  errors.firstName ?
                    "border-red-500 focus:ring-red-500/20"
                  : "border-white/10 focus:ring-indigo-500/20 focus:border-indigo-500"
                }`}
              />
              {errors.firstName && (
                <p className="text-[10px] text-red-400 font-medium ml-1">
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none focus:ring-2 transition-all ${
                  errors.lastName ?
                    "border-red-500 focus:ring-red-500/20"
                  : "border-white/10 focus:ring-indigo-500/20 focus:border-indigo-500"
                }`}
              />
              {errors.lastName && (
                <p className="text-[10px] text-red-400 font-medium ml-1">
                  {errors.lastName}
                </p>
              )}
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none focus:ring-2 transition-all ${
                  errors.password ?
                    "border-red-500 focus:ring-red-500/20"
                  : "border-white/10 focus:ring-indigo-500/20 focus:border-indigo-500"
                }`}
              />
              {errors.password && (
                <p className="text-[10px] text-red-400 font-medium ml-1">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                Confirm
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none focus:ring-2 transition-all ${
                  errors.confirmPassword ?
                    "border-red-500 focus:ring-red-500/20"
                  : "border-white/10 focus:ring-indigo-500/20 focus:border-indigo-500"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-[10px] text-red-400 font-medium ml-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
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
          <div className="flex items-center gap-4 text-xs font-bold text-gray-600 uppercase tracking-widest">
            <div className="flex-1 h-px bg-white/5"></div>
            <span>Social Sign Up</span>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-medium transition-all group">
            <div className="p-2 bg-white rounded-lg group-hover:scale-110 transition-transform">
              <FaGoogle className="text-gray-900" />
            </div>
            Sign up with Google
          </button>

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
