import React, { useState } from 'react'
import Todo from './Todo'
import Calculator from './Calculator'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('todo')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Navbar */}
        <nav className="flex justify-center border-b">
          <button
            className={`px-6 py-3 font-semibold text-blue-700 transition-all duration-200 
              ${activeTab === 'todo' 
                ? 'border-b-4 border-blue-600 bg-blue-50' 
                : 'hover:bg-blue-50 text-gray-500'}`}
            onClick={() => setActiveTab('todo')}
          >
            ToDo List
          </button>
          <button
            className={`px-6 py-3 font-semibold text-blue-700 transition-all duration-200 
              ${activeTab === 'calculator' 
                ? 'border-b-4 border-blue-600 bg-blue-50' 
                : 'hover:bg-blue-50 text-gray-500'}`}
            onClick={() => setActiveTab('calculator')}
          >
            Calculator
          </button>
        </nav>
        {/* Content */}
        <div className="p-6 flex flex-col items-center">
          {activeTab === 'todo' && (
            <>
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Your ToDo List</h2>
              <Todo />
            </>
          )}
          {activeTab === 'calculator' && (
            <>
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Calculator</h2>
              <Calculator />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
