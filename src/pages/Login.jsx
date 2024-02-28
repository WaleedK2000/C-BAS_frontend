// import React from "react";
import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../scss/login.scss";

import { useDispatch } from "react-redux";
import {
  setInterfaceToRed,
  setInterfaceToBlue,
} from "../store/actions/interfaceActions";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  // const history = useHistory();
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/users/login",
        {
          email: username,
          password: password,
        }
      );
      console.log(response.data.user.userType);

      if (response.data.user.userType === "BLUE") {
        console.log("Blue User");
        dispatch(setInterfaceToBlue());
      } else if (response.data.user.userType === "RED") {
        dispatch(setInterfaceToRed());
      }

      // navigate("/red");
      // handle successful login
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid username or password");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <body>
      <div className="con-login">
        <div className="Login">
          <div className="left">
            <img
              src="/assets/logos/cbas_logo.png"
              className="bounce-in-top"
            ></img>
            <div className="text">
              <h1>The Cloud Defender</h1>
              <h2>Log-in to start protecting your cloud</h2>
            </div>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="login-box-element">
                  <input
                    type="password"
                    name="password"
                    id="passwd"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button className="login-btn">Log-in</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
