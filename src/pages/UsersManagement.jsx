import React, { useState } from "react";
import {
  Search,
  UserPlus,
  Mail,
  ShieldCheck,
  Trash2,
  Edit,
  CheckCircle2,
  XCircle,
  Filter,
  X,
  Save,
  ChevronRight,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Admin",
    status: "Active",
    joined: "2023-10-12",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    role: "Instructor",
    status: "Active",
    joined: "2023-11-05",
  },
  {
    id: 3,
    name: "Mike Peters",
    email: "mike.p@test.com",
    role: "Student",
    status: "Suspended",
    joined: "2024-01-20",
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma.d@edu.com",
    role: "Student",
    status: "Active",
    joined: "2024-02-14",
  },
];

export default function UsersManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditClick = (user) => {
    setSelectedUser({ ...user });
    setIsEditOpen(true);
  };

  const handleUpdateUser = () => {
    setUsers(users.map((u) => (u.id === selectedUser.id ? selectedUser : u)));
    setIsEditOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-6 text-gray-100 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
              User Management
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Manage accounts and permissions.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all active:scale-95 shadow-lg shadow-indigo-600/20 w-full sm:w-auto">
            <UserPlus size={18} /> Add User
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={16}
          />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-gray-900 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        {/* Users List / Table Wrapper */}
        <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          {/* DESKTOP TABLE VIEW (Visible on lg screens and up) */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    User
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Role
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/20">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-300 bg-white/5 px-2.5 py-1 rounded-md">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest ${user.status === "Active" ? "text-emerald-400" : "text-rose-400"}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleEditClick(user)}
                        className="p-2 text-indigo-400 hover:bg-indigo-400/10 rounded-lg transition-all"
                      >
                        <Edit size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE/TABLET STACKED VIEW (Visible below lg) */}
          <div className="lg:hidden divide-y divide-white/5">
            {users.map((user) => (
              <div
                key={user.id}
                className="p-4 flex items-center justify-between hover:bg-white/[0.01] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/20 text-lg">
                    {user.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white truncate">
                      {user.name}
                    </p>
                    <p className="text-[11px] text-gray-500 truncate mb-1.5">
                      {user.email}
                    </p>

                    {/* Role and Status Stacked Under User */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {user.role}
                      </span>
                      <span
                        className={`text-[10px] font-black uppercase tracking-tighter ${user.status === "Active" ? "text-emerald-500" : "text-rose-500"}`}
                      >
                        • {user.status}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleEditClick(user)}
                  className="p-3 bg-gray-800 text-indigo-400 rounded-xl border border-white/5 active:bg-indigo-600 active:text-white transition-all shadow-sm"
                >
                  <Edit size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide-over (iPhone 6s ready) */}
      {isEditOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsEditOpen(false)}
          />
          <aside className="relative w-full sm:w-[380px] bg-gray-950 h-full shadow-2xl border-l border-white/10 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gray-900/50">
              <h2 className="text-xl font-bold text-white">Modify Account</h2>
              <button
                onClick={() => setIsEditOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {selectedUser && (
                <>
                  <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="h-20 w-20 rounded-full bg-indigo-600 flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-xl shadow-indigo-600/20">
                      {selectedUser.name.charAt(0)}
                    </div>
                    <p className="text-xl font-bold text-white">
                      {selectedUser.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedUser.email}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block mb-3">
                        Assign Role
                      </label>
                      <select
                        value={selectedUser.role}
                        onChange={(e) =>
                          setSelectedUser({
                            ...selectedUser,
                            role: e.target.value,
                          })
                        }
                        className="w-full bg-gray-900 border border-white/10 rounded-2xl px-4 py-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none appearance-none"
                      >
                        <option value="Admin">Admin</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Student">Student</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block mb-3">
                        Set Status
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() =>
                            setSelectedUser({
                              ...selectedUser,
                              status: "Active",
                            })
                          }
                          className={`flex flex-col items-center gap-2 py-4 rounded-2xl border transition-all ${selectedUser.status === "Active" ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400" : "bg-gray-900 border-white/10 text-gray-500"}`}
                        >
                          <CheckCircle2 size={20} />
                          <span className="text-xs font-bold uppercase">
                            Active
                          </span>
                        </button>
                        <button
                          onClick={() =>
                            setSelectedUser({
                              ...selectedUser,
                              status: "Suspended",
                            })
                          }
                          className={`flex flex-col items-center gap-2 py-4 rounded-2xl border transition-all ${selectedUser.status === "Suspended" ? "bg-rose-500/10 border-rose-500/50 text-rose-400" : "bg-gray-900 border-white/10 text-gray-500"}`}
                        >
                          <XCircle size={20} />
                          <span className="text-xs font-bold uppercase">
                            Hold
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="p-6 bg-gray-900/30 border-t border-white/5 space-y-3">
              <button
                onClick={handleUpdateUser}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
              >
                <Save size={20} /> Commit Changes
              </button>
              <button
                onClick={() => setIsEditOpen(false)}
                className="w-full py-3 text-sm font-semibold text-gray-500 hover:text-white transition-all"
              >
                Dismiss Edits
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
