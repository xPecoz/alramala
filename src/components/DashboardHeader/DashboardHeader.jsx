import React from 'react';
import './DashboardHeader.css';
import profileImg from '../../imgs/profileImg.png';


function DashboardHeader({ toggleSidebar }) {
return (
    <header className="header">
        <div className="container">
            <button className="side-bar-toggle-btn"  onClick={toggleSidebar}><i class="uil uil-apps"></i></button>
            <div className="search">
                <input type="text" placeholder="Search.."/>
                    <i class="uil uil-search"></i>
            </div>
            <div className="profile">
                <div className="switch-lang">
                    <span className="ar">AR</span>
                    <span className="en active">EN</span>
                </div>
                <div className="notifications"><i class="fa-regular fa-bell"></i></div>
                <div className="profile-img"><img src= {profileImg} alt="personal picture" /></div>
            </div>
        </div>
    </header>
)
}

export default DashboardHeader;
