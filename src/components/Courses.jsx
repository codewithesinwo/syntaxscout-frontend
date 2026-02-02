// const coursesData = [
//   {
//     id: 1,
//     title: "The Ultimate Interview Preparation Bundle",
//     desc: "Ace your interview: Master essential skills to impress employers and land your dream job.",
//     price: "NGN 97,832",
//     oldPrice: "NGN 575,484",
//     duration: "35h",
//     image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?w=800",
//   },
//   {
//     id: 9,
//     title: "Data Structures & Algorithms Mastery",
//     desc: "Learn DSA with JavaScript: arrays, graphs, trees, recursion, and dynamic programming.",
//     price: "NGN 82,400",
//     oldPrice: "NGN 260,000",
//     duration: "42h",
//     image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
//   },

//   // --- FRONTEND TRACK ---
//   {
//     id: 11,
//     title: "HTML & CSS Zero to Mastery",
//     desc: "Learn structure, styling, Flexbox, Grid, and responsive layouts to build modern websites.",
//     price: "NGN 56,000",
//     oldPrice: "NGN 180,000",
//     duration: "27h",
//     image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
//   },
//   {
//     id: 12,
//     title: "Modern JavaScript (ES6+) Masterclass",
//     desc: "Master JS fundamentals, DOM manipulation, async/await, and real-world projects.",
//     price: "NGN 78,500",
//     oldPrice: "NGN 245,000",
//     duration: "39h",
//     image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
//   },
//   {
//     id: 6,
//     title: "React & Next.js Pro Bootcamp",
//     desc: "Learn React hooks, Next.js architecture, server components, and production deployment.",
//     price: "NGN 89,000",
//     oldPrice: "NGN 300,000",
//     duration: "48h",
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
//   },
//   {
//     id: 14,
//     title: "Frontend Tools & Workflow Mastery",
//     desc: "Master Sass, developer tools, debugging, Webpack, Vite, and production optimization.",
//     price: "NGN 44,900",
//     oldPrice: "NGN 160,000",
//     duration: "28h",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
//   },

//   // --- BACKEND & ENGINEERING ---
//   {
//     id: 2,
//     title: "Full-Stack Web Development Mastery",
//     desc: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a job-ready developer.",
//     price: "NGN 120,500",
//     oldPrice: "NGN 390,000",
//     duration: "52h",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
//   },
//   {
//     id: 15,
//     title: "Node.js Backend Development",
//     desc: "Build scalable APIs with Node.js, Express, authentication, databases, and real projects.",
//     price: "NGN 110,500",
//     oldPrice: "NGN 350,000",
//     duration: "50h",
//     image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800",
//   },
//   {
//     id: 18,
//     title: "Java Spring Boot Developer Course",
//     desc: "Build enterprise-grade backend systems using Java Spring Boot, MySQL, and REST APIs.",
//     price: "NGN 130,000",
//     oldPrice: "NGN 400,000",
//     duration: "55h",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
//   },
//   {
//     id: 16,
//     title: "Python Backend with Django & Flask",
//     desc: "Learn Django and Flask for backend development, APIs, and admin dashboards.",
//     price: "NGN 105,000",
//     oldPrice: "NGN 330,000",
//     duration: "47h",
//     image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
//   },

//   // --- SPECIALIZED TRACKS ---
//   {
//     id: 8,
//     title: "Mobile App Development with React Native",
//     desc: "Build iOS & Android apps with React Native, Expo, and real-world projects.",
//     price: "NGN 95,300",
//     oldPrice: "NGN 290,000",
//     duration: "44h",
//     image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
//   },
//   {
//     id: 10,
//     title: "Cybersecurity Fundamentals",
//     desc: "Learn ethical hacking, network security, penetration testing, and threat analysis.",
//     price: "NGN 135,000",
//     oldPrice: "NGN 420,000",
//     duration: "36h",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
//   },
//   {
//     id: 3,
//     title: "Beginner UI/UX Design Bootcamp",
//     desc: "Master Figma, wireframing, design systems, and build a strong design portfolio.",
//     price: "NGN 68,200",
//     oldPrice: "NGN 210,000",
//     duration: "29h",
//     image: "https://images.unsplash.com/photo-1586717791821-3f44a563de4c?w=800",
//   },
// ];



import React, { useState, useEffect } from "react";
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
    price: "NGN 97,832",
    oldPrice: "NGN 575,484",
    duration: "35h",
    image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?w=800",
    learningPoints: [
      "Mock Interview Simulations",
      "Resume & LinkedIn Optimization",
      "Salary Negotiation Tactics",
      "Body Language & Soft Skills",
    ],
  },
  {
    id: 9,
    title: "Data Structures & Algorithms Mastery",
    desc: "Learn DSA with JavaScript: arrays, graphs, trees, recursion, and dynamic programming. Prepare for Big Tech coding interviews with rigorous problem-solving.",
    price: "NGN 82,400",
    oldPrice: "NGN 260,000",
    duration: "42h",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    learningPoints: [
      "Big O Notation Analysis",
      "Graph Theory & Traversal",
      "Dynamic Programming Patterns",
      "Sorting & Searching Algorithms",
    ],
  },
  {
    id: 11,
    title: "HTML & CSS Zero to Mastery",
    desc: "Learn structure, styling, Flexbox, Grid, and responsive layouts to build modern websites from scratch.",
    price: "NGN 56,000",
    oldPrice: "NGN 180,000",
    duration: "27h",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
    learningPoints: [
      "Semantic HTML5",
      "Advanced CSS Grid & Flexbox",
      "Mobile-First Responsive Design",
      "CSS Animations & Transitions",
    ],
  },
  {
    id: 12,
    title: "Modern JavaScript (ES6+) Masterclass",
    desc: "Master JS fundamentals, DOM manipulation, async/await, and real-world projects. The backbone of modern web dev.",
    price: "NGN 78,500",
    oldPrice: "NGN 245,000",
    duration: "39h",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
    learningPoints: [
      "Closures & Prototypal Inheritance",
      "Asynchronous Programming",
      "API Integration (Fetch/Axios)",
      "ES6+ Syntax & Features",
    ],
  },
  {
    id: 6,
    title: "React & Next.js Pro Bootcamp",
    desc: "Learn React hooks, Next.js architecture, server components, and production deployment for high-performance apps.",
    price: "NGN 89,000",
    oldPrice: "NGN 300,000",
    duration: "48h",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    learningPoints: [
      "Server-Side Rendering (SSR)",
      "React Server Components",
      "State Management (Zustand/Context)",
      "Next.js App Router",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Web Development Mastery",
    desc: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a job-ready developer.",
    price: "NGN 120,500",
    oldPrice: "NGN 390,000",
    duration: "52h",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    learningPoints: [
      "MERN Stack Architecture",
      "RESTful API Design",
      "Authentication & JWT",
      "Database Schema Modeling",
    ],
  },
  {
    id: 18,
    title: "Java Spring Boot Developer Course",
    desc: "Build enterprise-grade backend systems using Java Spring Boot, MySQL, and REST APIs.",
    price: "NGN 130,000",
    oldPrice: "NGN 400,000",
    duration: "55h",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    learningPoints: [
      "Spring Security & OAuth2",
      "Microservices Architecture",
      "Hibernate & JPA",
      "Unit Testing with JUnit",
    ],
  },
  {
    id: 10,
    title: "Cybersecurity Fundamentals",
    desc: "Learn ethical hacking, network security, penetration testing, and threat analysis to protect digital assets.",
    price: "NGN 135,000",
    oldPrice: "NGN 420,000",
    duration: "36h",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    learningPoints: [
      "Ethical Hacking Lab",
      "Network Defense Strategies",
      "OWASP Top 10 Vulnerabilities",
      "Cryptography Basics",
    ],
  },
  {
    id: 3,
    title: "Beginner UI/UX Design Bootcamp",
    desc: "Master Figma, wireframing, design systems, and build a strong design portfolio that lands clients.",
    price: "NGN 68,200",
    oldPrice: "NGN 210,000",
    duration: "29h",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563de4c?w=800",
    learningPoints: [
      "User Research & Personas",
      "High-Fidelity Prototyping",
      "Design Systems in Figma",
      "Usability Testing",
    ],
  },
  {
    id: 20,
    title: "AWS Cloud Architect Associate",
    desc: "Master Amazon Web Services. Learn to design, deploy, and scale robust applications on the world's leading cloud platform.",
    price: "NGN 115,000",
    oldPrice: "NGN 340,000",
    duration: "45h",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    learningPoints: ["EC2, S3, and Lambda", "VPC Networking & Security", "Serverless Architecture", "Load Balancing & Auto-scaling"]
  },
  {
    id: 21,
    title: "DevOps Engineering with Docker & Kubernetes",
    desc: "Bridge the gap between development and operations. Master containerization and orchestration for modern CI/CD pipelines.",
    price: "NGN 125,000",
    oldPrice: "NGN 380,000",
    duration: "50h",
    image: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?w=800",
    learningPoints: ["Docker Containerization", "Kubernetes Cluster Management", "Jenkins CI/CD Pipelines", "Infrastructure as Code (Terraform)"]
  },

  // --- DATA SCIENCE & AI ---
  {
    id: 22,
    title: "Python for Data Science & Analysis",
    desc: "Turn data into insights. Learn how to use Python, Pandas, and Matplotlib to analyze complex datasets and visualize results.",
    price: "NGN 85,000",
    oldPrice: "NGN 220,000",
    duration: "38h",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?w=800",
    learningPoints: ["Data Cleaning with Pandas", "Exploratory Data Analysis", "Statistical Modeling", "Matplotlib & Seaborn Visualization"]
  },
  {
    id: 23,
    title: "Machine Learning & AI Masterclass",
    desc: "Build and deploy intelligent algorithms. From linear regression to neural networks using Scikit-Learn and TensorFlow.",
    price: "NGN 145,000",
    oldPrice: "NGN 450,000",
    duration: "60h",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    learningPoints: ["Supervised & Unsupervised Learning", "Neural Networks & Deep Learning", "Natural Language Processing (NLP)", "Model Deployment"]
  },

  // --- WEB & SPECIALIZED ---
  {
    id: 24,
    title: "Web3 & Ethereum Smart Contracts",
    desc: "The future of the internet. Learn Solidity, ethers.js, and Hardhat to build decentralized applications (dApps).",
    price: "NGN 155,000",
    oldPrice: "NGN 500,000",
    duration: "40h",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    learningPoints: ["Solidity Programming", "Smart Contract Security", "IPFS Decentralized Storage", "DeFi Protocol Integration"]
  },
  {
    id: 25,
    title: "TypeScript for Professional Developers",
    desc: "Stop shipping bugs. Learn how to apply static typing to your JavaScript projects for cleaner, more maintainable code.",
    price: "NGN 62,000",
    oldPrice: "NGN 150,000",
    duration: "20h",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    learningPoints: ["Interfaces & Type Aliases", "Generics & Advanced Types", "TS Configuration & Tooling", "React with TypeScript"]
  },

  // --- MOBILE & APP DEV ---
  {
    id: 26,
    title: "Flutter & Dart: Cross-Platform Apps",
    desc: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    price: "NGN 92,000",
    oldPrice: "NGN 280,000",
    duration: "45h",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    learningPoints: ["Widget-based UI Design", "Provider State Management", "Firebase Integration", "App Store/Play Store Deployment"]
  },

  // --- BUSINESS & PRODUCT ---
  {
    id: 27,
    title: "Agile Product Management",
    desc: "Learn to lead product teams. Master Scrum, Kanban, user stories, and product roadmapping for successful launches.",
    price: "NGN 75,000",
    oldPrice: "NGN 195,000",
    duration: "30h",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
    learningPoints: ["Scrum & Kanban Frameworks", "Backlog Grooming", "User Story Mapping", "Stakeholder Management"]
  },
  {
    id: 28,
    title: "SQL & Relational Database Design",
    desc: "The language of data. Master PostgreSQL and MySQL to manage large-scale relational databases effectively.",
    price: "NGN 50,000",
    oldPrice: "NGN 140,000",
    duration: "25h",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    learningPoints: ["Complex Joins & Subqueries", "Database Normalization", "Indexing & Optimization", "Stored Procedures"]
  },

  // --- CREATIVE & DESIGN ---
  {
    id: 29,
    title: "Advanced Motion Design in After Effects",
    desc: "Bring your designs to life. Learn professional animation techniques, kinetic typography, and visual effects.",
    price: "NGN 88,000",
    oldPrice: "NGN 260,000",
    duration: "35h",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    learningPoints: ["Keyframe Interpolation", "Graph Editor Mastery", "Lottie Animations for Web", "3D Layers & Camera"]
  },

  // --- BACKEND ADVANCED ---
  {
    id: 30,
    title: "Golang for Backend Engineering",
    desc: "Learn why top tech companies use Go. Build high-performance, concurrent microservices from the ground up.",
    price: "NGN 110,000",
    oldPrice: "NGN 320,000",
    duration: "40h",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    learningPoints: ["Goroutines & Channels", "Standard Library Deep Dive", "Building Gopher-style APIs", "Unit Testing in Go"]
  },
  {
    id: 31,
    title: "System Design for High-Scale Apps",
    desc: "Prepare for Senior Engineer interviews. Learn how to architect systems that serve millions of users with zero downtime.",
    price: "NGN 160,000",
    oldPrice: "NGN 550,000",
    duration: "32h",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800",
    learningPoints: ["Horizontal vs Vertical Scaling", "Caching (Redis/Memcached)", "Message Queues (Kafka/RabbitMQ)", "Database Sharding"]
  }

];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCourse]);

  return (
    <section className="py-24 px-6 bg-gray-950 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Elevate Your <span className="text-indigo-500">Career</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Expert-led courses designed to take you from beginner to
            professional. Click on any course to see the full curriculum.
          </p>
        </header>

        {/* --- COURSE GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <motion.div
              key={course.id}
              layoutId={`card-container-${course.id}`}
              onClick={() => setSelectedCourse(course)}
              className="bg-gray-900 rounded-3xl border border-white/5 overflow-hidden hover:border-indigo-500/40 transition-all group cursor-pointer flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden relative">
                <motion.img
                  layoutId={`image-${course.id}`}
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Bestseller
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-indigo-400 font-bold bg-indigo-400/10 px-3 py-1 rounded-full">
                    <Clock size={14} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                    <Star size={14} fill="currentColor" /> 4.9
                  </span>
                </div>

                <motion.h3
                  layoutId={`title-${course.id}`}
                  className="text-white text-2xl font-bold mb-3 leading-tight group-hover:text-indigo-400 transition-colors"
                >
                  {course.title}
                </motion.h3>

                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {course.desc}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                  <div>
                    <span className="text-white font-bold text-xl">
                      {course.price}
                    </span>
                    <span className="block text-gray-600 line-through text-xs">
                      {course.oldPrice}
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-gray-800 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL DETAIL VIEW --- */}
        <AnimatePresence>
          {selectedCourse && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCourse(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Modal Content */}
              <motion.div
                layoutId={`card-container-${selectedCourse.id}`}
                className="relative bg-gray-950 border border-white/10 w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={24} />
                </button>

                {/* Left Side: Image */}
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <motion.img
                    layoutId={`image-${selectedCourse.id}`}
                    src={selectedCourse.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay" />
                </div>

                {/* Right Side: Info */}
                <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
                  <motion.h2
                    layoutId={`title-${selectedCourse.id}`}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                  >
                    {selectedCourse.title}
                  </motion.h2>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-indigo-500 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                        Course Description
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {selectedCourse.desc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-indigo-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                        What you will study
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        {selectedCourse.learningPoints.map((point, i) => (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            key={i}
                            className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5"
                          >
                            <div className="bg-indigo-500/20 p-2 rounded-lg">
                              <CheckCircle2
                                size={20}
                                className="text-indigo-400"
                              />
                            </div>
                            <span className="text-gray-200 font-medium">
                              {point}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/10">
                      <div>
                        <p className="text-gray-500 text-sm mb-1 uppercase tracking-widest font-bold">
                          Total Investment
                        </p>
                        <div className="text-white font-bold text-3xl">
                          {selectedCourse.price}
                        </div>
                      </div>
                      <button className="flex-grow md:flex-grow-0 flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                        Enroll Now <GraduationCap size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}