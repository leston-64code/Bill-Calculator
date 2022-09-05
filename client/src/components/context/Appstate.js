
import React, { useState } from 'react'
import Appcontext from './Appcontext'

const Appstate = (props) => {
   const [name,setName]=useState("")
  return (
    <Appcontext.Provider value={{name,setName}}>
        {props.children}
    </Appcontext.Provider>
  )
}

export default Appstate
