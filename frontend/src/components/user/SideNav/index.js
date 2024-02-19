import React from "react";
import "./SideNav.css";
import { Icons } from "../../../icons";
import { SideNavItems } from "./SideNavData";
import { Link, useNavigate } from "react-router-dom";
import { Popconfirm, message } from "antd";
import { AuthContext } from "../../../AppProvider";


function SideNav({ children }) {
  const { user, setUser, token, setToken, isLogin, setIsLogin } = React.useContext(AuthContext)
 const navigate = useNavigate()


  const confirm = (e) => {
    console.log(e);
    sessionStorage.clear()
    message.success("Logged iut successfully");
    setToken("")
    setIsLogin(false)
    navigate("/")
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
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
            <span className="mt-4">Account</span>
            <li key="logout">
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Link className="text-decoration-none text-danger side-nav-items">
                  {Icons.LogoutIcon}
                  <span>Logout</span>
                </Link>
              </Popconfirm>
            </li>
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
