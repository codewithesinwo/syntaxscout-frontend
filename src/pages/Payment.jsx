import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineCancel,
  MdPublic,
  MdOutlineLocationOn,
  MdLock,
} from "react-icons/md";
import { IoCardSharp, IoLogoApple } from "react-icons/io5";
import { FaGooglePay, FaHashtag, FaCheckCircle } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { TbTransfer } from "react-icons/tb";

export default function Payment() {
  const [activeMethod, setActiveMethod] = useState("Card");
  const [region, setRegion] = useState("Local");

  const paymentDetails =
    region === "Local" ?
      { symbol: "NGN", amount: "572,986" }
    : { symbol: "USD", amount: "399.00" };

  const renderForm = () => {
    switch (activeMethod) {
      case "Card":
        return <CardForm details={paymentDetails} />;
      case "Google Pay":
        return <DigitalWalletForm type="Google" />;
      case "Apple Pay":
        return <DigitalWalletForm type="Apple" />;
      case "USSD":
        return <UssdForm details={paymentDetails} />;
      case "Bank":
        return <BankForm />;
      case "Transfer":
        return <TransferForm details={paymentDetails} />;
      default:
        return <CardForm details={paymentDetails} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 py-20 px-4 flex flex-col items-center justify-center gap-8">
      {/* Header Info */}
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-white mb-2">
          Complete Purchase
        </h1>
        <p className="text-gray-400 text-sm">
          Join 5,000+ developers learning on Syntax Scout.
        </p>
      </div>

      {/* REGION SWITCHER */}
      <div className="flex bg-gray-900 border border-white/5 p-1 rounded-2xl w-full max-w-sm">
        <button
          onClick={() => {
            setRegion("Local");
            setActiveMethod("Card");
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
            region === "Local" ?
              "bg-indigo-600 text-white shadow-lg"
            : "text-gray-500 hover:text-gray-300"
          }`}
        >
          <MdOutlineLocationOn size={16} /> Africa (Local)
        </button>
        <button
          onClick={() => {
            setRegion("International");
            setActiveMethod("Card");
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
            region === "International" ?
              "bg-indigo-600 text-white shadow-lg"
            : "text-gray-500 hover:text-gray-300"
          }`}
        >
          <MdPublic size={16} /> International
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full max-w-5xl">
        {/* LEFT DYNAMIC FORM */}
        <motion.div
          layout
          className="flex-1 bg-gray-900 shadow-2xl rounded-[2.5rem] p-8 md:p-10 border border-white/5 relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-8">
            <div className="bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700 transition">
              <MdOutlineCancel className="text-gray-400 text-xl" />
            </div>
            <div className="text-right">
              <p className="text-[10px] text-indigo-400 uppercase font-black tracking-widest mb-1">
                Total to Pay
              </p>
              <h2 className="font-black text-white text-3xl tracking-tighter">
                {paymentDetails.symbol} {paymentDetails.amount}
              </h2>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMethod + region}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderForm()}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-center gap-2">
            <MdLock className="text-indigo-500" />
            <p className="text-gray-500 text-[10px] tracking-widest uppercase font-bold">
              Secure 256-bit SSL Encrypted Payment
            </p>
          </div>
        </motion.div>

        {/* RIGHT PAYMENT OPTIONS */}
        <div className="w-full lg:w-80 space-y-4">
          <div className="bg-gray-900 rounded-[2rem] p-6 border border-white/5">
            <p className="text-gray-500 font-black text-[10px] mb-6 uppercase tracking-[0.2em]">
              Select Method
            </p>
            <div className="grid grid-cols-1 gap-3">
              <PaymentOption
                icon={<IoCardSharp />}
                label="Card"
                active={activeMethod === "Card"}
                onClick={() => setActiveMethod("Card")}
              />
              {region === "Local" ?
                <>
                  <PaymentOption
                    icon={<TbTransfer />}
                    label="Transfer"
                    active={activeMethod === "Transfer"}
                    onClick={() => setActiveMethod("Transfer")}
                  />
                  <PaymentOption
                    icon={<FaHashtag />}
                    label="USSD Code"
                    active={activeMethod === "USSD"}
                    onClick={() => setActiveMethod("USSD")}
                  />
                  <PaymentOption
                    icon={<RiBankFill />}
                    label="Banking"
                    active={activeMethod === "Bank"}
                    onClick={() => setActiveMethod("Bank")}
                  />
                </>
              : <>
                  <PaymentOption
                    icon={<FaGooglePay />}
                    label="Google Pay"
                    active={activeMethod === "Google Pay"}
                    onClick={() => setActiveMethod("Google Pay")}
                  />
                  <PaymentOption
                    icon={<IoLogoApple />}
                    label="Apple Pay"
                    active={activeMethod === "Apple Pay"}
                    onClick={() => setActiveMethod("Apple Pay")}
                  />
                </>
              }
            </div>
          </div>

          {/* Value Prop Card */}
          <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-3xl p-6">
            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <FaCheckCircle className="text-indigo-400" /> Lifetime Access
            </h4>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>• All 50+ Current Courses</li>
              <li>• All Future Updates</li>
              <li>• Downloadable Resources</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- REFINED SUB-COMPONENTS --- */

const CardForm = ({ details }) => (
  <div className="space-y-5">
    <div>
      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">
        Cardholder
      </label>
      <input
        type="text"
        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500 transition-all"
        placeholder="Enter name on card"
      />
    </div>
    <div>
      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">
        Card Number
      </label>
      <input
        type="text"
        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500 transition-all"
        placeholder="0000 0000 0000 0000"
      />
    </div>
    <div className="flex gap-4">
      <div className="flex-1">
        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">
          Expiry
        </label>
        <input
          type="text"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500"
          placeholder="MM/YY"
        />
      </div>
      <div className="flex-1">
        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">
          CVV
        </label>
        <input
          type="password"
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500"
          placeholder="123"
        />
      </div>
    </div>
    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-[1.5rem] font-bold shadow-xl shadow-indigo-600/20 transition-all mt-6">
      Pay {details.symbol} {details.amount}
    </button>
  </div>
);

const DigitalWalletForm = ({ type }) => (
  <div className="text-center py-6">
    <div className="bg-white/5 rounded-3xl p-10 mb-6 inline-block">
      {type === "Google" ?
        <FaGooglePay className="text-7xl text-white" />
      : <IoLogoApple className="text-7xl text-white" />}
    </div>
    <p className="text-gray-400 text-sm mb-8">
      Authorizing via your secure device keychain...
    </p>
    <button
      className={`w-full py-5 rounded-[1.5rem] font-bold flex items-center justify-center gap-2 transition-all ${type === "Apple" ? "bg-white text-black" : "bg-indigo-600 text-white"}`}
    >
      Pay with {type} Pay
    </button>
  </div>
);

const UssdForm = ({ details }) => (
  <div className="space-y-6">
    <div className="bg-indigo-500/10 p-4 rounded-2xl border border-indigo-500/20 text-center">
      <p className="text-xs text-indigo-300 font-medium">
        Dial the code below on your mobile device to pay.
      </p>
    </div>
    <select className="w-full px-5 py-4 bg-gray-800 border border-white/10 rounded-2xl text-white outline-none">
      <option>GTBank (*737#)</option>
      <option>Zenith Bank (*966#)</option>
      <option>Kuda Bank</option>
    </select>
    <div className="text-center p-8 border-2 border-dashed border-indigo-500/30 rounded-[2rem] bg-indigo-500/5">
      <p className="text-4xl font-black text-white tracking-tighter">
        *737*1*{details.amount}#
      </p>
      <p className="text-indigo-400 text-[10px] font-bold mt-2 uppercase">
        Tap to copy code
      </p>
    </div>
  </div>
);

const TransferForm = ({ details }) => (
  <div className="space-y-5">
    <p className="text-sm text-gray-400">
      Transfer exactly{" "}
      <span className="text-white font-bold">
        {details.symbol} {details.amount}
      </span>{" "}
      to:
    </p>
    <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-4">
      <div>
        <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">
          Bank
        </p>
        <p className="text-white font-bold">Wema Bank / Providus</p>
      </div>
      <div>
        <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">
          Account Number
        </p>
        <p className="text-3xl font-mono text-indigo-400 font-black tracking-tighter">
          7829103942
        </p>
      </div>
      <div>
        <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">
          Beneficiary
        </p>
        <p className="text-white font-bold uppercase">SyntaxScout Global Ltd</p>
      </div>
    </div>
    <button className="w-full bg-indigo-600 text-white py-5 rounded-[1.5rem] font-bold shadow-lg">
      I've sent the money
    </button>
  </div>
);

const BankForm = () => (
  <div className="grid grid-cols-2 gap-4">
    {["Kuda", "GTBank", "Access", "UBA"].map((bank) => (
      <button
        key={bank}
        className="py-6 border border-white/10 rounded-2xl font-bold text-gray-300 hover:border-indigo-500 hover:bg-indigo-500/5 transition-all"
      >
        {bank}
      </button>
    ))}
  </div>
);

function PaymentOption({ icon, label, active, onClick }) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all border
        ${active ? "bg-indigo-600 border-indigo-400 shadow-xl" : "bg-white/5 border-transparent hover:bg-white/10 text-gray-400"}
      `}
    >
      <div className={`text-xl ${active ? "text-white" : "text-indigo-500"}`}>
        {icon}
      </div>
      <span
        className={`font-bold text-xs ${active ? "text-white" : "text-gray-300"}`}
      >
        {label}
      </span>
    </motion.div>
  );
}
