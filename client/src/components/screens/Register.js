import React from 'react'
import "../css/register.css"

const Navbar = () => {
  return (
    <>
      <div className="dummer"></div>
           <div className="one">
      <div className="heading">
        <h1>Register</h1>
      </div>
      <div className="form">
        <div className="input-control">
          <input type="text" placeholder="Name" className="input-common" />
          <input type="text" placeholder="Email" className="input-common" />
          <input type="password" placeholder="Password" className="input-common" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-common"
          />
        </div>
        <div className="formbtn">
          <button type="submit" className="formbtn-1">Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
