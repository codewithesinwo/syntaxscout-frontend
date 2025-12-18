// import React from "react";
// import { MdOutlineCancel } from "react-icons/md";
// import { IoCardSharp } from "react-icons/io5";
// import { FaGooglePay, FaHashtag } from "react-icons/fa";
// import { RiBankFill } from "react-icons/ri";
// import { TbTransfer } from "react-icons/tb";
// import { FaAngleDown } from "react-icons/fa6";

// export default function Payment() {
//   return (
//     <div
//       className="
//         min-h-screen bg-white py-10 px-4 
//         flex flex-col md:flex-row 
//         items-center md:items-start 
//         justify-center gap-6 mt-15
//       "
//     >
//       {/* LEFT CARD FORM */}
//       <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8 border">
//         <div className="flex justify-between items-center mb-3">
//           <MdOutlineCancel className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl font-bold" />
//           <h2 className="font-bold text-gray-800 text-lg">NGN 1,000</h2>
//         </div>

//         <div className="border-b mb-6"></div>

//         <p className="text-center text-gray-900 font-medium mb-6">
//           Enter your card details to pay
//         </p>

//         <form className="space-y-5">
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               CARD NUMBER
//             </label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg 
//               focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               placeholder="0000 0000 0000 0000"
//             />
//           </div>

//           <div className="flex space-x-4">
//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 VALID TILL
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg 
//                 focus:ring-2 focus:ring-yellow-400"
//                 placeholder="MM/YY"
//               />
//             </div>

//             <div className="w-1/2">
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 CVV
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg 
//                 focus:ring-2 focus:ring-yellow-400"
//                 placeholder="123"
//               />
//             </div>
//           </div>

//           <div className="flex items-center mt-2">
//             <input type="checkbox" id="saveCard" />
//             <label htmlFor="saveCard" className="ml-2 text-gray-700">
//               Remember this card next time
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-black py-3 rounded-lg 
//             font-medium hover:bg-yellow-600 transition"
//           >
//             Pay NGN 1,000
//           </button>
//         </form>

//         <div className="flex justify-center mt-5">
//           <p className="text-gray-500 text-xs border px-3 py-1 rounded-lg">
//             🔒 SECURED BY SYNTAXSCOUT
//           </p>
//         </div>
//       </div>

//       {/* PAYMENT OPTIONS */}
//       <div
//         className="
//         w-full max-w-xs bg-gray-100 shadow-md rounded-3xl p-6  
//       "
//       >
//         <p className="text-center text-gray-950 font-semibold mb-6">
//           PAYMENT OPTIONS
//         </p>

//         <PaymentOption icon={<IoCardSharp />} label="Card" active />
//         <PaymentOption icon={<FaGooglePay />} label="Google Pay" />
//         <PaymentOption icon={<FaHashtag />} label="USSD" />
//         <PaymentOption icon={<RiBankFill />} label="Bank" />
//         <PaymentOption icon={<TbTransfer />} label="Bank Transfer" />

//         <div className="flex justify-center items-center mt-5 cursor-pointer text-gray-700">
//           <span>More payment options</span>
//           <FaAngleDown className="ml-2" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function PaymentOption({ icon, label, active }) {
//   return (
//     <div
//       className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer
//         ${active ? "bg-yellow-100 shadow-md" : "hover:bg-gray-200"}
//       `}
//     >
//       <div className="p-3 bg-white rounded-full shadow-sm ml-6 text-xl">
//         {icon}
//       </div>
//       <h1 className="text-gray-950 font-medium">{label}</h1>
//     </div>
//   );
// }


import React, { useState } from "react";
import { MdOutlineCancel, MdPublic, MdOutlineLocationOn } from "react-icons/md";
import { IoCardSharp, IoLogoApple } from "react-icons/io5";
import { FaGooglePay, FaHashtag } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { TbTransfer } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";

export default function Payment() {
  const [activeMethod, setActiveMethod] = useState("Card");
  const [region, setRegion] = useState("Local"); // Local (Africa) or International

  // Dynamic currency and amount based on region
  const paymentDetails =
    region === "Local"
      ? { symbol: "NGN", amount: "1,000" }
      : { symbol: "USD", amount: "10.00" };

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
    <div className="min-h-screen bg-slate-50 py-10 px-4 flex flex-col items-center justify-center gap-6">
      {/* REGION SWITCHER */}
      <div className="flex bg-gray-200 p-1 rounded-xl w-full max-w-sm mb-4">
        <button
          onClick={() => {
            setRegion("Local");
            setActiveMethod("Card");
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition ${
            region === "Local" ? "bg-white shadow text-black" : "text-gray-500"
          }`}
        >
          <MdOutlineLocationOn /> Africa (Local)
        </button>
        <button
          onClick={() => {
            setRegion("International");
            setActiveMethod("Card");
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition ${
            region === "International"
              ? "bg-white shadow text-black"
              : "text-gray-500"
          }`}
        >
          <MdPublic /> International
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 w-full">
        {/* LEFT DYNAMIC FORM */}
        <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-gray-100 min-h-[520px]">
          <div className="flex justify-between items-center mb-3">
            <MdOutlineCancel className="text-gray-400 hover:text-gray-600 cursor-pointer text-2xl" />
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase font-bold">
                Payable Amount
              </p>
              <h2 className="font-black text-gray-800 text-xl">
                {paymentDetails.symbol} {paymentDetails.amount}
              </h2>
            </div>
          </div>
          <div className="border-b mb-6"></div>

          <div className="flex-grow">{renderForm()}</div>

          <div className="flex justify-center mt-8">
            <p className="text-gray-400 text-[10px] tracking-widest border px-3 py-1 rounded-full uppercase font-bold">
              PCI-DSS Compliant Secure Server
            </p>
          </div>
        </div>

        {/* RIGHT PAYMENT OPTIONS */}
        <div className="w-full max-w-xs bg-white shadow-xl rounded-3xl p-6 border border-gray-100">
          <p className="text-gray-400 font-bold text-[11px] mb-4 uppercase tracking-widest">
            Select Method
          </p>

          <div className="space-y-2">
            <PaymentOption
              icon={<IoCardSharp />}
              label="Credit/Debit Card"
              active={activeMethod === "Card"}
              onClick={() => setActiveMethod("Card")}
            />

            {/* Conditional Methods based on Region */}
            {region === "Local" ? (
              <>
                <PaymentOption
                  icon={<TbTransfer />}
                  label="Bank Transfer"
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
                  label="Internet Banking"
                  active={activeMethod === "Bank"}
                  onClick={() => setActiveMethod("Bank")}
                />
              </>
            ) : (
              <>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- DYNAMIC FORM SUB-COMPONENTS --- */

const CardForm = ({ details }) => (
  <form className="space-y-4 animate-in fade-in duration-500">
    <p className="text-sm text-gray-500 mb-4">
      Secure card payment for Visa, Mastercard, and Verve.
    </p>
    <div>
      <label className="text-[10px] font-bold text-gray-400 uppercase">
        Cardholder Name
      </label>
      <input
        type="text"
        className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="John Doe"
      />
    </div>
    <div>
      <label className="text-[10px] font-bold text-gray-400 uppercase">
        Card Number
      </label>
      <input
        type="text"
        className="w-full px-4 py-3 bg-gray-50 border rounded-xl outline-none"
        placeholder="**** **** **** ****"
      />
    </div>
    <div className="flex gap-4">
      <div className="flex-1">
        <label className="text-[10px] font-bold text-gray-400 uppercase">
          Expiry
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 bg-gray-50 border rounded-xl"
          placeholder="MM/YY"
        />
      </div>
      <div className="flex-1">
        <label className="text-[10px] font-bold text-gray-400 uppercase">
          CVV
        </label>
        <input
          type="password"
          size="3"
          className="w-full px-4 py-3 bg-gray-50 border rounded-xl"
          placeholder="123"
        />
      </div>
    </div>
    <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all mt-4">
      Pay {details.symbol} {details.amount}
    </button>
  </form>
);

const DigitalWalletForm = ({ type }) => (
  <div className="text-center py-10 animate-in zoom-in-95 duration-300">
    {type === "Google" ? (
      <FaGooglePay className="text-9xl mx-auto text-gray-800" />
    ) : (
      <IoLogoApple className="text-9xl mx-auto text-gray-800" />
    )}
    <p className="text-gray-500 mt-4">
      Authorization will be requested from your device.
    </p>
    <button className="w-full mt-10 bg-black text-white py-4 rounded-2xl font-bold">
      Confirm with {type} Pay
    </button>
  </div>
);

const UssdForm = ({ details }) => (
  <div className="space-y-6 animate-in fade-in">
    <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
      <p className="text-xs text-orange-700 font-medium text-center">
        Best for local mobile users without internet banking.
      </p>
    </div>
    <select className="w-full p-4 bg-gray-50 border rounded-xl outline-none">
      <option>Select Bank (e.g., GTBank, Kuda)</option>
      <option>*737# GTBank</option>
      <option>*966# Zenith Bank</option>
    </select>
    <div className="text-center p-6 border-2 border-dashed rounded-3xl">
      <p className="text-3xl font-black text-gray-800 tracking-tighter">
        *737*1*{details.amount}#
      </p>
    </div>
  </div>
);

const TransferForm = ({ details }) => (
  <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
    <p className="text-sm text-gray-500">
      Transfer exactly{" "}
      <span className="font-bold text-black">
        {details.symbol} {details.amount}
      </span>{" "}
      to:
    </p>
    <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 space-y-3">
      <div>
        <p className="text-[10px] text-blue-400 font-bold uppercase">Bank</p>
        <p className="font-bold">Wema Bank / Providus</p>
      </div>
      <div>
        <p className="text-[10px] text-blue-400 font-bold uppercase">
          Account Number
        </p>
        <p className="text-2xl font-mono font-bold tracking-tighter">
          7829103942
        </p>
      </div>
      <div>
        <p className="text-[10px] text-blue-400 font-bold uppercase">
          Beneficiary
        </p>
        <p className="font-bold">SYNTAXSCOUT GLOBAL LTD</p>
      </div>
    </div>
    <p className="text-[10px] text-center text-gray-400 italic">
      This account expires in 30:00 minutes
    </p>
    <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg">
      I've made the transfer
    </button>
  </div>
);

const BankForm = () => (
  <div className="space-y-4 animate-in fade-in">
    <p className="text-sm text-gray-500">
      Login to your local bank portal to authorize this payment.
    </p>
    <div className="grid grid-cols-2 gap-3">
      {["Kuda", "GTBank", "Access", "UBA"].map((bank) => (
        <button
          key={bank}
          className="p-4 border rounded-xl font-bold hover:border-blue-500 transition"
        >
          {bank}
        </button>
      ))}
    </div>
  </div>
);

function PaymentOption({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all duration-300
        ${
          active
            ? "bg-blue-600 text-white shadow-lg scale-105"
            : "bg-gray-50 text-gray-500 hover:bg-gray-100"
        }
      `}
    >
      <div className={`text-xl ${active ? "text-white" : "text-blue-500"}`}>
        {icon}
      </div>
      <span className="font-bold text-xs">{label}</span>
    </div>
  );
}
