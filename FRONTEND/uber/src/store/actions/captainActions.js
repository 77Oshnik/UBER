import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  logout as logoutAction,
} from '../slices/captainSlice';

// Base URL for API requests from environment variable
const API_URL = import.meta.env.VITE_API_URL;

// Login captain
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${API_URL}/captains/login`,
      { email, password },
      config
    );

    dispatch(loginSuccess(data));

    // Store captain info in localStorage
    localStorage.setItem('captainInfo', JSON.stringify(data));
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

// Register captain
export const register = (captainData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${API_URL}/captains/register`,
      captainData,
      config
    );

    dispatch(registerSuccess(data));

    // Automatically login after successful registration
    dispatch(loginSuccess(data));

    // Store captain info in localStorage
    localStorage.setItem('captainInfo', JSON.stringify(data));
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

// Logout captain
export const logout = () => async (dispatch) => {
  try {
    await axios.post(`${API_URL}/captains/logout`);
    localStorage.removeItem('captainInfo');
    dispatch(logoutAction());
  } catch (error) {
    console.error('Logout failed:', error);
    // Still remove local data even if API call fails
    localStorage.removeItem('captainInfo');
    dispatch(logoutAction());
  }
};

// Load captain from localStorage on app init
export const loadCaptain = () => (dispatch) => {
  const captainInfoFromStorage = localStorage.getItem('captainInfo')
    ? JSON.parse(localStorage.getItem('captainInfo'))
    : null;

  if (captainInfoFromStorage) {
    dispatch(loginSuccess(captainInfoFromStorage));
  }
}; 