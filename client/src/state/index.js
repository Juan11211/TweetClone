import { createSlice } from '@reduxjs/toolkit';

// Set initial state for the slice
const initialState = { 
    mode: "light", // Default mode is "light"
    user: null, // No user is logged in by default
    token: null, // No token is stored by default
    tweets: [] // No tweets available by default
}; 

// Create the auth slice using createSlice from reduxjs/toolkit
export const authSlice = createSlice({
    name: 'user', // The name of the slice
    initialState, // The initial state of the slice
    reducers: {
        // Set the mode to the opposite of what it currently is
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        // Set the user and token to the payload sent by the action
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        // Clear the user and token from the state
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        // Set the friends of the logged-in user
        setFriends: (state, action) => {
            if (state.user) {
              state.user.friends = action.payload.friends;
            } else {
              console.error("user friends non-existent :(");
            }
        },
        // Set the tweets in the state
        setTweets: (state, action) => {
            state.tweets = action.payload.tweets;
        },
        // Update a specific tweet
        setTweet: (state, action) => {
            // Map over the current tweets and update the one that matches the action payload
            const updatedTweet = state.tweets.map((tweet) => {
              if (tweet._id === action.payload.tweet._id) return action.payload.tweet;
              return tweet;
            });
            state.tweets = updatedTweet;
        },
    },
});

// Export the actions created by the auth slice
export const { setMode, setLogin, setLogout, setFriends, setTweets, setTweet } = authSlice.actions;

// Export the reducer created by the auth slice
export default authSlice.reducer;
