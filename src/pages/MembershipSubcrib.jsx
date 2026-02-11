import React from "react";

const MembershipSubscrib = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Access to public forums",
        "Basic profile customization",
        "Standard support",
      ],
      current: false,
    },
    {
      name: "Pro",
      price: "$15/mo",
      features: [
        "Ad-free experience",
        "Priority forum support",
        "Custom badges",
        "Direct messaging",
      ],
      current: true,
    },
    {
      name: "Elite",
      price: "$49/mo",
      features: [
        "All Pro features",
        "Exclusive webinars",
        "1-on-1 mentoring",
        "Beta feature access",
      ],
      current: false,
    },
  ];

  return (
    <div className="min-h-screen mt-15 bg-black text-white p-6 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Membership & Subscriptions</h1>
        <p className="text-gray-400 mb-10">
          Manage your billing and subscription tier.
        </p>

        {/* Active Plan Banner */}
        <div className="bg-gray-900 border border-indigo-500/50 rounded-2xl p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
              Active Plan
            </span>
            <h2 className="text-2xl font-bold">Pro Membership</h2>
            <p className="text-gray-400 text-sm">
              Your next billing date is March 15, 2026.
            </p>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition">
            Manage Billing
          </button>
        </div>

        {/* Plan Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border transition-all ${
                plan.current ?
                  "border-indigo-500 bg-gray-900 shadow-lg shadow-indigo-500/10"
                : "border-gray-800 bg-gray-900/40 hover:border-gray-600"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">{plan.price}</div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                disabled={plan.current}
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.current ?
                    "bg-gray-800 text-gray-500 cursor-default"
                  : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/20"
                }`}
              >
                {plan.current ? "Current Plan" : "Upgrade Now"}
              </button>
            </div>
          ))}
        </div>

        {/* Payment Method Preview
        <div className="mt-16 border-t border-gray-800 pt-10">
          <h2 className="text-xl font-bold mb-6">Payment Method</h2>
          <div className="flex items-center justify-between p-4 bg-gray-900/50 border border-gray-800 rounded-xl max-w-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center font-bold text-[10px]">
                VISA
              </div>
              <span className="text-gray-300">•••• •••• •••• 4242</span>
            </div>
            <button className="text-indigo-400 text-sm font-bold hover:underline">
              Edit
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MembershipSubscrib;
