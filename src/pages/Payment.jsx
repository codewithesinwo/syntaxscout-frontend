import React, { useState } from "react";
import { FaPaypal, FaApple, FaGooglePay } from "react-icons/fa"; // Payment method icons

export default function Payment() {
  const [loading, setLoading] = useState(false);
  const [cardValidate, setCardValidate] = useState({
    cardholder: "",
    cardnumber: "",
    expiry: "",
    cvv: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Payment Processed Successfully!");
    }, 2000);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardValidate({ ...cardValidate, [name]: value });
  };

  // Handle expiry date formatting (MM/YY)
  const handleExpiryChange = (e) => {
    let value = e.target.value;

    // Add a slash automatically between MM and YY
    if (value.length === 2 && !value.includes("/")) {
      value = value + "/";
    }

    setCardValidate({ ...cardValidate, expiry: value });
  };

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-8 mt-20 mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Secure Checkout
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        {/* Payment Method Selection */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <button
            type="button"
            name="paypal"
            className="cursor-pointer h-14 bg-gray-100 rounded-xl flex justify-center items-center shadow-md transition-all duration-200 hover:bg-blue-50"
          >
            <FaPaypal size={24} className="text-blue-500" />
            <h1 className="ml-2 text-sm text-gray-600">PayPal</h1>
          </button>
          <button
            type="button"
            name="apple-pay"
            className="cursor-pointer h-14 bg-gray-100 rounded-xl flex justify-center items-center shadow-md transition-all duration-200 hover:bg-gray-50"
          >
            <FaApple size={24} className="text-gray-800" />
            <h1 className="ml-2 text-sm text-gray-600">Apple Pay</h1>
          </button>
          <button
            type="button"
            name="google-pay"
            className="cursor-pointer h-14 bg-gray-100 rounded-xl flex justify-center items-center shadow-md transition-all duration-200 hover:bg-blue-50"
          >
            <FaGooglePay size={24} className="text-blue-500" />
            <h1 className="ml-2 text-sm text-gray-600">Google Pay</h1>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <hr className="w-40 border-t border-gray-300" />
          <p className="text-sm text-center text-gray-600">
            or pay using credit card
          </p>
          <hr className="w-40 border-t border-gray-300" />
        </div>

        {/* Card Details Section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="cardholder"
              className="text-xs font-semibold text-gray-600"
            >
              Cardholder Full Name
            </label>
            <input
              id="cardholder"
              name="cardholder"
              value={cardValidate.cardholder}
              onChange={handleInputChange}
              className="h-12 px-4 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="cardnumber"
              className="text-xs font-semibold text-gray-600"
            >
              Card Number
            </label>
            <input
              id="cardnumber"
              name="cardnumber"
              value={cardValidate.cardnumber}
              onChange={handleInputChange}
              className="h-12 px-4 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              type="text"
              placeholder="0000 0000 0000 0000"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="expiry"
                className="text-xs font-semibold text-gray-600"
              >
                Expiry Date (MM/YY)
              </label>
              <input
                id="expiry"
                name="expiry"
                value={cardValidate.expiry}
                onChange={handleExpiryChange}
                className="h-12 px-4 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                type="text"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="cvv"
                className="text-xs font-semibold text-gray-600"
              >
                CVV
              </label>
              <input
                id="cvv"
                name="cvv"
                value={cardValidate.cvv}
                onChange={handleInputChange}
                className="h-12 px-4 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                type="text"
                placeholder="CVV"
                required
              />
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          type="submit"
          className="h-14 bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold rounded-xl mt-6 transition-all duration-300 hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? (
            <span className="flex justify-center items-center">
              <svg
                className="animate-spin h-5 w-5 mr-3"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Checkout"
          )}
        </button>
      </form>
    </div>
  );
}
