import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/userActions';

const UserHome = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.fullname?.firstname || 'User'}!</h2>
        <p className="text-gray-600">Email: {user?.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Book a Ride</h3>
          <p className="text-gray-600 mb-4">Ready to go somewhere?</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
            Book Now
          </button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Ride History</h3>
          <p className="text-gray-600 mb-4">View your past rides</p>
          <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full">
            View History
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHome; 