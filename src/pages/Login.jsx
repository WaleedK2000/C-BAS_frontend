import React from "react";

import "../scss/login.scss";

export default function Login() {
  return (
    <body>
      <div className="con-login">
        <div className="Login">
          <div className="left">
            <img
              src="assets/logos/cbas_logo.png"
              className="bounce-in-top"
            ></img>
            <div className="text">
              <h1>The Cloud Defender</h1>
              <h2>Log-in to start protecting your cloud</h2>
            </div>
          </div>
          <div className="right">
            <div className="login-box">
              <div className="login-box-heading">
                <h3>Log-in</h3>
                <p>Login to your account</p>
              </div>
              <div className="login-box-element">
                <input
                  type="email"
                  name="login_id"
                  id="login"
                  placeholder="Username"
                />
              </div>
              <div className="login-box-element">
                <input
                  type="password"
                  name="password"
                  id="passwd"
                  placeholder="Password"
                />
              </div>
              <div>
                <button className="login-btn">Log-in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
