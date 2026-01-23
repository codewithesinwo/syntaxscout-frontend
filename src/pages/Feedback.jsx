import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

// Helper hook for LocalStorage persistence
function useLocalStorage(key, initialValue) {
  const [state, setState] = React.useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [key, state]);

  return [state, setState];
}

export default function Feedback({ id }) {
  const formatSubmissionDate = (date = new Date()) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    feedback: "",
    rating: 5,
  });

  const [errors, setErrors] = React.useState({});

  // Sample data to populate the UI initially
  const defaultFeedback = [
    {
      id: 1,
      name: "John Bassey",
      feedback:
        "As a beginner, I found the learning structure very accommodating and well-paced.",
      rating: 5,
      date: "12/06/2025",
    },
    {
      id: 2,
      name: "Kingsley Balogun",
      feedback:
        "I enrolled for the data analysis course and it was worth every moment.",
      rating: 5,
      date: "08/04/2025",
    },
    {
      id: 3,
      name: "Esther Nwachukwu",
      feedback:
        "Syntax Scout transformed my learning experience. The classes are well structured.",
      rating: 5,
      date: "24/08/2025",
    },
  ];

  const [feedbacks, setFeedbacks] = useLocalStorage(
    "feedbacks",
    defaultFeedback,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.feedback.trim()) newErrors.feedback = "Feedback is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newEntry = {
        ...formData,
        id: Date.now(),
        date: formatSubmissionDate(),
      };
      setFeedbacks((prev) => [newEntry, ...prev]);
      setFormData({ name: "", email: "", feedback: "", rating: 5 });
    }
  };

  return (
    <section id={id} className="min-h-screen text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Student Experiences
          </h2>
          <p className="text-gray-400 mt-4">
            Join thousands of students who have leveled up their careers.
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form Card */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-xl sticky top-24"
          >
            <h3 className="text-2xl font-bold mb-6">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-5 py-3 bg-white/5 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${errors.name ? "border-red-500" : "border-white/10"}`}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full px-5 py-3 bg-white/5 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${errors.email ? "border-red-500" : "border-white/10"}`}
                />
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Rating</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className={`text-2xl transition-all ${formData.rating >= star ? "text-yellow-400 scale-110" : "text-white/10"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How was your learning journey?"
                  className={`w-full px-5 py-3 bg-white/5 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none ${errors.feedback ? "border-red-500" : "border-white/10"}`}
                />
              </div>

              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20"
              >
                Post Feedback
              </Motion.button>
            </form>
          </Motion.div>

          {/* List Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              Recent Activity
              <span className="text-sm bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full">
                {feedbacks.length}
              </span>
            </h3>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {feedbacks.map((f) => (
                  <Motion.div
                    key={f.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < f.rating ? "text-yellow-400" : "text-white/10"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                        {f.date}
                      </span>
                    </div>
                    <p className="text-gray-300 italic mb-4">"{f.feedback}"</p>
                    <p className="text-sm font-bold text-white">— {f.name}</p>
                  </Motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
