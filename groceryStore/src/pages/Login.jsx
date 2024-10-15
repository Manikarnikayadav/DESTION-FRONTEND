import React, { useState } from 'react';  // Added useState import
import { Link, useNavigate } from 'react-router-dom';  // Combined Link and useNavigate imports

const Login = () => {
  const [username, setUsername] = useState('');  // State for username
  const [password, setPassword] = useState('');  // State for password
  const [validationError, setValidationError] = useState('');  // State for validation errors
  const navigate = useNavigate();  // Hook for navigation

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!username || !password) {
      setValidationError('Both username and password are required.');
      return;
    }
    
    // Clear validation error if inputs are valid
    setValidationError('');

    // Simple authentication check (This can be replaced with real authentication logic)
    if (username === 'user' && password === 'password') {
      navigate('/dashboard');  // Navigate to dashboard on successful login
    } else {
      setValidationError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">Login to your account</h2>
        
        {/* Display validation error */}
        {validationError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{validationError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input 
                id="username" 
                name="username" 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
            </div>
          </div>

          <div>
            <button 
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <Link to="/signup" className="inline-block text-green-500 hover:text-green-700 font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
