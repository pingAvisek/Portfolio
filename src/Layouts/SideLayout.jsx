import React from "react";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import { FcServices } from "react-icons/fc";

export default function SideLayout() {
  return (
    <div className="sidebar">
      <h1>Abhishek Ghimire</h1>
      <ul>
        <li>
          <Link to="about">
            <span className="sidebar-list">
              <FcAbout />
              About me
            </span>
          </Link>
          <Link to="services">
            <span className="sidebar-list">
              <FcServices />
              Services
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
