import React from "react";

export default function Payment() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center p-10 items-center mt-10">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold">Get started</h2>
        <p className="text-sm mb-2">
          Already have an account?{" "}
          <a className="text-blue-600" href="#">
            Log in
          </a>
        </p>

        <label className="block text-sm mt-4 mb-1">Email</label>
        <input
          type="email"
          className="w-full border rounded-lg p-3 text-sm"
          placeholder="Email"
        />

        <div className="flex items-center gap-2 mt-3">
          <input type="checkbox" id="promo" />
          <label htmlFor="promo" className="text-sm">
            Yes, Code with Mosh can email me with promotions and news.
            (optional)
          </label>
        </div>

        <h3 className="text-lg font-semibold mt-6">Express checkout</h3>
        <button className="w-full bg-yellow-400 py-3 rounded-lg font-semibold mt-2">
          PayPal
        </button>

        <h3 className="text-lg font-semibold mt-6">Payment method</h3>
        <div className="flex items-center gap-2 text-sm mb-2 mt-1">
          <span className="text-gray-700">Card</span>
        </div>

        <label className="block text-sm mb-1">Card number</label>
        <input
          type="text"
          className="w-full border rounded-lg p-3 text-sm"
          placeholder="1234 1234 1234 1234"
        />

        <div className="flex gap-3 mt-3">
          <div className="w-1/2">
            <label className="block text-sm mb-1">Expiration date</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 text-sm"
              placeholder="MM/YY"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm mb-1">Security code</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 text-sm"
              placeholder="CVC"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" id="billing" defaultChecked />
          <label htmlFor="billing" className="text-sm">
            Billing is same as shipping information
          </label>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" id="save" defaultChecked />
          <label htmlFor="save" className="text-sm">
            Save payment method for future purchases on Teachable
          </label>
        </div>
      </div>
    </div>
  );
}
