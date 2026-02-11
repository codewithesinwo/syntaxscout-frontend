import React from "react";

const ProfileSettings = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans mt-15">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Main Content */}
        <main className="flex-1 p-6 md:p-16">
          <h1 className="text-3xl font-bold mb-10">Profile</h1>

          <div className="flex flex-col-reverse lg:flex-row gap-12">
            {/* Left Column: Form Fields */}
            <div className="flex-1 space-y-0 border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50">
              <EditableField
                label="Full Name"
                value="Abasiubong Esinwo"
                action="Edit"
              />
              <EditableField
                label="Email"
                value="abasiubongesinwo@gmail.com"
                action="Edit"
                isMiddle
              />
              <EditableField
                label="Password"
                value="**********"
                action="Change"
              />
            </div>

            {/* Right Column: Profile Image */}
            <div className="w-full lg:w-64 flex flex-col items-center text-center">
              <div className="w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center mb-4 ring-4 ring-gray-900">
                <svg
                  className="w-16 h-16 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed px-4">
                Profile Image 
              </p>
            </div>
          </div>

          {/* Linked Accounts Section */}
          <section className="mt-16">
            <h2 className="text-lg font-bold mb-4">Linked Accounts</h2>
            <div className="border border-gray-800 rounded-xl p-6 flex justify-between items-center bg-gray-900/30">
              <span className="text-gray-300">Log in with Teachable</span>
              <button className="text-indigo-400 text-sm font-semibold hover:text-indigo-300">
                Link
              </button>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="mt-12">
            <h2 className="text-lg font-bold mb-4">Notifications</h2>
            <div className="flex items-center gap-4 bg-gray-900/30 p-4 rounded-xl border border-gray-800 my-5">
              <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full shadow-md"></div>
              </div>
              <span className="text-gray-300 text-sm">
                Email me when someone responds to my posts
              </span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900/30 p-4 rounded-xl border border-gray-800 my-5">
              <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full shadow-md"></div>
              </div>
              <span className="text-gray-300 text-sm">
                Email me when someone comments on a discussion I've commented
                in.
              </span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900/30 p-4 rounded-xl border border-gray-800 my-5">
              <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full shadow-md"></div>
              </div>
              <span className="text-gray-300 text-sm">
                Yes, Code with Mosh can email me with promotions and news.
                (optional)
              </span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const EditableField = ({ label, value, action, isMiddle }) => (
  <div
    className={`p-5 flex justify-between items-center transition-colors hover:bg-gray-800/50 ${
      isMiddle ? "border-y border-gray-800" : ""
    }`}
  >
    <div>
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.1em]">
        {label}
      </p>
      <p className="text-gray-200 mt-1 font-medium">{value}</p>
    </div>
    <button className="text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors">
      {action}
    </button>
  </div>
);

export default ProfileSettings;
