import React from 'react'
import Approute from '../Route/Approute'
import { Outlet } from 'react-router'
import { Link } from 'react-router'
export default function Layout() {
  return (
    <>
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <svg width="36" height="36" viewBox="0 0 56 56" fill="none">
              <rect width="56" height="56" rx="12" fill="#2563EB"/>
              <text x="50%" y="54%" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" dy=".3em" fontFamily="Arial, sans-serif" >CMS</text>
            </svg>
            <span className="text-xl font-bold text-blue-700">CMS Project</span>
          </div>
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <button className="px-4 py-2 rounded-lg text-blue-600 font-semibold w-full sm:w-auto cursor-pointer tracking-wider
              transition-all duration-300 ease-in-out
              hover:text-white hover:tracking-[2px]
              hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500">
              <Link to={'/About'}>About Us</Link>
            </button>
            <button className="px-4 py-2 rounded-lg text-blue-600 font-semibold w-full sm:w-auto cursor-pointer tracking-wider
              transition-all duration-300 ease-in-out
              hover:text-white hover:tracking-[2px]
              hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500">
              Collaborate
            </button>
            <button className="px-4 py-2 rounded-lg text-blue-600 font-semibold w-full sm:w-auto cursor-pointer tracking-wider
              transition-all duration-300 ease-in-out
              hover:text-white hover:tracking-[2px]
              hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500">
             <Link to={'/Dashboard'}> Dashboard</Link>
            </button>
            <Link to={'/'} className="px-4 py-2 rounded-lg text-blue-600 font-semibold w-full sm:w-auto cursor-pointer tracking-wider
              transition-all duration-300 ease-in-out
              hover:text-white hover:tracking-[2px]
              hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-center">
              Home
            </Link>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet/>
      </main>
    </>
  )
}
