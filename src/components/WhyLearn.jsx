import React from "react";
import { CheckCircle, BookOpen, Clock, Code, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BookOpen />,
    title: "Perfectly Structured",
    desc: "No more jumping between random tutorials. Follow a clear, logical path designed to build skills step-by-step.",
  },
  {
    icon: <Clock />,
    title: "Bite-Sized Lessons",
    desc: "Focused and fluff-free lessons so you can make real progress—even with a busy schedule.",
  },
  {
    icon: <Code />,
    title: "More than Just Code",
    desc: "I go beyond the 'what' and show you the 'why' and 'how' behind every concept for real understanding.",
  },
  {
    icon: <CheckCircle />,
    title: "Hands-on Projects",
    desc: "Build real-world projects together, giving you the confidence to tackle real challenges on the job.",
  },
  {
    icon: <Users />,
    title: "20+ Years Experience",
    desc: "Insights and industry lessons that you won't find in any textbook or documentation.",
  },
  {
    icon: <Globe />,
    title: "Trusted by Millions",
    desc: "Ranked #1 for clarity and depth, helping millions of developers worldwide reach their goals.",
  },
];

const WhyLearn = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-indigo-600 font-semibold tracking-widest uppercase text-sm"
        >
          The Syntax Scout Advantage
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
          Why You'll <span className="text-indigo-600">Love Learning</span> Here
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Quality, structure, and real results — a clear path to mastering the
          tools of the modern web.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div className="flex flex-col items-start">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 text-indigo-600">
                {React.cloneElement(feature.icon, { size: 28 })}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Proof Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-24 text-center border-t border-gray-100 pt-16"
      >
        <h3 className="text-xl font-semibold mb-8 text-gray-400 uppercase tracking-wider">
          Trusted by developers at
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Replace these with actual SVGs/Logos later */}
          <span className="text-2xl font-bold text-gray-900">Microsoft</span>
          <span className="text-2xl font-bold text-gray-900">Amazon</span>
          <span className="text-2xl font-bold text-gray-900">Google</span>
          <span className="text-2xl font-bold text-gray-900">Meta</span>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyLearn;
