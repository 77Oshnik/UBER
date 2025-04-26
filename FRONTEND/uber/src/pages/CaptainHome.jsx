import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/captainActions';

const CaptainHome = () => {
  const { captain } = useSelector((state) => state.captain);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Captain Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {captain?.fullname?.firstname || 'Captain'}!</h2>
        <p className="text-gray-600">Email: {captain?.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Vehicle Information</h3>
          <div className="space-y-2">
            <p className="text-gray-600">Color: {captain?.vehicle?.color}</p>
            <p className="text-gray-600">Plate: {captain?.vehicle?.plate}</p>
            <p className="text-gray-600">Type: {captain?.vehicle?.vehicleType}</p>
            <p className="text-gray-600">Capacity: {captain?.vehicle?.capacity}</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Trip History</h3>
          <p className="text-gray-600 mb-4">View your past trips</p>
          <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full">
            View History
          </button>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Go Online</h3>
        <p className="text-gray-600 mb-4">Start accepting ride requests</p>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full">
          Start Driving
        </button>
      </div>
    </div>
  );
};

export default CaptainHome; 