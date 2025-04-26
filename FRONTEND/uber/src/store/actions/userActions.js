import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  logout as logoutAction,
} from '../slices/userSlice';

// Base URL for API requests from environment variable
const API_URL = import.meta.env.VITE_API_URL;

// Login user
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${API_URL}/users/login`,
      { email, password },
      config
    );

    dispatch(loginSuccess(data));

    // Store user info in localStorage
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(
      loginFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// Register user
export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${API_URL}/users/register`,
      userData,
      config
    );

    dispatch(registerSuccess(data));

    // Automatically login after successful registration
    dispatch(loginSuccess(data));

    // Store user info in localStorage
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(
      registerFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// Logout user
export const logout = () => async (dispatch) => {
  try {
    await axios.post(`${API_URL}/users/logout`);
    localStorage.removeItem('userInfo');
    dispatch(logoutAction());
  } catch (error) {
    console.error('Logout failed:', error);
    // Still remove local data even if API call fails
    localStorage.removeItem('userInfo');
    dispatch(logoutAction());
  }
};

// Load user from localStorage on app init
export const loadUser = () => (dispatch) => {
  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  if (userInfoFromStorage) {
    dispatch(loginSuccess(userInfoFromStorage));
  }
}; 