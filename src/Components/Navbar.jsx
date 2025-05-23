import React, { useState } from "react";
import { FaHome, FaUser, FaBell, FaCamera, FaSignOutAlt } from "react-icons/fa";
import "./App.css";

const navItems = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaUser />, label: "Profile" },
  { icon: <FaBell />, label: "Notifications" },
  { icon: <FaCamera />, label: "Camera" },
  { icon: <FaSignOutAlt />, label: "Logout" },
];

const SidebarNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sidebar">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="icon">{item.icon}</div>
            <span className="tooltip">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
