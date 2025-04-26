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
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFF"
          alt="Logo"
        />
        <h1 className="text-3xl font-semibold mb-4">Welcome back!</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            className="p-3 border rounded-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="p-3 border rounded-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="bg-blue-500 text-white py-3 rounded-lg mt-4 flex justify-center"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
      <div className="text-center">
        <p className="text-sm">
          Don't have an account?{' '}
          <Link className="text-blue-500" to="/user-signup">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
