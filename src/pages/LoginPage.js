import React from "react";
import "../styles/task.css";
import "../styles/authentication.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="pageContainer">
      <div className="container loginContainer">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-title">LOGIN</div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form>
                  <div className="form-group">
                    <label className="form-control-label">EMAIL</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input type="password" className="form-control" />
                  </div>

                  <div className="loginButtonHolder">
                    <div className="loginButton">LOGIN</div>
                  </div>
                  <div className="newUserTextHolder">
                    <Link to="/register">New here? Register.</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
