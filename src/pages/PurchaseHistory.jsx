import React from "react";

const PurchaseHistory = () => {
  // Mock data for your transactions
  const purchases = [
    {
      id: "INV-9021",
      date: "Feb 10, 2026",
      item: "Pro Membership (Monthly)",
      amount: "$15.00",
      status: "Paid",
    },
    {
      id: "INV-8442",
      date: "Jan 10, 2026",
      item: "Pro Membership (Monthly)",
      amount: "$15.00",
      status: "Paid",
    },
    {
      id: "INV-7210",
      date: "Dec 15, 2025",
      item: "React Masterclass E-Book",
      amount: "$29.00",
      status: "Paid",
    },
    {
      id: "INV-6119",
      date: "Dec 10, 2025",
      item: "Pro Membership (Monthly)",
      amount: "$15.00",
      status: "Refunded",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 mt-15 md:p-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Purchase History</h1>
          <p className="text-gray-400">View and download your past invoices.</p>
        </header>

        {/* Desktop/Tablet Table */}
        <div className="overflow-hidden border border-gray-800 rounded-xl bg-gray-900/30">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-900/50">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                    Date
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                    Item
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500 text-right">
                    Invoice
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {purchases.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {row.date}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {row.item}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {row.amount}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                          row.status === "Paid" ?
                            "bg-green-500/10 text-green-500"
                          : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-right">
                      <button className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State Logic (Optional) */}
        {purchases.length === 0 && (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl">
            <p className="text-gray-500">No transactions found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseHistory;
