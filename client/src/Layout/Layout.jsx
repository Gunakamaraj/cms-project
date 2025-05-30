import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router'
import Auth from '../AuthContest/Auth'

export default function Layout() {
  const { logout } = useContext(Auth)

  return (
    <>
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6">
          {/* Logo (left) */}
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <svg width="36" height="36" viewBox="0 0 56 56" fill="none">
              <rect width="56" height="56" rx="12" fill="#2563EB"/>
              <text x="50%" y="54%" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" dy=".3em" fontFamily="Arial, sans-serif">CMS</text>
            </svg>
            <span className="text-xl font-bold text-blue-700">CMS Project</span>
          </div>
          {/* Navigation Buttons (right) */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Link
              to="/About"
              className="px-4 py-2 rounded-lg text-blue-600 font-semibold cursor-pointer tracking-wider
                transition-all duration-300 ease-in-out
                hover:text-white hover:tracking-[2px]
                hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-center"
            >
              About Us
            </Link>
            <Link
              to="/Dashboard"
              className="px-4 py-2 rounded-lg text-blue-600 font-semibold cursor-pointer tracking-wider
                transition-all duration-300 ease-in-out
                hover:text-white hover:tracking-[2px]
                hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-center"
            >
              Dashboard
            </Link>
            <Link
              to="/"
              onClick={logout}
              className="px-4 py-2 rounded-lg text-blue-600 font-semibold cursor-pointer tracking-wider
                transition-all duration-300 ease-in-out
                hover:text-white hover:tracking-[2px]
                hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-center"
            >
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
