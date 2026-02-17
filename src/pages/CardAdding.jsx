import React, { useState } from "react";

const CardAdding = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardType, setCardType] = useState("VISA");

  // Detect card type based on the first few digits
  const getCardType = (number) => {
    if (number.startsWith("4")) return "VISA";
    if (/^5[1-5]/.test(number)) return "MASTERCARD";
    if (/^3[47]/.test(number)) return "AMEX";
    if (number.startsWith("6")) return "DISCOVER";
    return "VISA"; // Default fallback
  };

  const handleCardNumberChange = (e) => {
    // Remove all non-digits
    let rawValue = e.target.value.replace(/\D/g, "");
    const type = getCardType(rawValue);
    setCardType(type);

    let formattedValue = "";

    if (type === "AMEX") {
      // Amex format: 4-6-5
      const part1 = rawValue.substring(0, 4);
      const part2 = rawValue.substring(4, 10);
      const part3 = rawValue.substring(10, 15);
      formattedValue = [part1, part2, part3].filter(Boolean).join(" ");
    } else {
      // Standard format: 4-4-4-4
      formattedValue = rawValue.match(/.{1,4}/g)?.join(" ") || "";
    }

    // Limit length based on card type
    const maxLength = type === "AMEX" ? 17 : 19; // 17 includes 2 spaces, 19 includes 3
    if (formattedValue.length <= maxLength) {
      setCardNumber(formattedValue);
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    if (value.length <= 5) setExpiry(value);
  };

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
          {/* Card Preview */}
          <div
            className={`relative w-full aspect-[1.6/1] rounded-2xl p-8 shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${
              cardType === "AMEX" ? "from-emerald-800 to-black"
              : cardType === "MASTERCARD" ? "from-orange-900 to-black"
              : "from-indigo-900 to-black"
            }`}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div className="flex justify-between items-start">
              <div className="w-12 h-10 bg-yellow-400/80 rounded-md opacity-80"></div>
              <span className="italic font-black text-xl opacity-70 tracking-tighter">
                {cardType}
              </span>
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

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Name on Card
              </label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition"
                placeholder="John Doe"
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Card Number
              </label>
              <input
                type="text"
                value={cardNumber}
                placeholder="0000 0000 0000 0000"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition"
                onChange={handleCardNumberChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Expiry
                </label>
                <input
                  type="text"
                  value={expiry}
                  placeholder="MM/YY"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition"
                  onChange={handleExpiryChange}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  CVC
                </label>
                <input
                  type="password"
                  maxLength={cardType === "AMEX" ? "4" : "3"}
                  placeholder="•••"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition"
                />
              </div>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]">
              Save Card Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardAdding;
