import { configureStore } from '@reduxjs/toolkit';
import authReducer from './index.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // You can add other slices here in the future
  },
});

export default store;
