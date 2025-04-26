import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/actions/userActions';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    dispatch(register(newUser));
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-semibold mb-4">Create your account</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={submitHandler} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 rounded flex justify-center"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
      </div>
      <p className="text-center mt-4">
        Already have an account?{' '}
        <Link to="/user-login" className="text-blue-500 underline">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default UserSignup;
