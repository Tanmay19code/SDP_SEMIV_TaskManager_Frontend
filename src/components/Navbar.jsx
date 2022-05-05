import React from "react";
import { Link } from "react-router-dom";
import "../styles/common.css";

const Navbar = ({ pathName }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbarHolder">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="/">
          Task Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${pathName === "/" ? "active" : ""}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="mytasks"
                className={`nav-link ${
                  pathName === "/mytasks" ? "active" : ""
                }`}
                aria-current="page"
              >
                My Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="pendingtasks"
                className={`nav-link ${
                  pathName === "/pendingtasks" ? "active" : ""
                }`}
                aria-current="page"
              >
                Pending Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="completedtasks"
                className={`nav-link ${
                  pathName === "/completedtasks" ? "active" : ""
                }`}
                aria-current="page"
              >
                Completed Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="taskhistory"
                className={`nav-link ${
                  pathName === "/taskhistory" ? "active" : ""
                }`}
                aria-current="page"
              >
                Task History
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
