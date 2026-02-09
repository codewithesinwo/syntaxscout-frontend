import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { setToken } from "../utils/localstorage";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
      scale: 0.9,
    }),
    animate: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction) => ({
      opacity: 0,
      rotateY: direction > 0 ? -90 : 90,
      scale: 0.9,
      transition: { duration: 0.6, ease: "easeIn" },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-950 relative overflow-hidden perspective-1000">
     
      {/* --- ADDED HEADER --- */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-10 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 group transition-all duration-300"
        >
          <img
            src="/Syntaxscout-logo.png"
            alt="SyntaxScout Logo"
            className="w-15 h-15 group-hover:scale-110 transition-transform"
          />
        </Link>
      </header>

      {/* Decorative Brand Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-xl relative mt-10">
        <AnimatePresence mode="wait" custom={isLogin ? 1 : -1}>
          {isLogin ?
            <motion.div
              key="login"
              custom={1}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <LoginForm
                switchToSignUp={() => setIsLogin(false)}
                navigate={navigate}
              />
            </motion.div>
          : <motion.div
              key="signup"
              custom={-1}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <SignUpForm
                switchToLogin={() => setIsLogin(true)}
                navigate={navigate}
              />
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- LOGIN FORM SUB-COMPONENT ---
function LoginForm({ switchToSignUp, navigate }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating success
    setTimeout(() => navigate("/member"), 1500);
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="text-gray-400 mt-2">Enter your details to continue</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500 transition-colors"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500 transition-colors"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          {isSubmitting ? "Logging in..." : "Log In"} <FaArrowRight />
        </button>
      </form>

      <p className="mt-8 text-center text-gray-400">
        New here?{" "}
        <button
          onClick={switchToSignUp}
          className="text-indigo-400 font-bold hover:underline underline-offset-4"
        >
          Create an account
        </button>
      </p>
    </div>
  );
}

// --- SIGNUP FORM SUB-COMPONENT ---
function SignUpForm({ switchToLogin, navigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(switchToLogin, 2000);
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Create Account</h2>
        <p className="text-gray-400 mt-2">Join our community today</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            name="fullName"
            placeholder="Full Name"
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500"
            onChange={handleChange}
            required
          />
          {/* <input
            name="lastName"
            placeholder="Last Name"
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500"
            onChange={handleChange}
            required
          /> */}
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          {isSubmitting ? "Creating..." : "Sign Up"} <FaArrowRight />
        </button>
      </form>

      <p className="mt-8 text-center text-gray-400">
        Already have an account?{" "}
        <button
          onClick={switchToLogin}
          className="text-indigo-400 font-bold hover:underline underline-offset-4"
        >
          Log in here
        </button>
      </p>
    </div>
  );
}
