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
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-6">Captain Signup</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={submitHandler} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Vehicle Color"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Vehicle Plate"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Vehicle Capacity"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Vehicle Type"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="p-2 border rounded"
            required
          />

          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex justify-center"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Signup'}
          </button>
        </form>

        <p className="mt-4">
          Already have an account?{' '}
          <Link to="/captain-login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
