import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../icons";

function TopNavBar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100 border-bottom px-5"
      style={{ zIndex: 999 }}
    >
      <div class="navbar-brand" style={{ fontSize: "30px" }}>
        CRUD
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0 gap-2">
          <Link
            className="text-decoration-none text-black"
            to="https://github.com/sangamprashant"
            target="_blank"
          >
            {Icons.GitHubIcon}
          </Link>
          <Link
            className="text-decoration-none text-black"
            to="https://www.linkedin.com/in/sangamprashantsrivastav"
            target="_blank"
          >
            {Icons.LinkedInIcon}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
