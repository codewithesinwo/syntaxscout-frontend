import React from "react";
import { motion } from "framer-motion";
import { Code, Users, Laptop, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LearnBanner = () => {
  return (
    <section className="w-full text-white py-24 px-6 md:px-20 bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Learn <span className="text-indigo-500">Coding Online</span> <br />
            from Anywhere 🌍
          </h2>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Master web development, design, and emerging technologies through
            real-world projects and expert mentorship. Connect with
            opportunities to grow, build, and inspire others in tech.
          </p>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-white text-gray-950 px-8 py-4 rounded-full font-bold hover:bg-indigo-500 hover:text-white transition-all group"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Right Side: Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full -z-10"></div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="p-3 bg-indigo-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-indigo-400" />
                </div>
                <h4 className="font-bold text-xl mb-2">Learn to Code</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Interactive lessons built for beginners and industry pros.
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="p-3 bg-indigo-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Laptop className="w-8 h-8 text-indigo-400" />
                </div>
                <h4 className="font-bold text-xl mb-2">Build Projects</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Solve real-world challenges and showcase your portfolio.
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="p-3 bg-indigo-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-indigo-400" />
                </div>
                <h4 className="font-bold text-xl mb-2">Community</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Network and collaborate with passionate developers.
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="p-3 bg-indigo-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-indigo-400" />
                </div>
                <h4 className="font-bold text-xl mb-2">Teach Globally</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Share your expertise with students across the globe.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnBanner;
