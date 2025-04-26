import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import captainReducer from './slices/captainSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    captain: captainReducer,
    // Add other reducers here as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store; 