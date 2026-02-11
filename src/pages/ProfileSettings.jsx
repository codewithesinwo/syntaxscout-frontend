import React, { useState } from "react";

const ProfileSettings = () => {
  // State for Profile Info
  const [userInfo, setUserInfo] = useState({
    fullName: "Abasiubong Esinwo",
    email: "abasiubongesinwo@gmail.com",
    password: "**********",
  });

  // State for Toggles
  const [notifications, setNotifications] = useState({
    responses: true,
    comments: true,
    promotions: false,
  });

  // Toggle Function
  const handleToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Edit Function (Simple prompt for demo, could be a modal)
  const handleEdit = (field) => {
    const newValue = prompt(`Enter new ${field}:`, userInfo[field]);
    if (newValue) {
      setUserInfo((prev) => ({ ...prev, [field]: newValue }));
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans mt-15">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <main className="flex-1 p-6 md:p-16">
          <h1 className="text-3xl font-bold mb-10">Profile</h1>

          <div className="flex flex-col-reverse lg:flex-row gap-12">
            {/* Left Column: Form Fields */}
            <div className="flex-1 space-y-0 border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50">
              <EditableField
                label="Full Name"
                value={userInfo.fullName}
                action="Edit"
                onAction={() => handleEdit("fullName")}
              />
              <EditableField
                label="Email"
                value={userInfo.email}
                action="Edit"
                onAction={() => handleEdit("email")}
                isMiddle
              />
              <EditableField
                label="Password"
                value={userInfo.password}
                action="Change"
                onAction={() => alert("Redirecting to password reset...")}
              />
            </div>

            {/* Right Column: Profile Image */}
            <div className="w-full lg:w-64 flex flex-col items-center text-center">
              <div className="group relative w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center mb-4 ring-4 ring-gray-900 cursor-pointer overflow-hidden">
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
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold">CHANGE</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed px-4">
                Profile Image
              </p>
            </div>
          </div>

          {/* Notifications Section */}
          <section className="mt-12">
            <h2 className="text-lg font-bold mb-4">Notifications</h2>

            <ToggleRow
              label="Email me when someone responds to my posts"
              isOn={notifications.responses}
              onToggle={() => handleToggle("responses")}
            />

            <ToggleRow
              label="Email me when someone comments on a discussion I've commented in."
              isOn={notifications.comments}
              onToggle={() => handleToggle("comments")}
            />

            <ToggleRow
              label="Yes, Code with Mosh can email me with promotions and news (optional)."
              isOn={notifications.promotions}
              onToggle={() => handleToggle("promotions")}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

// Reusable Editable Row Component
const EditableField = ({ label, value, action, isMiddle, onAction }) => (
  <div
    className={`p-5 flex justify-between items-center transition-colors hover:bg-gray-800/50 ${isMiddle ? "border-y border-gray-800" : ""}`}
  >
    <div>
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.1em]">
        {label}
      </p>
      <p className="text-gray-200 mt-1 font-medium">{value}</p>
    </div>
    <button
      onClick={onAction}
      className="text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors"
    >
      {action}
    </button>
  </div>
);

// Reusable Toggle Row Component
const ToggleRow = ({ label, isOn, onToggle }) => (
  <div className="flex items-center gap-4 bg-gray-900/30 p-4 rounded-xl border border-gray-800 my-4">
    <div
      onClick={onToggle}
      className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${isOn ? "bg-indigo-600" : "bg-gray-700"}`}
    >
      <div
        className={`absolute top-1 bg-white w-4 h-4 rounded-full shadow-md transition-all duration-300 ${isOn ? "right-1" : "left-1"}`}
      ></div>
    </div>
    <span className="text-gray-300 text-sm">{label}</span>
  </div>
);

export default ProfileSettings;
