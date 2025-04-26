import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/captainActions';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { loading, error, isAuthenticated } = useSelector(state => state.captain);

  useEffect(() => {
    // Redirect if captain is already authenticated
    if (isAuthenticated) {
      navigate('/captain-home');
    }
  }, [isAuthenticated, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black flex flex-col md:flex-row">
      {/* Left Section - Image & Brand */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center p-12 flex-col justify-between" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1614091199036-e934784dbf0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHViZXJ8ZW58MHx8MHx8fDA%3D)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <Link to="/">
            <img
              className="h-8 mb-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
              alt="Logo"
            />
          </Link>
          <h2 className="text-white text-3xl font-bold mb-4">Drive when you want, earn what you need</h2>
          <p className="text-gray-300">Sign in to start earning with Uber.</p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8 flex md:hidden">
            <Link to="/">
              <img
                className="h-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                alt="Logo"
              />
            </Link>
          </div>
          
          <div className="flex items-center mb-6">
            <img 
              src="https://www.svgrepo.com/show/505031/uber-driver.svg"
              alt="Captain" 
              className="w-10 h-10 mr-3"
            />
            <h1 className="text-3xl font-bold text-white">Captain Login</h1>
          </div>
          
          {error && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-500 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email address</label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-medium text-gray-300">Password</label>
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300">Forgot password?</a>
              </div>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button
              className="w-full flex justify-center items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition duration-300 border border-gray-700"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have a captain account?{' '}
              <Link to="/captain-signup" className="text-blue-400 hover:text-blue-300">
                Sign Up
              </Link>
            </p>
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <Link to="/user-login" className="text-blue-400 hover:text-blue-300 text-sm">
              Login as a rider instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
