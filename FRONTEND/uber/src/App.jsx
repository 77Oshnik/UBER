import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Start from './pages/Start'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import UserLogin from './pages/UserLogin'
import UserHome from './pages/UserHome'
import CaptainHome from './pages/CaptainHome'
import { loadUser } from './store/actions/userActions'
import { loadCaptain } from './store/actions/captainActions'
import UserProtectedWrapper from './components/UserProtectedWrapper'
import CaptainProtectedWrapper from './components/CaptainProtectedWrapper'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load user/captain from localStorage if available
    dispatch(loadUser());
    dispatch(loadCaptain());
  }, [dispatch]);

  return (
   <div>
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Start/>} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/user-signup" element={<UserSignup />} />
      
      {/* Protected user routes */}
      <Route 
        path="/home" 
        element={
          <UserProtectedWrapper>
            <UserHome />
          </UserProtectedWrapper>
        } 
      />
      
      {/* Protected captain routes */}
      <Route 
        path="/captain-home" 
        element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        } 
      />
    </Routes>
   </div>
  )
}

export default App
