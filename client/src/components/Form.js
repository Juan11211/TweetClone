import React from 'react'

function Form() {
    return (
      <div className="text-white">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <input
          className="border rounded-md p-2 mb-4 w-full"
          type="email"
          placeholder="Email"
        />
        <input
          className="border rounded-md p-2 mb-4 w-full"
          type="password"
          placeholder="Password"
        />
        <button className="bg-purple-900 text-white py-2 px-4 rounded-md">
          Sign Up
        </button>
      </div>
    );
  }

export default Form
