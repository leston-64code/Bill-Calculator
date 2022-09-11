import React,{useEffect} from 'react'
import "../css/home.css"
import { Link ,useNavigate} from 'react-router-dom'

const Navbar = () => {
  let navigate=useNavigate()

  return (
   <>
   
   <div className="hone">
    </div>
    <div className="htwo">
        <h1 className="htwo-h1">Express Bill </h1>
        <p className="htwo-p-one"><i className="fa-solid fa-truck-fast"></i></p>
        <p className="htwo-p-two">Express Bill makes small business invoicing and billing so simple that you’ll be amazed. It helps you save time and focus on doing what you love. </p>
        <p className="htwo-p-three" >To start using this web tool for free click here . <i className="fa-solid fa-right-to-bracket"></i></p>
        <p className="htwo-p-four" >To enable all the features please do sign up..... </p>
        <button className="htwo-btn"><Link to="/register">Sign up</Link></button>
    </div>

   </>
  )
}

export default Navbar
