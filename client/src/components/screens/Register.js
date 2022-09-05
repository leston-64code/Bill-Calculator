import React, { useState, useContext } from "react";
import "../css/register.css";
import Appcontext from "../context/Appcontext";

const Navbar = () => {
  const mainstate = useContext(Appcontext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const submitHandler = async () => {
    if (password != confirmpassword) {
      return alert("passwrod and confirm password does not mathc");
    } else {
      fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          localStorage.setItem("userID", data.user._id);
          mainstate.setName(data.user.name);
          return;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="dummer"></div>
      <div className="one">
        <div className="heading">
          <h1>Register</h1>
        </div>
        <div className="form">
          <div className="input-control">
            <input
              type="text"
              placeholder="Name"
              className="input-common"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-common"
              value={confirmpassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
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
