import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaLock } from "react-icons/fa";
import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";
import { setToken } from "../utils/localstorage";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch(
        "https://syntaxscout-backend.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const result = await res.json();
      const { ok, data } = { ok: res.ok, data: result };

      if (!ok) {
        setErrors({ general: data.message || "Invalid login credentials." });
        return;
      }

      const token = data?.data?.token;
      if (token) {
        setToken(token);
      }

      setSuccess(true);
      // Brief delay to allow the user to see the success state
      setTimeout(() => {
        navigate("/dashboard", { replace: true, state: { token } });
      }, 1500);
    } catch (err) {
      console.error("Error:", err);
      setErrors({ general: "Connection failed. Please check your network." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.email && formData.password.length >= 6;

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-gray-950 relative overflow-hidden">
      {/* Decorative Brand Glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 md:p-10 space-y-8 bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl z-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-indigo-600/10 rounded-2xl mb-6 border border-indigo-500/20">
            <img
              src="/Syntaxscout-logo.png"
              alt="Syntax Scout"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Continue your journey to becoming a pro developer.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none transition-all ${
                errors.email ? "border-red-500" : (
                  "border-white/10 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                )
              }`}
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-[10px] text-red-400 font-medium ml-1">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                Password
              </label>
              <Link
                to="/reset-password"
                size="sm"
                className="text-[10px] text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-tighter"
              >
                Forgot?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none transition-all ${
                errors.password ? "border-red-500" : (
                  "border-white/10 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                )
              }`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-[10px] text-red-400 font-medium ml-1">
                {errors.password}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            whileHover={isFormValid ? { scale: 1.02 } : {}}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? "Authenticating..." : "Log In"}
            {!isSubmitting && (
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            )}
          </motion.button>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm font-medium"
              >
                <MdCheckCircleOutline size={20} /> Access Granted.
                Redirecting...
              </motion.div>
            )}
            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium"
              >
                <MdErrorOutline size={20} /> {errors.general}
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <div className="pt-4 text-center border-t border-white/5">
          <p className="text-sm text-gray-500">
            New to Syntax Scout?{" "}
            <Link
              to="/signup"
              className="text-indigo-400 font-bold hover:text-indigo-300 underline underline-offset-4 decoration-2"
            >
              Create an account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
