import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  { value: 10, suffix: "M+", label: "Students taught" },
  { value: 4, suffix: "M", label: "YouTube fans" },
  { value: 20, suffix: "+", label: "Years of experience" },
  { value: 52, suffix: "", label: "Coding courses" },
];

const StatItem = ({ value, suffix, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Framer Motion Number Animation
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
    }
  }, [isInView, value, motionValue, delay]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center p-6"
    >
      <span className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 to-indigo-500 mb-2">
        {displayValue}
        {suffix}
      </span>
      <p className="text-gray-400 text-sm md:text-lg font-medium uppercase tracking-wider text-center">
        {label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="w-full bg-gray-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our Impact in <span className="text-indigo-500">Numbers</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From first-time coders to industry professionals, we've built a
            global community dedicated to mastering the craft of development.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
