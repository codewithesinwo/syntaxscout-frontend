import React from "react";
import { motion } from "framer-motion";
import { Clock, GraduationCap, Star } from "lucide-react";

const coursesData = [
  {
    id: 1,
    title: "The Ultimate Interview Preparation Bundle",
    desc: "Ace your interview: Master essential skills to impress employers and land your dream job.",
    price: "NGN 97,832",
    oldPrice: "NGN 575,484",
    duration: "35h",
    image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?w=800",
  },
  {
    id: 9,
    title: "Data Structures & Algorithms Mastery",
    desc: "Learn DSA with JavaScript: arrays, graphs, trees, recursion, and dynamic programming.",
    price: "NGN 82,400",
    oldPrice: "NGN 260,000",
    duration: "42h",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
  },

  // --- FRONTEND TRACK ---
  {
    id: 11,
    title: "HTML & CSS Zero to Mastery",
    desc: "Learn structure, styling, Flexbox, Grid, and responsive layouts to build modern websites.",
    price: "NGN 56,000",
    oldPrice: "NGN 180,000",
    duration: "27h",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
  },
  {
    id: 12,
    title: "Modern JavaScript (ES6+) Masterclass",
    desc: "Master JS fundamentals, DOM manipulation, async/await, and real-world projects.",
    price: "NGN 78,500",
    oldPrice: "NGN 245,000",
    duration: "39h",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
  },
  {
    id: 6,
    title: "React & Next.js Pro Bootcamp",
    desc: "Learn React hooks, Next.js architecture, server components, and production deployment.",
    price: "NGN 89,000",
    oldPrice: "NGN 300,000",
    duration: "48h",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    id: 14,
    title: "Frontend Tools & Workflow Mastery",
    desc: "Master Sass, developer tools, debugging, Webpack, Vite, and production optimization.",
    price: "NGN 44,900",
    oldPrice: "NGN 160,000",
    duration: "28h",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
  },

  // --- BACKEND & ENGINEERING ---
  {
    id: 2,
    title: "Full-Stack Web Development Mastery",
    desc: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a job-ready developer.",
    price: "NGN 120,500",
    oldPrice: "NGN 390,000",
    duration: "52h",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    id: 15,
    title: "Node.js Backend Development",
    desc: "Build scalable APIs with Node.js, Express, authentication, databases, and real projects.",
    price: "NGN 110,500",
    oldPrice: "NGN 350,000",
    duration: "50h",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800",
  },
  {
    id: 18,
    title: "Java Spring Boot Developer Course",
    desc: "Build enterprise-grade backend systems using Java Spring Boot, MySQL, and REST APIs.",
    price: "NGN 130,000",
    oldPrice: "NGN 400,000",
    duration: "55h",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
  },
  {
    id: 16,
    title: "Python Backend with Django & Flask",
    desc: "Learn Django and Flask for backend development, APIs, and admin dashboards.",
    price: "NGN 105,000",
    oldPrice: "NGN 330,000",
    duration: "47h",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
  },

  // --- SPECIALIZED TRACKS ---
  {
    id: 8,
    title: "Mobile App Development with React Native",
    desc: "Build iOS & Android apps with React Native, Expo, and real-world projects.",
    price: "NGN 95,300",
    oldPrice: "NGN 290,000",
    duration: "44h",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
  },
  {
    id: 10,
    title: "Cybersecurity Fundamentals",
    desc: "Learn ethical hacking, network security, penetration testing, and threat analysis.",
    price: "NGN 135,000",
    oldPrice: "NGN 420,000",
    duration: "36h",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  },
  {
    id: 3,
    title: "Beginner UI/UX Design Bootcamp",
    desc: "Master Figma, wireframing, design systems, and build a strong design portfolio.",
    price: "NGN 68,200",
    oldPrice: "NGN 210,000",
    duration: "29h",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563de4c?w=800",
  },
];

export default function Courses() {
  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Explore Our Courses
          </h2>
          <p className="text-gray-500">
            Industry-led content designed for the modern developer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl border border-white/5 overflow-hidden hover:border-indigo-500/50 transition-all group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                  Bestseller
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="flex items-center gap-1 text-xs text-indigo-400 font-semibold">
                    <Clock size={14} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-amber-400">
                    <Star size={14} fill="currentColor" /> 4.9
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {course.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-white font-bold text-lg">
                      {course.price}
                    </span>
                    <span className="block text-gray-600 line-through text-xs">
                      {course.oldPrice}
                    </span>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-indigo-600/20">
                    <GraduationCap size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
