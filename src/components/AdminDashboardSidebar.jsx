import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  BarChart3,
  MessageSquare,
  CreditCard,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
  { name: "User Management", href: "/admin/users", icon: <Users size={20} /> },
  {
    name: "Course Catalog",
    href: "/admin/courses",
    icon: <BookOpen size={20} />,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    name: "Transactions",
    href: "/admin/billing",
    icon: <CreditCard size={20} />,
  },
  {
    name: "Support Tickets",
    href: "/admin/support",
    icon: <MessageSquare size={20} />,
  },
  { name: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
];

export default function AdminDashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const linkBaseStyles =
    "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 font-medium my-1 mx-3";

  return (
    <aside
      className={`h-screen bg-gray-950 border-r border-white/10 transition-all duration-300 z-50 flex flex-col group ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >


      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-0 top-24 bg-indigo-600 text-white p-1 rounded-full border-4 border-gray-950 hover:scale-110 transition-transform shadow-xl"
      >
        {isCollapsed ?
          <ChevronRight size={14} />
        : <ChevronLeft size={14} />}
      </button>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide px-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `${linkBaseStyles} ${
                isActive ?
                  "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
              }`
            }
          >
            <div className="shrink-0">{item.icon}</div>
            {!isCollapsed && (
              <span className="whitespace-nowrap animate-in slide-in-from-left-2 duration-300">
                {item.name}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-white/5 mt-auto">
        <button
          className={`${linkBaseStyles} w-[calc(100%-24px)] text-rose-400 hover:bg-rose-500/10 hover:text-rose-300`}
          onClick={() => console.log("Logging out...")}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="whitespace-nowrap">Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
