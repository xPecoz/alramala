import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar"; 
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import './DashboardLayout.css'

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard"); 

  return (
    <div className={`dashboard-container ${isDashboardPage ? "dashboard" : ""}`}>
      {isDashboardPage && (
        <>
          {location.pathname !== '/dashboard/login' &&  location.pathname !== '/dashboard/login/forgetPassword' && location.pathname !== '/dashboard/login/changePassword' && <DashboardHeader toggleSidebar={() => setIsSidebarOpen(true)}  /> }
          <div className="dashboard-content">
            <DashboardSidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
            <div className={`content-area ${isSidebarOpen ? "overlay-active" : ""}`}>
            {isSidebarOpen && (
              <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>
            )}
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardLayout;
