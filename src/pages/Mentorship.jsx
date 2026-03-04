import React, { useState, useEffect } from "react";
import {
  Users,
  Calendar,
  MessageCircle,
  Video,
  Clock,
  Star,
  Search,
  CheckCircle,
  ArrowRight,
  Filter,
  Sparkles,
} from "lucide-react";

const initialMentors = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Senior Fullstack Engineer",
    expertise: ["React", "Node.js", "AWS", "System Design"],
    rating: 4.9,
    reviews: 124,
    availability: "Today, 3 PM WAT",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UI/UX & Frontend Lead",
    expertise: ["Tailwind", "Figma", "Next.js", "Accessibility"],
    rating: 5.0,
    reviews: 89,
    availability: "Tomorrow, 10 AM WAT",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: 3,
    name: "Jamal Okoye",
    role: "DevOps & Cloud Architect",
    expertise: ["Kubernetes", "AWS", "CI/CD", "Terraform"],
    rating: 4.8,
    reviews: 67,
    availability: "This Week",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Mobile & React Native Specialist",
    expertise: ["React Native", "Flutter", "iOS", "Android"],
    rating: 4.7,
    reviews: 102,
    availability: "Next Week",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
  },
];

export default function Mentorship() {
  const [mentors, setMentors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setMentors(initialMentors);
      setIsLoading(false);
    }, 1400);
  }, []);

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesFilter =
      activeFilter === "all" ||
      mentor.expertise.some((skill) =>
        skill.toLowerCase().includes(activeFilter.toLowerCase()),
      );
    return matchesSearch && matchesFilter;
  });

  const filters = ["All", "React", "UI/UX", "Backend", "DevOps", "Mobile"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-950/40 via-gray-900 to-black border border-teal-900/30 p-8 md:p-12">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-semibold uppercase tracking-wide">
              <Sparkles size={16} /> Expert 1-on-1 Mentorship
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Accelerate Your Growth with{" "}
              <span className="text-teal-400">Top Industry Mentors</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Book private sessions to review code, prepare for interviews,
              design systems, or get career guidance from engineers at FAANG &
              startups.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-black font-bold rounded-xl text-lg transition-all flex items-center gap-2 shadow-lg shadow-teal-900/30">
                Find a Mentor <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl text-lg font-medium transition-all border border-gray-700">
                Browse Free Sessions
              </button>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-10">
            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter.toLowerCase())}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === filter.toLowerCase() ?
                        "bg-teal-600 text-black shadow-md"
                      : "bg-gray-900 border border-gray-800 hover:border-teal-700"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-80">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search mentors by name or skill..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-800 rounded-full py-3 pl-12 pr-5 text-sm focus:border-teal-600 focus:ring-1 focus:ring-teal-600/30 outline-none transition"
                />
              </div>
            </div>

            {/* Mentor Grid */}
            {isLoading ?
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-72 animate-pulse"
                  />
                ))}
              </div>
            : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMentors.map((mentor) => (
                  <MentorCard key={mentor.id} mentor={mentor} />
                ))}
                {filteredMentors.length === 0 && (
                  <div className="col-span-2 py-12 text-center text-gray-500">
                    No mentors match your search. Try different keywords!
                  </div>
                )}
              </div>
            }
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Upcoming Sessions */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
                <Calendar size={20} className="text-teal-400" /> Upcoming
                Sessions
              </h3>
              <div className="space-y-4">
                <div className="p-5 bg-black/40 rounded-xl border border-gray-800/50 hover:border-teal-800/50 transition">
                  <p className="text-xs text-teal-400 font-semibold uppercase mb-1">
                    Tomorrow • 2:00 PM WAT
                  </p>
                  <p className="font-medium">Code Review • Sarah Chen</p>
                  <button className="mt-4 w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-black font-bold rounded-lg text-sm transition flex items-center justify-center gap-2">
                    <Video size={16} /> Join Session
                  </button>
                </div>
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm font-medium transition flex items-center justify-center gap-2">
                  View Calendar <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
              <h3 className="font-bold mb-4">Need Help Fast?</h3>
              <p className="text-sm text-gray-400 mb-5">
                Ask the community or book a quick 15-min session.
              </p>
              <div className="space-y-3">
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition flex items-center justify-center gap-2">
                  <MessageCircle size={16} /> Ask Community
                </button>
                <button className="w-full py-3 bg-teal-600/80 hover:bg-teal-500 text-black rounded-xl font-bold transition flex items-center justify-center gap-2">
                  <Clock size={16} /> Quick 15-min Call
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function MentorCard({ mentor }) {
  return (
    <div className="group bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-teal-700/60 hover:shadow-xl hover:shadow-teal-950/20 transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="relative">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-teal-500/0 group-hover:ring-teal-500/40"
          />
          {mentor.featured && (
            <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-black px-2 py-1 rounded-full shadow-md">
              Featured
            </div>
          )}
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-xl font-bold flex items-center gap-2">
                {mentor.name}
                <CheckCircle size={18} className="text-teal-500" />
              </h4>
              <p className="text-sm text-gray-400 mt-1">{mentor.role}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5 text-yellow-400 font-bold">
                <Star size={16} fill="currentColor" /> {mentor.rating}
              </div>
              <p className="text-xs text-gray-600 mt-0.5">
                {mentor.reviews} reviews
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-800/80 rounded-full text-xs font-medium text-gray-300 border border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="pt-3 flex items-center justify-between border-t border-gray-800">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-medium">
                Available: {mentor.availability}
              </span>
            </div>
            <button className="flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition">
              Book Session <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
