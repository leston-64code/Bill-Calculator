import React, { useState, useContext } from "react";
import "../css/register.css";
import Appcontext from "../context/Appcontext";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  let navigate=useNavigate()
  const mainstate = useContext(Appcontext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [companyemail,setCompanyemail] = useState("");
  const [companyaddress, setCompanyaddress] = useState("");
  const [companyphone, setCompanyphone] = useState("");
  const [one,setOne]=useState(true)
  const [two ,setTwo]=useState(false)

  function stateChanger(){
    if(password!=confirmpassword){
      return alert("passwrod and confirm password does not mathc");
    }
    setOne(false)
    setTwo(true)
  }

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
          companyaddress,
          companyname,
          companyphone,
          companyemail
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
           mainstate.setName(data.user.name);
          localStorage.setItem("userID", data.user._id);
          localStorage.setItem("name", data.user.name);
          localStorage.setItem("cname", data.user.companyname);
          localStorage.setItem("caddress", data.user.companyaddress);
          localStorage.setItem("cphone", data.user.companyphone);
          localStorage.setItem("cemail", data.user.companyemail);
          setTimeout(()=>{
            navigate("/private")
          },1000)
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
           {
            one===true?
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
          :
          <div className="input-control">
            <input
            type="text"
            placeholder="Company Name"
            className="input-common"
            value={companyname}
            onChange={(e) => {
              setCompanyname(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Company Email (optional)"
            className="input-common"
            value={companyemail}
            onChange={(e) => {
              setCompanyemail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Company Address"
            className="input-common"
            value={companyaddress}
            onChange={(e) => {
              setCompanyaddress(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Company Phone no"
            className="input-common"
            value={companyphone}
            onChange={(e) => {
              setCompanyphone(e.target.value);
            }}
          />
          </div>

           }
          </div>
          <div className="formbtn">
          {
            one===true? 
            
            <button
            type="submit"
            className="formbtn-1"
            onClick={()=>{
              stateChanger()
            }}
          >
            Next
          </button>:<button
              type="submit"
              className="formbtn-1"
              onClick={() => {
                submitHandler();
              }}
            >
              Submit
            </button>
          }</div>
         
        </div>
      </div>
    </>
  );
};

export default Navbar;
