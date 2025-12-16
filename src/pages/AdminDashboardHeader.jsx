import React from "react";
import { Bell } from "lucide-react";

export default function AdminDashboardHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="Admin avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
