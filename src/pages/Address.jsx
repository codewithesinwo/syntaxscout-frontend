import React, { useState } from "react";

const Address = () => {
  const [isBillingSame, setIsBillingSame] = useState(true);

  // Mapping array for form fields
  const addressFields = [
    {
      label: "Street Address",
      placeholder: "123 React Lane",
      colSpan: "md:col-span-2",
    },
    { label: "City", placeholder: "Lagos", colSpan: "" },
    { label: "State / Province", placeholder: "Lagos State", colSpan: "" },
    { label: "ZIP / Postal Code", placeholder: "100001", colSpan: "" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 mt-15 md:p-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Address Details</h1>
          <p className="text-gray-400">
            Manage your primary shipping and billing addresses.
          </p>
        </header>

        <form className="space-y-8">
          {/* Mapped Address Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-900/30 border border-gray-800 rounded-2xl">
            {addressFields.map((field, index) => (
              <div key={index} className={field.colSpan}>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  {field.label}
                </label>
                <input
                  type="text"
                  className="w-full bg-black border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition text-gray-200"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            {/* Country Dropdown (handled separately due to select tag) */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Country
              </label>
              <select className="w-full bg-black border border-gray-800 rounded-lg p-3 focus:border-indigo-500 outline-none transition text-gray-400 appearance-none">
                <option>Nigeria</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>

          {/* Interactive Toggle Switch */}
          <div
            onClick={() => setIsBillingSame(!isBillingSame)}
            className="flex items-center gap-4 p-4 border border-dashed border-gray-800 rounded-xl cursor-pointer hover:bg-gray-900/20 transition"
          >
            <div
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${isBillingSame ? "bg-indigo-600" : "bg-gray-700"}`}
            >
              <div
                className={`absolute top-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all duration-300 ${isBillingSame ? "right-1" : "left-1"}`}
              ></div>
            </div>
            <span className="text-sm text-gray-300 select-none">
              Billing address is the same as shipping
            </span>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="submit"
              className="bg-white text-black px-10 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Update Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
