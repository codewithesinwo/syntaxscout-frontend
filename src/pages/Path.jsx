import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Path() {
  const steps = [
    {
      id: 1,
      title: "Beginner Foundation",
      about: "Build solid core skills before moving into advanced topics.",
      bullets: [
        "Introduction to the Web",
        "HTML Basics",
        "CSS Fundamentals",
        "TailwindCSS Essentials",
        "Basic JavaScript",
      ],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    },
    {
      id: 2,
      title: "Frontend Development",
      about: "Build modern and responsive interfaces.",
      bullets: [
        "Advanced TailwindCSS",
        "Responsive Design",
        "JavaScript DOM & Events",
        "Git & GitHub Basics",
        "Intro to React",
      ],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b511691ee?w=800&q=80",
    },
    {
      id: 3,
      title: "React Mastery",
      about: "Build scalable and production-ready applications.",
      bullets: [
        "React Components",
        "Hooks & State Management",
        "Routing & Navigation",
        "API Requests (REST)",
        "Best Practices",
      ],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    },
    {
      id: 4,
      title: "Backend & APIs",
      about: "Understand server-side logic and data handling.",
      bullets: [
        "Node.js Fundamentals",
        "Express.js Framework",
        "Building REST APIs",
        "Databases (MongoDB/Postgres)",
        "Authentication",
      ],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&q=80",
    },
    {
      id: 5,
      title: "Full-Stack Projects",
      about: "Apply your skills in real-world projects.",
      bullets: [
        "Authentication Systems",
        "Dashboard UI",
        "Blog or CMS",
        "E-Commerce Mini App",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      id: 6,
      title: "Deployment & DevOps",
      about: "Learn how to launch and maintain your applications.",
      bullets: [
        "Netlify / Vercel Deployment",
        "GitHub Actions Intro",
        "Environment Variables",
        "Domain Management",
      ],
      image:
        "https://images.unsplash.com/photo-1667372333374-0d2450b65ff1?w=800&q=80",
    },
    {
      id: 7,
      title: "Career & Growth",
      about: "Prepare for real-world opportunities.",
      bullets: [
        "Writing a Tech Resume",
        "Building a Portfolio",
        "Interview Preparation",
        "Freelancing Tips",
      ],
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-gray-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text leading-tight"
          >
            Your Journey to Mastery
          </motion.h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive, step-by-step curriculum designed to take you from
            curious beginner to job-ready software engineer.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.article
              key={step.id}
              variants={card}
              className="bg-gray-900 rounded-3xl overflow-hidden border border-white/5 flex flex-col group hover:border-indigo-500/50 transition-colors"
            >
              {/* Image Section */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                {/* Number Badge */}
                <div className="absolute left-6 bottom-9 translate-y-1/2">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-xl shadow-indigo-600/20">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-10 px-6 pb-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {step.about}
                </p>

                <ul className="space-y-3 mb-8">
                  {step.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-indigo-500 shrink-0 mt-0.5"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-all group/btn">
                  Explore Stage
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
