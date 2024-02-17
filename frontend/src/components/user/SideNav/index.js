import React from "react";
import "./SideNav.css";
import { Icons } from "../../../icons";

function SideNav({ children }) {
  return (
    <div className="side-nav-container">
      <div className="left">
        <div className="main">
          <ul>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
            <li><a className="text-decoration-none text-black side-nav-items" href="/">{Icons.HomeIcon}<span>Home</span></a></li>
          </ul>
        </div>
      </div>
      <div className="right">
      <div className="main-right">

      {children}
      </div>
      </div>
    </div>
  );
}

export default SideNav;
