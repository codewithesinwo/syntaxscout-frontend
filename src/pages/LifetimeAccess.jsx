import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Feedback from "./Feedback";


// const testimonials = [
//   {
//     name: "Linda Adewale", // Nigeria
//     content:
//       "Syntax Scout courses transformed how I approach coding. The lessons are clear, practical, and perfect for real-world projects.",
//     stars: 5,
//   },
//   {
//     name: "Aisha Bello", // Nigeria
//     content:
//       "I finally feel confident building web apps thanks to Syntax Scout structured and engaging lessons. Highly recommend!",
//     stars: 5,
//   },
//   {
//     name: "Li Wei", // China
//     content:
//       "Sy teaching style is very structured and detailed. I learned so much about full-stack development in a short time.",
//     stars: 5,
//   },
//   {
//     name: "Yuki Tanaka", // Japan
//     content:
//       "The lessons are easy to follow and practical. Thanks to Esinwo, I completed my first web application project.",
//     stars: 5,
//   },
//   {
//     name: "Rohan Kapoor", // India
//     content:
//       "Esinwo provides clear guidance and explains concepts thoroughly. I now feel confident applying coding skills professionally.",
//     stars: 5,
//   },
//   {
//     name: "Fatima Al-Hassan", // Arab region
//     content:
//       "Learning with Esinwo has been incredibly rewarding. Every lesson is focused on real-world results.",
//     stars: 5,
//   },
//   {
//     name: "Chinedu Okafor", // Nigeria
//     content:
//       "Esinwo made learning coding fun and straightforward. The community support helped me stay motivated throughout.",
//     stars: 5,
//   },
//   {
//     name: "Mei Ling", // China
//     content:
//       "Thanks to Esinwo, I finally understood complex topics like React hooks and Node.js integration. Excellent instructor!",
//     stars: 5,
//   },
//   {
//     name: "Hiroshi Yamamoto", // Japan
//     content:
//       "The lessons are engaging and clear. I was able to build a portfolio project in weeks thanks to Syntax Scout guidance.",
//     stars: 5,
//   },
//   {
//     name: "Sara Khan", // India
//     content:
//       "Esinwo provides actionable knowledge that I could immediately apply to freelance projects. Truly practical learning.",
//     stars: 5,
//   },
// ];


const faqs = [
  {
    question: "What’s included with Lifetime Access?",
    answer:
      "With Lifetime Access, you get immediate access to all current courses and all future releases—forever. Pay once, and you’ll never need to pay again.",
  },
  {
    question:
      "What's the difference between a single course and Lifetime Access?",
    answer:
      "Buying a single course gives you lifetime access to just that course. Lifetime Access unlocks everything ever created—and everything released in the future—with a single payment.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes! You can contact us within 30 days of purchase for a full refund—no questions asked.",
  },
  {
    question: "Can I download the courses?",
    answer: "Yes, all videos and resources can be downloaded to learn offline.",
  },
  {
    question: "Do I receive certificates for completed courses?",
    answer:
      "Yes, each completed course comes with a certificate of completion.",
  },
  {
    question: "How often are new courses added?",
    answer:
      "Typically 3–4 high-quality courses per year. Lifetime Access users receive all future courses at no extra cost.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Absolutely! Courses guide you step-by-step, whether you're a beginner or want to deepen your knowledge.",
  },
];

const LifetimeAccess = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="w-full bg-gray-950 py-20 px-6 md:px-20">
      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 items-center flex flex-col justify-center mt-5">
        <h2 className="text-md mb-3 font-medium md:font-bold bg-gradient-to-r from-[#7c3aed] to-[#e879f9] inline-block text-transparent bg-clip-text">
          One Payment. Lifetime Access
        </h2>
        <h1 className="text-4xl font-bold mb-5 text-gray-50">
          Own All My Courses, Forever
        </h1>
        <p className="text-gray-100 text-lg max-w-2xl mx-auto mb-8">
          Pay once. Get lifetime access to 50+ coding courses designed to make
          you a real-world developer. No subscriptions. No recurring charges.
          Just practical, job-focused learning yours to keep, forever.
        </p>

        <div className="w-100 p-5 rounded-2xl bg-gray-300">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl">Get Lifetime Access</h1>
            <button className="bg-gray-900 px-2 rounded-2xl text-white font-bold">
              Best Value
            </button>
          </div>

          <div className=" text-left">
            <p>All current & future courses — one payment.</p>
          </div>

          <div className="text-3xl font-extrabold text-indigo-900 mb-1 mt-5 text-center">
            NGN 572,986
          </div>
          <p className="text-gray-700 mb-6 text-center">
            You'll be charged $399 + tax
          </p>
          <button className="bg-indigo-900 hover:bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold transition-all cursor-pointer">
            Unlock All Courses
          </button>

          <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-5">
            What's included:
          </h3>
          <ul className="list-inside text-gray-950 space-y-2 text-left list-disc">
            <li>50+ premium courses worth $4,850+</li>
            <li>All future courses included</li>
            <li>330 hours of HD video</li>
            <li>Lifetime access</li>
            <li>Downloadable content</li>
            <li>Early access to new courses</li>
            <li>Help shape future course topics</li>
          </ul>
        </div>
      </div>

      {/* Included Features */}
      <div className="flex justify-center items-center">
        <div className="w-150 text-center items-center flex flex-col justify-center p-5">
          <h1 className="font-bold mb-4 text-gray-100 text-3xl">
            Try It, Risk-Free
          </h1>
          <p className="text-gray-300 mb-4">
            I’m confident you’ll love the courses. But if it’s not the right
            fit, get a refund within 30 days no questions asked.
          </p>

          <img src="/moneyback.svg" className="mt-5" />
        </div>
      </div>

{/* Feed back Section */}
      <div>
        <Feedback />
      </div>


      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-5">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center font-semibold text-gray-900"
              >
                {faq.question}
                <span className="text-gray-500">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 text-gray-700 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifetimeAccess;
