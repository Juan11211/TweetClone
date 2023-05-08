import express from 'express'
import verifyToken from '../middleware/verifyToken.js';
const postRouter = express.Router();
import { createPost, deletePost, getAllPosts, getUserPosts, likePost, updatePost } from '../controllers/postController.js'

postRouter.get('/', verifyToken, getAllPosts)

postRouter.get('/:id', verifyToken, getUserPosts)

postRouter.post('/', verifyToken, createPost)

postRouter.put('/:id/like', verifyToken, likePost)

postRouter.put('/:id', verifyToken, updatePost)

postRouter.delete('/:id', verifyToken, deletePost)

export default postRouter;