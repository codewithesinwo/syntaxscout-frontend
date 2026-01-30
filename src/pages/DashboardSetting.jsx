import React, { useState, useRef } from "react";
import {
  FaUser,
  FaBell,
  FaLock,
  FaCamera,
  FaSave,
  FaExclamationTriangle,
  FaCheckCircle,
  FaPalette,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function DashboardSetting() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("Account");
  const [showToast, setShowToast] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Image Upload Logic
  const [profileImg, setProfileImg] = useState(null);
  const fileInputRef = useRef(null);

  const tabs = [
    { name: "Account", icon: <FaUser />, desc: "Personal info & avatar" },
    { name: "Security", icon: <FaLock />, desc: "Password & protection" },
    { name: "Appearance", icon: <FaPalette />, desc: "Theme preferences" },
  ];

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1200);
  };

  return (
    <div
      className={`p-4 md:p-10 mt-16 min-h-screen transition-all duration-500 ${
        darkMode ? "bg-[#0a0a0a] text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      {/* SUCCESS TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-10 right-10 z-[100] flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl font-bold"
          >
            <FaCheckCircle /> Settings updated successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black tracking-tight mb-2">Settings</h1>
          <p className="opacity-50 text-sm font-medium">
            Manage your digital identity and account security.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* SIDEBAR NAVIGATION */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`w-full flex items-center gap-4 p-4 rounded-3xl transition-all text-left ${
                  activeTab === tab.name ?
                    "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20"
                  : darkMode ? "hover:bg-neutral-900 text-neutral-400"
                  : "hover:bg-white text-gray-500 shadow-sm border border-transparent"
                }`}
              >
                <div
                  className={`p-3 rounded-2xl ${activeTab === tab.name ? "bg-white/20" : "bg-indigo-500/10 text-indigo-500"}`}
                >
                  {tab.icon}
                </div>
                <div>
                  <p className="font-bold text-sm leading-none">{tab.name}</p>
                  <p
                    className={`text-[10px] mt-1 ${activeTab === tab.name ? "text-white/60" : "opacity-50"}`}
                  >
                    {tab.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-8 xl:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className={`p-8 md:p-12 rounded-[3rem] border ${
                  darkMode ?
                    "bg-neutral-900 border-neutral-800"
                  : "bg-white border-gray-100 shadow-sm"
                }`}
              >
                {/* ACCOUNT TAB */}
                {activeTab === "Account" && (
                  <div className="space-y-10">
                    <section>
                      <h3 className="text-lg font-black mb-6">
                        Personal Details
                      </h3>

                      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-10">
                        {/* Hidden File Input */}
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept="image/*"
                          className="hidden"
                        />

                        <div
                          onClick={handleImageClick}
                          className="relative group overflow-hidden rounded-[2.5rem] w-28 h-28 bg-indigo-600 shadow-2xl cursor-pointer"
                        >
                          {profileImg ?
                            <img
                              src={profileImg}
                              alt="Profile"
                              className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            />
                          : <div className="absolute inset-0 flex items-center justify-center text-3xl font-black text-white">
                              JD
                            </div>
                          }
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                            <FaCamera className="text-white mb-1" size={20} />
                            <span className="text-[8px] font-black uppercase text-white tracking-widest">
                              Change
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-black text-xl">John Doe</h4>
                          <p className="text-xs opacity-50 font-bold uppercase tracking-widest">
                            Premium Student Account
                          </p>
                          <button
                            onClick={() => setProfileImg(null)}
                            className="text-xs text-red-500 font-black hover:underline"
                          >
                            Remove Avatar
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormGroup
                          label="Full Name"
                          placeholder="John Doe"
                          darkMode={darkMode}
                        />
                        <FormGroup
                          label="Display Name"
                          placeholder="johndoe_ui"
                          darkMode={darkMode}
                        />
                        <FormGroup
                          label="Email"
                          placeholder="john@syntaxscout.com"
                          darkMode={darkMode}
                        />
                        <FormGroup
                          label="Location"
                          placeholder="Toronto, Canada"
                          darkMode={darkMode}
                        />
                      </div>
                    </section>

                    <div className="pt-6 border-t border-neutral-800/10 flex justify-end">
                      <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white px-10 py-4 rounded-2xl font-black text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-3"
                      >
                        {isSaving ?
                          "Saving..."
                        : <>
                            <FaSave /> Save Changes
                          </>
                        }
                      </button>
                    </div>
                  </div>
                )}

                {/* SECURITY TAB */}
                {activeTab === "Security" && (
                  <div className="space-y-8">
                    <h3 className="text-lg font-black mb-6">Security Center</h3>
                    <FormGroup
                      label="Current Password"
                      type="password"
                      darkMode={darkMode}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormGroup
                        label="New Password"
                        type="password"
                        darkMode={darkMode}
                      />
                      <FormGroup
                        label="Confirm New Password"
                        type="password"
                        darkMode={darkMode}
                      />
                    </div>

                    <div
                      className={`mt-12 p-8 rounded-[2.5rem] border ${
                        darkMode ?
                          "bg-red-500/5 border-red-500/20"
                        : "bg-red-50 border-red-100"
                      }`}
                    >
                      <div className="flex gap-4">
                        <FaExclamationTriangle className="text-red-500 mt-1" />
                        <div>
                          <h4 className="font-black text-red-500 mb-2">
                            Delete Account
                          </h4>
                          <p className="text-xs opacity-60 leading-relaxed mb-6">
                            Permanently remove your account and all associated
                            data. This action cannot be undone.
                          </p>
                          <button className="bg-red-500 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-colors">
                            Deactivate Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* APPEARANCE TAB */}
                {activeTab === "Appearance" && (
                  <div className="space-y-8">
                    <h3 className="text-lg font-black mb-6">
                      Interface Preferences
                    </h3>
                    <div
                      className={`p-6 rounded-3xl border flex items-center justify-between transition-all ${
                        darkMode ?
                          "bg-black border-neutral-800"
                        : "bg-gray-50 border-gray-100"
                      }`}
                    >
                      <div>
                        <p className="font-bold text-sm">Dark Mode</p>
                        <p className="text-xs opacity-50 mt-1">
                          Switch between light and dark themes.
                        </p>
                      </div>
                      <button
                        onClick={toggleDarkMode}
                        className={`w-14 h-8 rounded-full p-1 transition-colors relative ${darkMode ? "bg-indigo-600" : "bg-gray-300"}`}
                      >
                        <motion.div
                          animate={{ x: darkMode ? 24 : 0 }}
                          className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md"
                        >
                          {darkMode ?
                            <FaMoon size={10} className="text-indigo-600" />
                          : <FaSun size={10} className="text-amber-500" />}
                        </motion.div>
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormGroup({ label, placeholder, type = "text", darkMode }) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-black uppercase tracking-[0.15em] opacity-40 ml-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-5 rounded-2xl border outline-none text-sm font-medium transition-all focus:ring-4 focus:ring-indigo-500/10 ${
          darkMode ?
            "bg-black border-neutral-800 text-white focus:border-indigo-500"
          : "bg-gray-50 border-gray-100 focus:border-indigo-400 focus:bg-white"
        }`}
      />
    </div>
  );
}
