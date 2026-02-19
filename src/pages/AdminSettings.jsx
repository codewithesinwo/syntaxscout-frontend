import React, { useState } from "react";
import {
  Settings,
  Bell,
  Palette,
  Globe,
  CreditCard,
  ShieldCheck,
  Mail,
  Save,
  ChevronDown,
  ToggleLeft,
  ToggleRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  UserCheck,
  Zap,
  MessageSquare,
} from "lucide-react";

export default function AdminSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  });

  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-6 lg:p-8 text-gray-100">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 lg:gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Admin Settings
            </h1>
            <p className="text-gray-400 text-sm lg:text-base mt-1.5">
              Customize platform preferences, security, and integrations
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 lg:py-3 rounded-xl font-bold text-sm lg:text-base transition-all shadow-lg shadow-indigo-600/20 w-full sm:w-auto active:scale-95">
            <Save size={18} /> Save All Changes
          </button>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Account Security */}
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white">
                Security
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-medium text-white">
                    Two-Factor Auth
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Add extra security to your account
                  </p>
                </div>
                <button
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`p-1 rounded-full ${twoFactor ? "bg-emerald-500" : "bg-gray-700"}`}
                >
                  {twoFactor ?
                    <ToggleRight size={24} className="text-white" />
                  : <ToggleLeft size={24} className="text-gray-400" />}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-medium text-white">
                    Password Reset
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Change your admin password
                  </p>
                </div>
                <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                  Reset Now
                </button>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Session Management
                </p>
                <button className="w-full py-3 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 rounded-xl font-medium text-sm transition-colors">
                  Log Out All Devices
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                <Bell size={24} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white">
                Notifications
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <p className="text-base font-medium text-white">
                    Email Alerts
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      email: !prev.email,
                    }))
                  }
                  className={`p-1 rounded-full ${notifications.email ? "bg-emerald-500" : "bg-gray-700"}`}
                >
                  {notifications.email ?
                    <ToggleRight size={24} className="text-white" />
                  : <ToggleLeft size={24} className="text-gray-400" />}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap size={18} className="text-gray-400" />
                  <p className="text-base font-medium text-white">
                    Push Notifications
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications((prev) => ({ ...prev, push: !prev.push }))
                  }
                  className={`p-1 rounded-full ${notifications.push ? "bg-emerald-500" : "bg-gray-700"}`}
                >
                  {notifications.push ?
                    <ToggleRight size={24} className="text-white" />
                  : <ToggleLeft size={24} className="text-gray-400" />}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare size={18} className="text-gray-400" />
                  <p className="text-base font-medium text-white">SMS Alerts</p>
                </div>
                <button
                  onClick={() =>
                    setNotifications((prev) => ({ ...prev, sms: !prev.sms }))
                  }
                  className={`p-1 rounded-full ${notifications.sms ? "bg-emerald-500" : "bg-gray-700"}`}
                >
                  {notifications.sms ?
                    <ToggleRight size={24} className="text-white" />
                  : <ToggleLeft size={24} className="text-gray-400" />}
                </button>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
                <Palette size={24} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white">
                Appearance
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                  Theme
                </label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="dark">Dark Mode</option>
                  <option value="light">Light Mode</option>
                  <option value="system">System Default</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>

          {/* Integrations */}
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl md:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Globe size={24} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white">
                Integrations
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard size={20} className="text-gray-400" />
                  <p className="text-base font-medium text-white">
                    Stripe Payments
                  </p>
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                  Connected
                </span>
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-gray-400" />
                  <p className="text-base font-medium text-white">
                    Mailchimp Email
                  </p>
                </div>
                <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                  Connect
                </button>
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <UserCheck size={20} className="text-gray-400" />
                  <p className="text-base font-medium text-white">
                    Google Analytics
                  </p>
                </div>
                <span className="text-xs font-medium text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full">
                  Disconnected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
