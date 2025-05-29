import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import PageNotFound from '../pages/PageNotFound'
export default function Approute() {
   let path=['/','/Login','/Signup','*'];
   let ele=[<Home></Home>,<Login></Login>,<Signup></Signup>,<PageNotFound></PageNotFound>]
  return (
    <>
       <Routes>
       <Route>
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
