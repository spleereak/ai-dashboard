import React from "react";
import {Sidebar} from "@/components/Sidebar.tsx";
import {Outlet} from "react-router-dom";

export const DashboardLayout: React.FC = () => {
  return (
    <div className='flex h-screen w-full bg-white'>
      <Sidebar />
      <Outlet />
    </div>
  )
}