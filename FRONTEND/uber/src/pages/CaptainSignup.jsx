import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/actions/captainActions';

const CaptainSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  
  const { loading, error, isAuthenticated } = useSelector(state => state.captain);

  useEffect(() => {
    // Redirect if captain is already authenticated
    if (isAuthenticated) {
      navigate('/captain-home');
    }
  }, [isAuthenticated, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    dispatch(register(captainData));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black flex flex-col md:flex-row">
      {/* Left Section - Image & Brand */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center p-12 flex-col justify-between" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1740&auto=format&fit=crop)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <Link to="/">
            <img
              className="h-8 mb-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
              alt="Uber"
            />
          </Link>
          <h2 className="text-white text-3xl font-bold mb-4">Drive with Uber and earn money</h2>
          <p className="text-gray-300">Flexible hours, competitive earnings, and complete independence.</p>
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8 flex md:hidden">
            <Link to="/">
              <img
                className="h-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                alt="Uber"
              />
            </Link>
          </div>
          
          <div className="flex items-center mb-6">
            <img 
              src="https://www.svgrepo.com/show/505031/uber-driver.svg"
              alt="Captain" 
              className="w-10 h-10 mr-3"
            />
            <h1 className="text-3xl font-bold text-white">Captain Signup</h1>
          </div>
          
          {error && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-white px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={submitHandler} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
            </div>

            <div className="border-t border-gray-700 pt-5 mt-5">
              <h3 className="text-lg font-medium text-white mb-3">Vehicle Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Vehicle Color</label>
                <input
                  type="text"
                  placeholder="e.g., Black, White, Silver"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">License Plate</label>
                <input
                  type="text"
                  placeholder="e.g., ABC123"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Vehicle Type</label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  required
                >
                  <option value="">Select vehicle type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="van">Van</option>
                  <option value="hatchback">Hatchback</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Seating Capacity</label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                  required
                >
                  <option value="">Select capacity</option>
                  <option value="2">2 passengers</option>
                  <option value="4">4 passengers</option>
                  <option value="6">6 passengers</option>
                  <option value="7+">7+ passengers</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <button 
                type="submit" 
                className="w-full flex justify-center items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition duration-300 border border-gray-700"
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {loading ? 'Creating Account...' : 'Sign Up as Captain'}
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/captain-login" className="text-blue-400 hover:text-blue-300">
                Log In
              </Link>
            </p>
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <Link to="/user-signup" className="text-blue-400 hover:text-blue-300 text-sm">
              Sign up as a rider instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
