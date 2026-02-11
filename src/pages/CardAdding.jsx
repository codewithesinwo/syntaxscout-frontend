import React, { useState } from "react";

const CardAdding = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-6 mt-15 md:p-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Payment Method</h1>
          <p className="text-gray-400">
            Update your billing details and card information.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Card Preview Visual */}
          <div className="relative w-full aspect-[1.6/1] bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 shadow-2xl shadow-indigo-500/20 flex flex-col justify-between overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div className="flex justify-between items-start">
              <div className="w-12 h-10 bg-yellow-400/80 rounded-md opacity-80"></div>
              <span className="italic font-black text-xl opacity-70">VISA</span>
            </div>

            <div className="space-y-6">
              <div className="text-xl md:text-2xl tracking-[0.2em] font-mono">
                {cardNumber || "•••• •••• •••• ••••"}
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase opacity-60 mb-1">
                    Card Holder
                  </p>
                  <p className="font-medium tracking-wide uppercase">
                    {cardName || "YOUR NAME"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase opacity-60 mb-1">
                    Expires
                  </p>
                  <p className="font-medium">{expiry || "MM/YY"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Input Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Name on Card
              </label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition"
                placeholder="Abasiubong Esinwo"
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Card Number
              </label>
              <input
                type="text"
                maxLength="19"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition"
                placeholder="0000 0000 0000 0000"
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Expiry
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition"
                  onChange={(e) => setExpiry(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  CVC
                </label>
                <input
                  type="password"
                  placeholder="•••"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition"
                />
              </div>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98]">
              Save Card Details
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              Your payment information is encrypted and secure.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardAdding;
