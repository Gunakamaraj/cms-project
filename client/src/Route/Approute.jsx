import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import PageNotFound from '../pages/PageNotFound'
import Layout from '../Layout/Layout'
import userService from '../service/service'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
export default function Approute() {
   let path=['/','/Login','/Signup','/Dashboard','/About','*'];
   let ele=[<Home></Home>,<Login></Login>,<Signup></Signup>,<Dashboard></Dashboard>,<About></About>,<PageNotFound></PageNotFound>]
  return (
    <>
       <Routes>
       <Route path='/' element={<Layout></Layout>}>
        {
          path.map((val,idx) => {
            return(
            <Route path={val} element={ele[idx]} key={idx}/>
          )})
        }
       </Route>
       </Routes>
    </>
  )
}
