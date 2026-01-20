import React from 'react'

export default function DashboardSetting() {
  return (
    <div className={`p-6 mt-16 min-h-screen bg-gray-100 text-gray-900`}>
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Setting</h1>
            <p className="text-sm mt-1 text-gray-400">
              Your inbox for course and system messages.
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}
