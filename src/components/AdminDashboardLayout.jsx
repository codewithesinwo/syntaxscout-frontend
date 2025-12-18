import AdminDashboardHeader from "../pages/AdminDashboardHeader";
import AdminDashboardSideShow from "../pages/AdminDashboardSideShow";
import { Outlet } from "react-router-dom";

export default function AdminDashboardLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen overflow-hidden">
      <AdminDashboardHeader />

        {/* <main className="flex-1 overflow-y-auto bg-slate-100">
            <div className="flex h-full">
              <div className="hidden md:flex">
                <AdminDashboardSideShow />
        </div>
          <Outlet />
      </div>
        </main> */}

             <main className="w-full flex">
                <div className="hidden md:flex ">
                  <AdminDashboardSideShow />
                </div>
        
                <div className=" flex-1 overflow-y-scroll h-screen pb-0 ">
                  <Outlet />
              </div>
              </main>
    </div>
  );
}
