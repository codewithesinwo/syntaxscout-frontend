import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const ContactForm = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        loading: false,
        error: "Please fill in all required fields.",
        success: "",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({
        loading: false,
        error: "Please enter a valid email address.",
        success: "",
      });
      return;
    }

    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus({
        loading: false,
        success: "Your message has been sent successfully!",
        error: "",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch {
      setStatus({
        loading: false,
        error: "Something went wrong. Please try again later.",
        success: "",
      });
    }
  };

  return (
    <div
      id={id}
      className="flex justify-center items-center bg-gray-950 py-24 px-6 border-t border-white/5"
    >
      <section className="bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 w-full max-w-3xl mx-auto border border-white/10 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">
            Get in <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="text-gray-400">
            Have questions about our courses or the Lifetime Access? We're here
            to help.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
              Full Name <span className="text-indigo-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
              Email Address <span className="text-indigo-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Subject Dropdown */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
              Subject
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all appearance-none"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Course Support">Course Support</option>
              <option value="Billing">Billing & Refunds</option>
              <option value="Partnership">Partnerships</option>
            </select>
          </div>

          {/* Phone */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 ..."
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div className="col-span-full">
            <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
              Message <span className="text-indigo-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows="5"
              maxLength="1000"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all resize-none"
            ></textarea>
            <div className="flex justify-end mt-2">
              <span className="text-xs text-gray-500">
                {formData.message.length}/1000 characters
              </span>
            </div>
          </div>

          {/* Status Messages */}
          <div className="col-span-full">
            {status.error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium">
                {status.error}
              </div>
            )}
            {status.success && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-sm font-medium">
                {status.success}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="col-span-full w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20 flex justify-center items-center gap-2 group"
          >
            {status.loading ?
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Sending...
              </>
            : <>
                Send Message
                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            }
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
