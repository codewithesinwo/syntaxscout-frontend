import React from "react";
import {
  Download,
  Search,
  CreditCard,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

const transactions = [
  {
    id: "TX-9021",
    date: "2024-05-15",
    user: "Alex Johnson",
    course: "JavaScript Mastery",
    amount: "$199.00",
    method: "Visa •••• 4242",
    status: "Completed",
  },
  {
    id: "TX-9022",
    date: "2024-05-14",
    user: "Sarah Williams",
    course: "Advanced React Patterns",
    amount: "$89.99",
    method: "PayPal",
    status: "Completed",
  },
  {
    id: "TX-9023",
    date: "2024-05-14",
    user: "Mike Peters",
    course: "Python for Data Science",
    amount: "$99.00",
    method: "Mastercard •••• 5555",
    status: "Pending",
  },
];

export default function Transactions() {
  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-6 text-gray-100">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Financial Ledger
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Track payments, refunds, and student subscriptions.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all">
            <Download size={18} /> Export CSV
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={16}
          />
          <input
            type="text"
            placeholder="Search by TXID, name, or course..."
            className="w-full bg-gray-900 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-white focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* Transactions Container */}
        <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          {/* DESKTOP TABLE (lg screens) */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Transaction ID
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Student
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Course
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">
                    Invoice
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {transactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-6 py-4 font-mono text-xs text-indigo-400">
                      {tx.id}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-white">
                        {tx.user}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                        {tx.method}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {tx.course}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-white">
                      {tx.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase border ${
                          tx.status === "Completed" ?
                            "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        }`}
                      >
                        {tx.status === "Completed" ?
                          <CheckCircle2 size={12} />
                        : <Clock size={12} />}
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-gray-500 hover:text-white transition-colors">
                        <ExternalLink size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE/IPHONE 6s VIEW (Stacked Cards) */}
          <div className="lg:hidden divide-y divide-white/5">
            {transactions.map((tx) => (
              <div key={tx.id} className="p-4 space-y-3 hover:bg-white/[0.01]">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-mono text-indigo-400 mb-1">
                      {tx.id}
                    </p>
                    <p className="text-sm font-bold text-white">{tx.user}</p>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                      tx.status === "Completed" ?
                        "text-emerald-400 border-emerald-500/20"
                      : "text-amber-400 border-amber-500/20"
                    }`}
                  >
                    {tx.status}
                  </span>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-400 line-clamp-1">
                      {tx.course}
                    </p>
                    <p className="text-[10px] text-gray-600 font-bold">
                      {tx.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white tracking-tight">
                      {tx.amount}
                    </p>
                    <p className="text-[9px] text-gray-500 uppercase">
                      {tx.method}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State / Bottom Info */}
        <div className="text-center py-8">
          <p className="text-xs text-gray-600 italic">
            Payments are processed via Stripe. All dates are in UTC.
          </p>
        </div>
      </div>
    </div>
  );
}
