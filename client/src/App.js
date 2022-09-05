import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Navbar from './components/screens/Navbar' 
import Home from "./components/screens/Home"
import Login from "./components/screens/Login"
import Register from "./components/screens/Register"

const App = () => {
  return (
    <>
    
  

    <Router>
    <Navbar/>
    <Routes>

    <Route path='/login' element={<Login/>}> </Route>
     <Route path='/register' element={<Register/>}> </Route>
    <Route path='/' exact={true} element={<Home/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
