import React, { useState, useContext, useEffect } from "react";
import "../css/login.css";
import Appcontext from "../context/Appcontext";
import { useNavigate} from 'react-router-dom'

const Navbar = () => {
  let navigate=useNavigate()
  const mainstate = useContext(Appcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("userID")){
      navigate(("/private"))
    }
  },[])

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
        localStorage.setItem("cname", data.user.companyname);
        localStorage.setItem("caddress", data.user.companyaddress);
        localStorage.setItem("cphone", data.user.companyphone);
        localStorage.setItem("cemail", data.user.companyemail);
        mainstate.setName(data.user.name);
        setTimeout(()=>{
          navigate("/private")
        },1000)
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="dummer"></div>
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
