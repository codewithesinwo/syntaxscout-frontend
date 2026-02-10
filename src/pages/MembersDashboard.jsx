import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  GraduationCap,
  Star,
  X,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const coursesData = [
  {
    id: 1,
    title: "The Ultimate Interview Preparation Bundle",
    desc: "Ace your interview: Master essential skills to impress employers and land your dream job. This course covers behavioral questions, technical whiteboarding, and salary negotiation.",
    image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?w=800",
  },
  {
    id: 9,
    title: "Data Structures & Algorithms Mastery",
    desc: "Learn DSA with JavaScript: arrays, graphs, trees, recursion, and dynamic programming. Prepare for Big Tech coding interviews with rigorous problem-solving.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
  },
  {
    id: 11,
    title: "HTML & CSS Zero to Mastery",
    desc: "Learn structure, styling, Flexbox, Grid, and responsive layouts to build modern websites from scratch.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
  },
  {
    id: 12,
    title: "Modern JavaScript (ES6+) Masterclass",
    desc: "Master JS fundamentals, DOM manipulation, async/await, and real-world projects. The backbone of modern web dev.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
  },
  {
    id: 6,
    title: "React & Next.js Pro Bootcamp",
    desc: "Learn React hooks, Next.js architecture, server components, and production deployment for high-performance apps.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    id: 2,
    title: "Full-Stack Web Development Mastery",
    desc: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a job-ready developer.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    id: 18,
    title: "Java Spring Boot Developer Course",
    desc: "Build enterprise-grade backend systems using Java Spring Boot, MySQL, and REST APIs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
  },
  {
    id: 10,
    title: "Cybersecurity Fundamentals",
    desc: "Learn ethical hacking, network security, penetration testing, and threat analysis to protect digital assets.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  },
  {
    id: 3,
    title: "Beginner UI/UX Design Bootcamp",
    desc: "Master Figma, wireframing, design systems, and build a strong design portfolio that lands clients.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563de4c?w=800",
  },
  {
    id: 20,
    title: "AWS Cloud Architect Associate",
    desc: "Master Amazon Web Services. Learn to design, deploy, and scale robust applications on the world's leading cloud platform.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
  {
    id: 21,
    title: "DevOps Engineering with Docker & Kubernetes",
    desc: "Bridge the gap between development and operations. Master containerization and orchestration for modern CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?w=800",
  },

  // --- DATA SCIENCE & AI ---
  {
    id: 22,
    title: "Python for Data Science & Analysis",
    desc: "Turn data into insights. Learn how to use Python, Pandas, and Matplotlib to analyze complex datasets and visualize results.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?w=800",
  },
  {
    id: 23,
    title: "Machine Learning & AI Masterclass",
    desc: "Build and deploy intelligent algorithms. From linear regression to neural networks using Scikit-Learn and TensorFlow.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },

  // --- WEB & SPECIALIZED ---
  {
    id: 24,
    title: "Web3 & Ethereum Smart Contracts",
    desc: "The future of the internet. Learn Solidity, ethers.js, and Hardhat to build decentralized applications (dApps).",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
  },
  {
    id: 25,
    title: "TypeScript for Professional Developers",
    desc: "Stop shipping bugs. Learn how to apply static typing to your JavaScript projects for cleaner, more maintainable code.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
  },

  // --- MOBILE & APP DEV ---
  {
    id: 26,
    title: "Flutter & Dart: Cross-Platform Apps",
    desc: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
  },

  // --- BUSINESS & PRODUCT ---
  {
    id: 27,
    title: "Agile Product Management",
    desc: "Learn to lead product teams. Master Scrum, Kanban, user stories, and product roadmapping for successful launches.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
  },
  {
    id: 28,
    title: "SQL & Relational Database Design",
    desc: "The language of data. Master PostgreSQL and MySQL to manage large-scale relational databases effectively.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
  },

  // --- CREATIVE & DESIGN ---
  {
    id: 29,
    title: "Advanced Motion Design in After Effects",
    desc: "Bring your designs to life. Learn professional animation techniques, kinetic typography, and visual effects.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  },

  // --- BACKEND ADVANCED ---
  {
    id: 30,
    title: "Golang for Backend Engineering",
    desc: "Learn why top tech companies use Go. Build high-performance, concurrent microservices from the ground up.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
  },
  {
    id: 31,
    title: "System Design for High-Scale Apps",
    desc: "Prepare for Senior Engineer interviews. Learn how to architect systems that serve millions of users with zero downtime.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800",
  },
];

export default function MembersDashboard() {

  return (
    <div className="bg-black text-white pt-24 pb-10 p-5">
      <section>
        <div className="max-w-7xl mx-auto">

          {/* --- COURSE GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {coursesData.map((course) => (
              <motion.div
                key={course.id}
                layoutId={`card-container-${course.id}`}
                className="bg-black border-white rounded-3xl border overflow-hidden hover:border-indigo-500/40 transition-all group cursor-pointer flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <motion.img
                    layoutId={`image-${course.id}`}
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <motion.h3
                    layoutId={`title-${course.id}`}
                    className="text-white text-2xl font-bold mb-3 leading-tight group-hover:text-indigo-400 transition-colors"
                  >
                    {course.title}
                  </motion.h3>

                  <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                    {course.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
