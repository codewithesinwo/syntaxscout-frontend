import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Plus, Minus, ShieldCheck, Zap } from "lucide-react";
import Feedback from "./Feedback";

const faqs = [
  {
    question: "What’s included with Lifetime Access?",
    answer:
      "You get immediate access to all 50+ current courses and every single future release—forever. One payment, no subscriptions, no hidden fees.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Absolutely. If you aren't satisfied, contact us within 30 days for a full refund. We want you to learn with zero risk.",
  },
  {
    question: "Can I download the courses?",
    answer:
      "Yes! All videos, code samples, and resources are available for offline download so you can learn anywhere.",
  },
  {
    question: "Do I receive certificates?",
    answer:
      "Yes, you receive a verified certificate of completion for every course you finish to showcase on your LinkedIn or Resume.",
  },
];

const LifetimeAccess = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="w-full bg-gray-950 py-24 px-6 md:px-20 border-t border-white/5">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-4 py-1.5 rounded-full border border-indigo-500/30 text-indigo-400 text-sm font-bold tracking-widest uppercase mb-6 inline-block"
        >
          Limited Time Offer
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
          Own Every Course, <span className="text-indigo-500">Forever.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Skip the monthly subscriptions. Pay once and unlock our entire library
          of 50+ coding courses and all future updates.
        </p>
      </div>

      {/* Pricing Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-24 relative"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-20"></div>

        <div className="relative bg-gray-900 border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">
                The Lifetime Bundle
              </h3>
              <p className="text-gray-400">All-in-one developer toolkit</p>
            </div>
            <span className="bg-indigo-500/10 text-indigo-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-tighter border border-indigo-500/20">
              Best Value
            </span>
          </div>

          <div className="mb-10">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">
                NGN 572,986
              </span>
              <span className="text-gray-500 line-through text-xl">
                NGN 1,250,000
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              One-time payment • No recurring fees
            </p>
          </div>

          <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20 mb-10 flex items-center justify-center gap-3 group">
            <Zap className="fill-current group-hover:scale-110 transition-transform" />
            Unlock Lifetime Access
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "50+ Premium Courses",
              "All Future Releases",
              "330+ Hours of Content",
              "Downloadable Materials",
              "Verified Certificates",
              "Private Discord Access",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="text-indigo-500 w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Trust Section */}
      <div className="max-w-xl mx-auto text-center mb-24">
        <div className="bg-indigo-500/5 border border-indigo-500/10 p-8 rounded-3xl">
          <ShieldCheck className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-white mb-2">
            30-Day Risk-Free Trial
          </h4>
          <p className="text-gray-400">
            If it's not the right fit for your career, we'll refund every penny.
            No questions, no hassle.
          </p>
        </div>
      </div>

      <Feedback />

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-32">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Common Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center transition-colors hover:bg-white/5"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <span className="text-indigo-500 shrink-0">
                  {openFAQ === index ?
                    <Minus size={20} />
                  : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifetimeAccess;
