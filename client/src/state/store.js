import { configureStore } from '@reduxjs/toolkit';
import authReducer from './index.js';

const store = configureStore({
  reducer: {
    user: authReducer,
    // You can add other slices here in the future
  },
});

export default store;
