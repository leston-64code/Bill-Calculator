import React, { useContext, useEffect } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import Appcontext from "../context/Appcontext";

const Navbar = () => {
  const mainstate = useContext(Appcontext);

  useEffect(() => {
    mainstate.setName(localStorage.getItem("name"));
  }, []);

  function logoutHandler() {
    localStorage.removeItem("userID");
    localStorage.removeItem("name");
    mainstate.setName("");
  }

  return (
    <div className="nav-one">
      <div className="nav-done nav-common">
        <p className="ponner">
          <Link to="/">
            <i className="fa-solid fa-file-invoice "></i>
          </Link>
        </p>
        <p className="ptwo">
          <Link to="/" className="link-one">
            ExpressBill
          </Link>
        </p>
      </div>
      <div className="nav-dtwo nav-common">
        <div className="tester">
          <ul className="list-one">
            <li className="list-one-comp">
              <Link to="/" className="link-one">
                Home
              </Link>
            </li>
            <li className="list-one-comp link-one">About</li>
            <li className="list-one-comp link-one">Contact</li>
          </ul>
        </div>
      </div>
      <div className="nav-dthree nav-common">
        <div className="dthree-one"></div>
        <div className="dthree-one">
          <p className="hellone">
            <Link to="/login" className="link-one">
              Login
            </Link>
          </p>
          <p
            className="helltwo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              logoutHandler();
            }}
          >
            Logout
          </p>
        </div>
        <div className="dthree-one">
          <p className="lastpara">
            <i className="fa-solid fa-user"></i>
          </p>
          <p className="lastpara1">{mainstate.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
