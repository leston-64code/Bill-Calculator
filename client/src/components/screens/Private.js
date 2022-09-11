import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/private.css"

const Private = () => {
    let navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("userID")){
           navigate("/")
        }
    },[])

  return (
   
  <>
<div className="dummy">

</div>
<div className="second-one">
   <div className="second-one-1">
    <p className="lestonpara">Buissness Details</p>
    <h3 className="s-o-h">{localStorage.getItem("cname").toUpperCase()}</h3>
    <p className="s-o-p"> {localStorage.getItem("caddress")}</p>
    <p className="s-o-p" style={{"marginTop":"12px"}} >{localStorage.getItem("cemail")}</p>
    <p className="s-o-p">{localStorage.getItem("cphone")}</p>
   </div>
   <div className="second-one-2"> 
    <div className="s-o-c-d-1">
        <i className="fa-solid fa-plus"></i>
        <p>Generate bill</p>
    </div> 
    
</div>

</div>

<div className="pone">
    <div className="pone-1">
        
    </div>
    <div className="pone-2">
        <div className="pflexer">
            <div className="pf-1">
                <p className="pf-1-p"><i className="fa-solid fa-sack-dollar"></i></p>
                <p className="childp">Total revenue </p>
                <p className="cost c-l-one">&#8377; 1000000</p>
               
            </div>
            <div className="pf-1">
                <p className="pf-1-p" ><i className="fa-solid fa-coins"></i></p>
                <p className="childp">Total profits</p>
                <p className="cost c-l-two">&#8377; 9876543</p>
            </div>
          
            <div className="pf-1">
                <p className="pf-1-p" ><i className="fa-solid fa-file-lines" ></i></p>
                <p className="childp">Bills generated</p>
                <p className="cost c-l-three">56</p>
            </div>
            <div className="pf-1">
                <p className="pf-1-p" ><i className="fa-solid fa-building-columns"></i></p>
                <p className="childp">CGST</p>
                <p className="cost c-l-four">&#8377; 9876543</p>
            </div>
            <div className="pf-1">
                <p className="pf-1-p" ><i className="fa-solid fa-building-columns"></i></p>
                <p className="childp">SGST</p>
                <p className="cost c-l-five">&#8377; 9876541</p>
            </div>
            
            <div className="pf-1">
                <p className="pf-1-p" ><i className="fa-solid fa-hand-holding-dollar"  ></i></p>
                <p className="childp">Total GST collected</p>
                <p className="cost c-l-five">&#8377; 1000000 </p>
           
            </div>
        </div>
    </div>
</div>
  
   </>
  )
}

export default Private
