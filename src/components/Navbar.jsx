import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/common.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser, logout } from "../redux/actions/authActions.js";
import store from "../redux/store";

const Navbar = ({ pathName, isAunthenticated }) => {
  let state,
    userName = "";
  const navigate = useNavigate();
  const dispatch = useDispatch(null);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    dispatch(loadUser())
      .then((result) => {
        state = JSON.parse(localStorage.getItem("state"));
        setUser(state.auth.userDetail);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [store.getState().auth.auth?.authtoken]);
  console.log("USER=>", user);
  userName = user?.name;
  // console.log("Global Store State=>", store.getState());

  const logoutBtn = () => {
    // useEffect(() => {
    dispatch(logout())
      .then((result) => {
        // console.log(result);
        // navigate("/");
        setTimeout(() => {
          // window.location.reload(false);
          navigate("/");
        }, 3);
        setUser(null);
        userName = "";
      })
      .catch((err) => {
        console.log(err);
      });
    // }, []);
  };

  return (
    <>
      {isAunthenticated ? (
        <nav className="navbar navbar-expand-lg navbar-dark navbarHolder">
          <div className="container-fluid">
            <Link
              to="/"
              className="navbar-brand dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* Tanmay Mutalik */}
              {userName}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li onClick={logoutBtn}>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${pathName === "/" ? "active" : ""}`}
                    aria-current="page"
                  >
                    My Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/createtask"
                    className={`nav-link ${
                      pathName === "/createtask" ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    Create Task
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
      ) : (
        <nav className="navbar navbar-expand-lg navbar-dark navbarHolder">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                    to="/login"
                    className={`nav-link ${
                      pathName === "/login" ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
