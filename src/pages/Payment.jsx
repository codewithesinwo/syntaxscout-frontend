import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoCardSharp } from "react-icons/io5";
import { FaGooglePay, FaHashtag } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { TbTransfer } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";

export default function Payment() {
  return (
    <div
      className="
        min-h-screen bg-white py-10 px-4 
        flex flex-col md:flex-row 
        items-center md:items-start 
        justify-center gap-6 mt-15
      "
    >
      {/* LEFT CARD FORM */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8 border">
        <div className="flex justify-between items-center mb-3">
          <MdOutlineCancel className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl font-bold" />
          <h2 className="font-bold text-gray-800 text-lg">NGN 1,000</h2>
        </div>

        <div className="border-b mb-6"></div>

        <p className="text-center text-gray-900 font-medium mb-6">
          Enter your card details to pay
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              CARD NUMBER
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="0000 0000 0000 0000"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                VALID TILL
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-yellow-400"
                placeholder="MM/YY"
              />
            </div>

            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-yellow-400"
                placeholder="123"
              />
            </div>
          </div>

          <div className="flex items-center mt-2">
            <input type="checkbox" id="saveCard" />
            <label htmlFor="saveCard" className="ml-2 text-gray-700">
              Remember this card next time
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg 
            font-medium hover:bg-yellow-600 transition"
          >
            Pay NGN 1,000
          </button>
        </form>

        <div className="flex justify-center mt-5">
          <p className="text-gray-500 text-xs border px-3 py-1 rounded-lg">
            🔒 SECURED BY SYNTAXSCOUT
          </p>
        </div>
      </div>

      {/* PAYMENT OPTIONS */}
      <div
        className="
        w-full max-w-xs bg-gray-100 shadow-md rounded-3xl p-6  
      "
      >
        <p className="text-center text-gray-950 font-semibold mb-6">
          PAYMENT OPTIONS
        </p>

        <PaymentOption icon={<IoCardSharp />} label="Card" active />
        <PaymentOption icon={<FaGooglePay />} label="Google Pay" />
        <PaymentOption icon={<FaHashtag />} label="USSD" />
        <PaymentOption icon={<RiBankFill />} label="Bank" />
        <PaymentOption icon={<TbTransfer />} label="Bank Transfer" />

        <div className="flex justify-center items-center mt-5 cursor-pointer text-gray-700">
          <span>More payment options</span>
          <FaAngleDown className="ml-2" />
        </div>
      </div>
    </div>
  );
}

function PaymentOption({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer
        ${active ? "bg-yellow-100 shadow-md" : "hover:bg-gray-200"}
      `}
    >
      <div className="p-3 bg-white rounded-full shadow-sm ml-6 text-xl">
        {icon}
      </div>
      <h1 className="text-gray-950 font-medium">{label}</h1>
    </div>
  );
}
