import React from 'react'

export default function Todo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">ToDo</h1>
      <div className="flex w-full gap-2">
        <input
          type="text"
          placeholder="Enter your task"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  )
}
