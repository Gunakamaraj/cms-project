import React, { useContext, useState } from 'react'
import Auth from '../AuthContest/Auth'
import { AuthProvider } from '../AuthContest/Auth';
export default function Signup() {
   const [name,setName]=useState('');
  const {email,setEmail,password,setPassword,addUser}=useContext(Auth)

  function handleSubmit(event){
    event.preventDefault();
    addUser(email,password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={(e)=>setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  )
}
