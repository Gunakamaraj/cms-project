import React from 'react'
import { useContext } from 'react'
import Auth from '../AuthContest/Auth'

export default function Login() {
  const {email,setEmail,password,setPassword,login}=useContext(Auth)
  function handleClick(e){
    e.preventDefault();
    login(email,password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In </h2>
        <form className="space-y-5" onSubmit={handleClick}>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              onChange={e=>setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              onChange={e=>setPassword(e.target.value)}
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/Signup" className="text-blue-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  )
}
