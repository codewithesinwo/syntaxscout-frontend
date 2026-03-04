import React from "react";
import { Award, Calendar, Download, Share2 } from "lucide-react";

// Sample data — in real app, fetch from API / props / context
const certificates = [
  {
    id: 1,
    title: "Advanced React & TypeScript Mastery",
    issuer: "React Mastery Academy",
    date: "February 15, 2026",
    credentialId: "RM-2026-08942",
    imageUrl:
      "https://images.unsplash.com/photo-1611224889175-d2a86da3c3a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // placeholder certificate bg
  },
  {
    id: 2,
    title: "Full-Stack Development with Next.js 15",
    issuer: "Vercel & Next.js Team",
    date: "January 10, 2026",
    credentialId: "NEXT-2026-00417",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    issuer: "Design+ Code",
    date: "December 05, 2025",
    credentialId: "DC-UX-251205",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-[#020617] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Your Certificates
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Showcase your achievements and skills — proudly earned through
            dedication and hard work.
          </p>
        </div>

        {/* Certificates Grid */}
        {certificates.length === 0 ?
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800/60 backdrop-blur-sm">
            <Award className="mx-auto h-16 w-16 text-slate-600" />
            <h3 className="mt-6 text-2xl font-bold text-slate-300">
              No certificates yet
            </h3>
            <p className="mt-2 text-slate-500">
              Complete a course or challenge to earn your first digital
              certificate!
            </p>
          </div>
        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-slate-900/60 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 hover:shadow-teal-500/20 transition-all duration-500 hover:scale-[1.02] backdrop-blur-md"
              >
                {/* Certificate Visual / Background */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Award Badge Overlay */}
                  <div className="absolute top-4 right-4 bg-teal-500/90 text-black px-4 py-2 rounded-full font-black text-sm uppercase tracking-wider shadow-lg flex items-center gap-2">
                    <Award size={18} /> Certified
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-white line-clamp-2 group-hover:text-teal-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={16} />
                      <span>Issued on {cert.date}</span>
                    </div>
                    <div className="text-teal-400 font-medium">
                      {cert.issuer}
                    </div>
                    <div className="text-xs text-slate-500 font-mono">
                      Credential ID: {cert.credentialId}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-teal-500/20">
                      <Download size={18} />
                      Download PDF
                    </button>
                    <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors text-slate-300 hover:text-white">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }

        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-black uppercase tracking-wider py-4 px-10 rounded-2xl shadow-xl shadow-teal-500/30 transition-all hover:scale-105">
            Explore More Courses
          </button>
        </div>
      </div>
    </div>
  );
}
