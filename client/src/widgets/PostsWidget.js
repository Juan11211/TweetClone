import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTweets } from '../state';
import PostWidget from './PostWidget';

const PostsWidget = () => {
    const dispatch = useDispatch();
    const tweets = useSelector((state) => state.tweets) // tweets in index
    const token = useSelector((state) => state.token)
}

export default PostsWidget