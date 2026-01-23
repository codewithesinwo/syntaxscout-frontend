import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaShieldAlt, FaKey, FaEnvelope } from "react-icons/fa";
import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    if (timer <= 0) return;
    const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  const handleSendCode = async () => {
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setSuccess(`Verification code sent to ${email}`);
      setError("");
      setTimer(1800); // 30 minutes
      setStep(2);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleVerifyCode = () => {
    if (timer <= 0) {
      setError("Code expired. Please request a new one.");
      return;
    }
    if (!verificationCode.trim()) {
      setError("Enter the 6-digit code.");
      return;
    }
    setError("");
    setSuccess("Identity verified.");
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match.");
      return;
    }
    setSuccess("Password reset successfully! Redirecting...");
    setError("");
    setTimeout(() => (window.location.href = "/login"), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-indigo-600/10 rounded-2xl mb-4 border border-indigo-500/20">
            {step === 1 && <FaEnvelope className="text-indigo-400 text-2xl" />}
            {step === 2 && <FaShieldAlt className="text-indigo-400 text-2xl" />}
            {step === 3 && <FaKey className="text-indigo-400 text-2xl" />}
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {step === 1 ?
              "Forgot Password?"
            : step === 2 ?
              "Verify Identity"
            : "New Password"}
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            {step === 1 && "No worries! Enter your email to get a reset code."}
            {step === 2 && `Check your inbox. We sent a code to ${email}`}
            {step === 3 && "Secure your account with a strong new password."}
          </p>
        </div>

        {/* Stepper UI */}
        <div className="flex items-center justify-between mb-8 px-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= i ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-500"}`}
              >
                {i}
              </div>
              {i < 3 && (
                <div
                  className={`w-12 h-1 ${step > i ? "bg-indigo-600" : "bg-gray-800"}`}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
          >
            {(error || success) && (
              <div
                className={`flex items-center gap-2 p-3 mb-6 text-sm rounded-xl border ${error ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-green-500/10 border-green-500/20 text-green-400"}`}
              >
                {error ?
                  <MdErrorOutline size={18} />
                : <MdCheckCircleOutline size={18} />}
                {error || success}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none"
                    placeholder="dev@syntaxscout.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleSendCode}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold shadow-lg shadow-indigo-600/20 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Reset Code"}
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div className="text-center mb-2">
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                    Expires in {formatTime(timer)}
                  </span>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    6-Digit Code
                  </label>
                  <input
                    type="text"
                    maxLength="6"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-center text-2xl tracking-[1em] focus:border-indigo-500 outline-none"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleVerifyCode}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all"
                >
                  Verify Code
                </button>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleResetPassword} className="space-y-5">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500 transition-all"
                      placeholder="••••••••"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500 transition-all"
                      placeholder="••••••••"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold shadow-lg shadow-indigo-600/20 transition-all"
                >
                  Reset Password
                </button>
              </form>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <Link
            to="/login"
            className="text-sm text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-colors"
          >
            <FaArrowLeft className="text-xs" /> Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
