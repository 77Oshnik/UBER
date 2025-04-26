import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Header */}
      <header className="container mx-auto pt-6 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" 
            alt="Uber" 
            className="h-8 md:h-10"
          />
        </div>
        <div className="flex space-x-4">
          <Link to="/user-login" className="px-4 py-2 text-sm rounded-full hover:bg-gray-700 transition duration-300">
            Login
          </Link>
          <Link to="/user-signup" className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
            Sign up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Go anywhere with Uber
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Request a ride, hop in, and go. Sign up to ride or drive.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/user-signup" 
              className="bg-white text-black py-3 px-8 rounded-full text-center font-medium hover:bg-gray-200 transition duration-300"
            >
              Sign up to ride
            </Link>
            <Link 
              to="/captain-signup" 
              className="bg-transparent border border-white py-3 px-8 rounded-full text-center font-medium hover:bg-gray-900 transition duration-300"
            >
              Sign up to drive
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png" 
            alt="Uber Ride" 
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why ride with Uber?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick pickup</h3>
              <p className="text-gray-400">Just tap a button and get a ride in minutes.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe rides</h3>
              <p className="text-gray-400">Millions of rides daily. Your safety is our priority.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable rates</h3>
              <p className="text-gray-400">Compare prices on every kind of ride, from daily commutes to special pickups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" 
                alt="Uber" 
                className="h-6"
              />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Support
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Safety
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Terms
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Uber Technologies Inc.
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Start
