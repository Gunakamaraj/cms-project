import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to CMS Project</h1>
        <p className="text-gray-600 mb-6">
          Manage your content easily and efficiently. Get started or sign in to continue.
        </p>
      </div>
      <div className="space-x-4">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold text-lg cursor-pointer">
          Get Started
        </button>
        <button className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg shadow hover:bg-blue-50 transition font-semibold text-lg ">
          Sign In
        </button>
      </div>
    </div>
  )
}
