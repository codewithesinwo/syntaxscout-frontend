// import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import AdminDashboardHeader from "./AdminDashboardHeader";

export default function AdminDashboardLayout() {
   return (
      <div className="grid grid-rows-[auto_1fr] h-screen overflow-hidden">
        <AdminDashboardHeader />
  
        <main className="w-full flex">
          <div className="hidden md:flex ">
            <AdminDashboardSidebar/>
          </div>
  
          <div className=" flex-1 overflow-y-scroll h-screen pb-0 ">
            <Outlet />
        </div>
        </main>
      </div>
    );
}
