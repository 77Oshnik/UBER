import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/userActions';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { loading, error, isAuthenticated } = useSelector(state => state.user);

  useEffect(() => {
    // Redirect if user is already authenticated
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col md:flex-row">
      {/* Left Section - Image & Brand */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center p-12 flex-col justify-between" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581262177000-8139a463e531?q=80&w=1974&auto=format&fit=crop)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <Link to="/">
            <img
              className="h-8 mb-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
              alt="Logo"
            />
          </Link>
          <h2 className="text-white text-3xl font-bold mb-4">Go where you want, when you want</h2>
          <p className="text-gray-300">Ride with Uber for a seamless experience on the road.</p>
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
          
          <h1 className="text-3xl font-bold mb-6 text-white">Welcome back</h1>
          
          {error && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-white px-4 py-3 rounded mb-4">
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
              className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link className="text-blue-400 hover:text-blue-300" to="/user-signup">
                Create one
              </Link>
            </p>
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <Link to="/captain-login" className="text-blue-400 hover:text-blue-300 text-sm">
              Login as a captain instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
