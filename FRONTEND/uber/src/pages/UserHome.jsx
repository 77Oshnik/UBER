import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/userActions';

const UserHome = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTab, setSelectedTab] = useState('home');

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                  alt="Uber"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button
                    onClick={() => setSelectedTab('home')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      selectedTab === 'home' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => setSelectedTab('rides')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      selectedTab === 'rides' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    My Rides
                  </button>
                  <button
                    onClick={() => setSelectedTab('payment')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      selectedTab === 'payment' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Payment
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center max-w-xs bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white">
                      {user?.fullname?.firstname?.charAt(0) || 'U'}
                    </div>
                  </button>
                  {showDropdown && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="block px-4 py-2 text-sm text-gray-700 border-b">
                        <div className="font-medium">
                          {user?.fullname?.firstname} {user?.fullname?.lastname}
                        </div>
                        <div className="text-gray-500 truncate">{user?.email}</div>
                      </div>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </a>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {selectedTab === 'home' && (
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-xl overflow-hidden mb-8">
              <div className="md:flex">
                <div className="px-6 py-12 md:w-1/2">
                  <h2 className="text-3xl font-bold text-white">
                    Welcome back, {user?.fullname?.firstname || 'User'}!
                  </h2>
                  <p className="mt-2 text-lg text-blue-100">
                    Where are you going today?
                  </p>
                  <button className="mt-6 bg-white text-blue-600 px-5 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition duration-300">
                    Book a Ride
                  </button>
                </div>
                <div className="md:w-1/2 flex items-center justify-center p-6">
                  <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png"
                    alt="Uber Ride"
                    className="h-56 w-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Ride Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Uber X</h3>
                  <p className="text-gray-600 mb-4">Affordable, everyday rides</p>
                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-green-500 flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Uber Comfort</h3>
                  <p className="text-gray-600 mb-4">More legroom and newer cars</p>
                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-purple-500 flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Uber Black</h3>
                  <p className="text-gray-600 mb-4">Premium rides with professional drivers</p>
                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Recent Activity</h3>
              <div className="border-t border-gray-200">
                <p className="py-8 text-center text-gray-500">No recent rides found</p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'rides' && (
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">My Rides</h2>
              <p className="text-gray-500">You haven't taken any rides yet.</p>
            </div>
          </div>
        )}

        {selectedTab === 'payment' && (
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Add Payment Method
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserHome; 