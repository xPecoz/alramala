import './DashboardSidebar.css';
import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import sidebarLogo from "../../imgs/sidebarLogo.png"

function DashboardSidebar({isOpen, closeSidebar}) {
return (
  <div className={`Dashsidebar ${isOpen ? "open" : "closed"}`}>
    <button className="close-btn" onClick={closeSidebar}><i class="fa-solid fa-xmark"></i></button>
    <div className="heading">
    <div className="side-logo"><img  src={sidebarLogo} alt="logo" /></div>
      <ul className="linkss">
      <li activeClassName="active">
          <NavLink to="/dashboard/home" ><i className="uil uil-apps"></i> Dashboard</NavLink>
        </li>
        <li activeClassName="active">
          <NavLink to="/dashboard/add-project" ><i className="fa-solid fa-plus"></i> Add Project</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/projects" activeClassName="active"><i className="fa-solid fa-chart-lines"></i> Projects</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/content" activeClassName="active"><i className="fa-solid fa-sliders"></i> Content</NavLink>
        </li>
      </ul>
      </div>
      <div className="log-out">
        <span className="info"><i class="fa-regular fa-circle-user"></i><p>Profile</p></span>
        <span className="log-btn"><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
      </div>
  </div>
)
}

export default DashboardSidebar;
