import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import {
  FaUser,
  FaBell,
  FaShieldAlt,
  FaCog,
  FaSave,
  FaTimes,
  FaCheck,
  FaExclamationTriangle,
  FaInfoCircle,
  FaSpinner,
  FaCreditCard,
  FaDownload,
  FaUndo,
  FaPalette,
  FaBrain,
  FaGraduationCap,
  FaFileExport,
  FaTrashAlt,
  FaEye,
  FaTextHeight,
  FaRunning,
} from "react-icons/fa";

export default function DashboardSetting() {
  const { darkMode } = useTheme();

  // Existing state (profile, privacy, notifications, account, coursePurchaseData) remains unchanged...
  // ... (keep all your existing useState declarations)

  // NEW STATES
  const [appearance, setAppearance] = useState({
    theme: "system", // system, light, dark
    accentColor: "teal", // teal, blue, purple, orange
  });

  const [learningPrefs, setLearningPrefs] = useState({
    dailyGoalMinutes: 60,
    studyReminders: true,
    reminderTime: "09:00",
    preferredFormat: "video", // video, reading, interactive
    autoPlayVideos: true,
    subtitles: true,
  });

  const [subscription, setSubscription] = useState({
    plan: "Premium Monthly",
    status: "active",
    nextBillingDate: "2026-02-01",
    nextBillingAmount: 14.99,
    paymentMethod: "Visa ending in 4242",
  });

  const [accessibility, setAccessibility] = useState({
    fontSize: "medium", // small, medium, large
    reducedMotion: false,
    highContrast: false,
  });

  // Updated sections list
  const sections = [
    { id: "profile", label: "Profile Settings", icon: FaUser },
    { id: "privacy", label: "Privacy", icon: FaShieldAlt },
    { id: "notifications", label: "Notifications", icon: FaBell },
    { id: "appearance", label: "Appearance", icon: FaPalette },
    { id: "learning", label: "Learning Preferences", icon: FaBrain },
    { id: "account", label: "Account Security", icon: FaCog },
    { id: "certificates", label: "Certificates", icon: FaGraduationCap },
    { id: "course-purchase", label: "Courses & Billing", icon: FaCreditCard },
    { id: "subscription", label: "Subscription", icon: FaCreditCard },
    { id: "data", label: "Data & Privacy", icon: FaFileExport },
    { id: "accessibility", label: "Accessibility", icon: FaEye },
  ];

  // ... keep your existing helpers: validateProfile, validateAccount, handleSave, Tooltip, renderToggle

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 mt-16 min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Updated with new sections */}
          <aside className="lg:col-span-1">
            <div
              className={`rounded-xl shadow-lg p-5 ${
                darkMode ? "bg-neutral-900" : "bg-white"
              }`}
            >
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-lg font-medium transition-all ${
                        activeSection === section.id
                          ? "bg-teal-600 text-black shadow-md"
                          : darkMode
                          ? "hover:bg-neutral-800 text-gray-200"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Icon className="text-xl" />
                      <span>{section.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className={`rounded-xl shadow-lg p-8 ${
                  darkMode ? "bg-neutral-900" : "bg-white"
                }`}
              >
                {/* Existing sections: profile, privacy, notifications, account, course-purchase remain unchanged */}

                {/* NEW: Appearance */}
                {activeSection === "appearance" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Appearance</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Theme Preference
                        </label>
                        <select
                          value={appearance.theme}
                          onChange={(e) =>
                            setAppearance({
                              ...appearance,
                              theme: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-2.5 border rounded-lg ${
                            darkMode
                              ? "bg-neutral-800 border-gray-600"
                              : "bg-gray-50 border-gray-300"
                          }`}
                        >
                          <option value="system">Follow System</option>
                          <option value="light">Light Mode</option>
                          <option value="dark">Dark Mode</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Accent Color
                        </label>
                        <div className="grid grid-cols-4 gap-4">
                          {["teal", "blue", "purple", "orange"].map((color) => (
                            <button
                              key={color}
                              onClick={() =>
                                setAppearance({
                                  ...appearance,
                                  accentColor: color,
                                })
                              }
                              className={`h-12 rounded-lg border-4 transition-all ${
                                appearance.accentColor === color
                                  ? "border-white shadow-lg"
                                  : "border-transparent"
                              }`}
                              style={{
                                backgroundColor:
                                  color === "teal"
                                    ? "#0d9488"
                                    : color === "blue"
                                    ? "#2563eb"
                                    : color === "purple"
                                    ? "#9333ea"
                                    : "#f97316",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW: Learning Preferences */}
                {activeSection === "learning" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Learning Preferences
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Daily Study Goal (minutes)
                        </label>
                        <input
                          type="number"
                          min="15"
                          max="300"
                          value={learningPrefs.dailyGoalMinutes}
                          onChange={(e) =>
                            setLearningPrefs({
                              ...learningPrefs,
                              dailyGoalMinutes: Number(e.target.value),
                            })
                          }
                          className={`w-full px-4 py-2.5 border rounded-lg ${
                            darkMode ? "bg-neutral-800" : "bg-gray-50"
                          }`}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">
                            Daily Study Reminders
                          </span>
                          <p className="text-sm text-gray-500">
                            Get a nudge to meet your goal
                          </p>
                        </div>
                        {renderToggle(learningPrefs.studyReminders, (v) =>
                          setLearningPrefs({
                            ...learningPrefs,
                            studyReminders: v,
                          })
                        )}
                      </div>

                      {learningPrefs.studyReminders && (
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Reminder Time
                          </label>
                          <input
                            type="time"
                            value={learningPrefs.reminderTime}
                            onChange={(e) =>
                              setLearningPrefs({
                                ...learningPrefs,
                                reminderTime: e.target.value,
                              })
                            }
                            className={`px-4 py-2.5 border rounded-lg ${
                              darkMode ? "bg-neutral-800" : "bg-gray-50"
                            }`}
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Preferred Content Format
                        </label>
                        <select
                          value={learningPrefs.preferredFormat}
                          onChange={(e) =>
                            setLearningPrefs({
                              ...learningPrefs,
                              preferredFormat: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-2.5 border rounded-lg ${
                            darkMode
                              ? "bg-neutral-800 border-gray-600"
                              : "bg-gray-50 border-gray-300"
                          }`}
                        >
                          <option value="video">Video Lessons</option>
                          <option value="reading">Reading & Text</option>
                          <option value="interactive">
                            Interactive Exercises
                          </option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Auto-play next video</span>
                          {renderToggle(learningPrefs.autoPlayVideos, (v) =>
                            setLearningPrefs({
                              ...learningPrefs,
                              autoPlayVideos: v,
                            })
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Always show subtitles</span>
                          {renderToggle(learningPrefs.subtitles, (v) =>
                            setLearningPrefs({ ...learningPrefs, subtitles: v })
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW: Certificates */}
                {activeSection === "certificates" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Certificates & Achievements
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      {coursePurchaseData.purchasedCourses
                        .filter((c) => c.completed)
                        .map((course) => (
                          <div
                            key={course.id}
                            className={`p-6 rounded-xl border ${
                              darkMode
                                ? "bg-neutral-800 border-gray-700"
                                : "bg-gray-50 border-gray-300"
                            }`}
                          >
                            <div className="flex justify-between items-center mb-4">
                              <h4 className="font-bold text-lg">
                                {course.title}
                              </h4>
                              <FaGraduationCap className="text-3xl text-teal-500" />
                            </div>
                            <p className="text-sm opacity-80 mb-4">
                              Completed on {new Date().toLocaleDateString()}
                            </p>
                            <button className="w-full bg-teal-600 hover:bg-teal-500 text-black font-medium py-3 rounded-lg flex items-center justify-center gap-2">
                              <FaDownload /> Download Certificate (PDF)
                            </button>
                          </div>
                        ))}
                      {coursePurchaseData.purchasedCourses.filter(
                        (c) => c.completed
                      ).length === 0 && (
                        <p className="text-center col-span-2 py-10 text-gray-500">
                          No certificates yet. Complete a course to earn one!
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* NEW: Subscription */}
                {activeSection === "subscription" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Subscription
                    </h2>
                    <div className="space-y-6">
                      <div
                        className={`p-6 rounded-xl ${
                          darkMode ? "bg-neutral-800" : "bg-gray-50"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h3 className="text-xl font-bold">
                              {subscription.plan}
                            </h3>
                            <p className="text-sm text-gray-500">
                              Status:{" "}
                              <span className="text-green-500 font-medium">
                                {subscription.status}
                              </span>
                            </p>
                          </div>
                          <span className="text-3xl font-bold">
                            ${subscription.nextBillingAmount}
                          </span>
                        </div>
                        <p className="text-sm mb-4">
                          Next billing: {subscription.nextBillingDate}
                        </p>
                        <p className="text-sm mb-6">
                          Payment: {subscription.paymentMethod}
                        </p>
                        <div className="flex gap-4">
                          <button className="flex-1 bg-teal-600 hover:bg-teal-500 text-black py-3 rounded-lg font-medium">
                            Update Payment Method
                          </button>
                          <button className="flex-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-3 rounded-lg font-medium transition">
                            Cancel Subscription
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW: Data & Privacy */}
                {activeSection === "data" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Data & Privacy
                    </h2>
                    <div className="space-y-6">
                      <button className="w-full text-left p-5 rounded-lg border border-gray-600 hover:bg-neutral-800 transition">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">
                              Export My Learning Data
                            </h4>
                            <p className="text-sm text-gray-500">
                              Download all your progress, notes, and activity
                            </p>
                          </div>
                          <FaDownload className="text-xl" />
                        </div>
                      </button>

                      <button className="w-full text-left p-5 rounded-lg border border-red-600 hover:bg-red-950 transition">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-red-500">
                              Delete My Account
                            </h4>
                            <p className="text-sm text-gray-500">
                              Permanently remove your account and all data
                            </p>
                          </div>
                          <FaTrashAlt className="text-xl text-red-500" />
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                {/* NEW: Accessibility */}
                {activeSection === "accessibility" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Accessibility
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Font Size
                        </label>
                        <select
                          value={accessibility.fontSize}
                          onChange={(e) =>
                            setAccessibility({
                              ...accessibility,
                              fontSize: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-2.5 border rounded-lg ${
                            darkMode
                              ? "bg-neutral-800 border-gray-600"
                              : "bg-gray-50 border-gray-300"
                          }`}
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span>Reduce motion</span>
                          <Tooltip content="Disables non-essential animations">
                            <FaInfoCircle className="text-gray-500" />
                          </Tooltip>
                        </div>
                        {renderToggle(accessibility.reducedMotion, (v) =>
                          setAccessibility({
                            ...accessibility,
                            reducedMotion: v,
                          })
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span>High contrast mode</span>
                        {renderToggle(accessibility.highContrast, (v) =>
                          setAccessibility({
                            ...accessibility,
                            highContrast: v,
                          })
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Save/Cancel Buttons - shown only for sections that need saving */}
                {(activeSection === "profile" ||
                  activeSection === "privacy" ||
                  activeSection === "notifications" ||
                  activeSection === "appearance" ||
                  activeSection === "learning" ||
                  activeSection === "account" ||
                  activeSection === "accessibility") && (
                  <div className="flex justify-end gap-4 mt-10 pt-8 border-t">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCancel}
                      disabled={loading}
                      className={`px-8 py-3 rounded-lg font-medium flex items-center gap-2 ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      <FaTimes /> Cancel
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSave(activeSection)}
                      disabled={loading}
                      className={`px-8 py-3 rounded-lg font-medium flex items-center gap-2 ${
                        loading
                          ? "bg-gray-500"
                          : "bg-teal-600 hover:bg-teal-500 text-black"
                      }`}
                    >
                      {loading ? (
                        <FaSpinner className="animate-spin" />
                      ) : (
                        <FaSave />
                      )}
                      {loading ? "Saving..." : "Save Changes"}
                    </motion.button>
                  </div>
                )}

                {/* Feedback Message */}
                <AnimatePresence>
                  {message.text && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mt-6 p-4 rounded-lg flex items-center gap-3 text-lg font-medium ${
                        message.type === "success"
                          ? "bg-teal-100 text-teal-800 border border-teal-300"
                          : "bg-red-100 text-red-800 border border-red-300"
                      }`}
                    >
                      {message.type === "success" ? (
                        <FaCheck />
                      ) : (
                        <FaExclamationTriangle />
                      )}
                      {message.text}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </motion.div>
  );
}
