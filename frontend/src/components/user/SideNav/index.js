import React from "react";
import "./SideNav.css";
import { Icons } from "../../../icons";
import { SideNavItems } from "./SideNavData";
import { Link } from "react-router-dom";

function SideNav({ children }) {
  return (
    <div className="side-nav-container">
      <div className="left">
        <div className="main">
          <ul>
            {SideNavItems.map((data, index) => (
              <React.Fragment key={index}>
                <span className="mt-4">{data.title}</span>
                {data.links.map((link) => (
                  <li key={index + link.label}>
                    <Link
                      className="text-decoration-none text-black side-nav-items"
                      to={link.path}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="main-right">{children}</div>
      </div>
    </div>
  );
}

export default SideNav;
