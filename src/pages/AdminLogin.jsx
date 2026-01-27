import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate Admin Verification (Since we're doing no-fetch for now)
    setTimeout(() => {
      if (
        formData.email === "admin@syntaxscout.com" &&
        formData.password === "admin123"
      ) {
        // Mock success
        localStorage.setItem("adminToken", "mock-admin-token");
        navigate("/admin-dashboard");
      } else {
        setError("Unauthorized: Access restricted to administrators.");
        setIsSubmitting(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-10 bg-gray-950 relative overflow-hidden mt-15">
      {/* Red Security Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-10 rounded-[2.5rem] bg-gray-900/50 backdrop-blur-xl border border-red-500/20 shadow-2xl relative z-10"
      >
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-red-600/10 text-red-500 mb-6 border border-red-500/20 shadow-lg shadow-red-500/5">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white">
            Admin Portal
          </h1>
          <p className="text-sm text-gray-400 mt-2 font-medium">
            Authentication required for core system access.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
              System ID
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                size={18}
              />
              <input
                type="email"
                required
                placeholder="admin@syntaxscout.com"
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-red-500/50 transition-all font-medium text-sm"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
              Security Key
            </label>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-red-500/50 transition-all font-medium text-sm"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
              >
                {showPassword ?
                  <EyeOff size={18} />
                : <Eye size={18} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold"
              >
                <MdErrorOutline size={18} /> {error}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 rounded-[2rem] font-black text-white bg-red-600 hover:bg-red-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-600/20 active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ?
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            : <>
                Initialize Override <ArrowRight size={18} />
              </>
            }
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-indigo-400 transition-colors"
          >
            Return to Student Login
          </button>
        </div>
      </motion.div>
    </div>
  );
}
