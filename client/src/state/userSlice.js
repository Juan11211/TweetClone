// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = { 
//   mode: "light", // Default mode is "light"
//     user: {
//       username: null,
//       picturePath: null
//     },
//   token: null,
//   status: 'idle',
// }; 

// export const fetchUserById = createAsyncThunk(
//   'user/fetchUserById',
//   async (userId) => {
//     const response = await axios.get(`localhost:9000/api/users/${userId}`);
//     return response.data;
//   }
// );

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserById.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchUserById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload;
//       })
//       .addCase(fetchUserById.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export default userSlice.reducer;
