import AdminDashboardHeader from "../pages/AdminDashboardHeader";
import AdminDashboardSideShow from "../pages/AdminDashboardSideShow";
import { Outlet } from "react-router-dom";

export default function AdminDashboardLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <AdminDashboardHeader />

      <div className="flex h-full">
        <div className="hidden md:flex">
          <AdminDashboardSideShow />
        </div>

        <main className="flex-1 overflow-y-auto bg-slate-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
