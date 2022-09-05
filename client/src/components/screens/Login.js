import React, { useState, useContext } from "react";
import "../css/login.css";
import Appcontext from "../context/Appcontext";

const Navbar = () => {
  const mainstate = useContext(Appcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async () => {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("userID", data.user._id);
        localStorage.setItem("name", data.user.name);
        mainstate.setName(data.user.name);
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="dummy"></div>
      <div className="one">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="form">
          <div className="input-control">
            <input
              type="text"
              placeholder="Email"
              className="input-common"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-common"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="formbtn">
            <button
              type="submit"
              className="formbtn-1"
              onClick={() => {
                submitHandler();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
