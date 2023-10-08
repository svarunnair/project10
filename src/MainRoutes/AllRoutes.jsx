import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart'
import Home from '../components/Home'
import Signup from '../components/Signup'
import Signin from '../components/Signin'

function AllRoutes() {

  return (
    <div>

        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signin"element={<Signin/>}/>
            <Route path="/signup" element={<Signin/>}/>



        </Routes>



    </div>
  )
}

export default AllRoutes