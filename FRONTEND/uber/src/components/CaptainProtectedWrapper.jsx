import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CaptainProtectedWrapper = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.captain);
  const navigate = useNavigate();

  useEffect(() => {
    // If not loading and not authenticated, redirect to login
    if (!loading && !isAuthenticated) {
      navigate('/captain-login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Don't render anything until we've finished checking authentication
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // Only render children if authenticated
  return isAuthenticated ? children : null;
};

export default CaptainProtectedWrapper; 