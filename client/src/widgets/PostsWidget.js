import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTweets } from '../state';
import PostWidget from './PostWidget';
import axios from 'axios'

const PostsWidget = () => {
    const dispatch = useDispatch();
    const tweets = useSelector((state) => state.tweets) // tweets in index
    const token = useSelector((state) => state.token);

    const getPosts = async() => { 
        const response = await axios.get('/api/post/', {
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        console.log(data)
        dispatch(setTweets({ posts: data }));
      };
    }


export default PostsWidget