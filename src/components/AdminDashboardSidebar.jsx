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
import { GrCertificate } from "react-icons/gr";
import { GiTeamIdea } from "react-icons/gi";

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
    href: "/admin/transactions",
    icon: <CreditCard size={20} />,
  },
  {
    name: "Team Managements",
    href: "/admin/teams",
    icon: <GiTeamIdea size={20} />,
  },
  // {
  //   name: "Certificate Management",
  //   href: "/admin/certificates",
  //   icon: <GrCertificate size={20} />,
  // },
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
      className={`bg-gray-950 border-r border-white/10 transition-all duration-300 z-50 flex flex-col group ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide px-2 my-10">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `${linkBaseStyles} ${
                isActive ?
                  "text-white shadow-lg shadow-indigo-600/20"
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
    </aside>
  );
}
