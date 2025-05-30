import React from 'react'

export default function About() {
  return (

    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to About Page
        </h1>
        <p className="text-gray-600">
          Welcome to CMS project, a platform dedicated to website user.Whether you are looking for interesting website to use login pages,we aim to develop a certain new features thing to add later.thank you fo visting my website.
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}
  

