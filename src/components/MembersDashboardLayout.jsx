import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import MembersDashboardHeader from "../pages/MembersDashboardHeader";

export default function MembersDashboardLayout() {
  const navigate=useNavigate() 


  useEffect(() => {
    const isLocalStorageToken = localStorage.getItem('token');
    if (!isLocalStorageToken) {
      navigate("/");
    }

  }, [navigate]);


  return (
    <>
      <MembersDashboardHeader />
            <main>
                {<Outlet/>}
            </main>
    </>
  );
}
