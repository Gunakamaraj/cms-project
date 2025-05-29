import React, { Children, createContext, useState } from 'react'
import userService from '../service/service';
import { Navigate, useNavigate } from 'react-router';
import Swal from 'sweetalert2'

const Auth=createContext();
// const Swal=require('sweetalert2');
function AuthProvider({children}){
    const [isAuth,setIsauth]=useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    function login(email,password){
        try{
            userService.authenticate(email,password)
            setIsauth(true)
            Swal.fire({
            title: "Good job!",
            text: "You are LoggedIn",
            icon: "success"
            });
            navigate('/Home')
        }catch(error){
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error}`,
        
});
        }
    }
    function logout(){
        setIsauth(false);
        navigate('/Home')
    }
    function addUser(name,email,password){
        try{
            userService.addUser(name,email,password);
            setIsauth(true)
            Swal.fire({
            title: "Good job!",
            text: "You are LoggedIn",
            icon: "success"
            });
            navigate('/Home')
        }catch(error){
                 Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error}`,
        
});
        }
        
        
    }
    return(
        <>
        <Auth.Provider value={{email, password, setEmail, setPassword, login, logout, addUser }}>
            {children}
        </Auth.Provider>
        </>
    )
}
export {AuthProvider};
export default Auth;
