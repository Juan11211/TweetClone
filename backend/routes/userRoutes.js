import express from 'express';
import { deleteUser, follow, getUser, unFollow, update } from '../controllers/userController.js';
import verifyToken from '../middleware/verifyToken.js';

const userRouter = express.Router();

userRouter.get('/find/:id', getUser);

userRouter.put('/:id', verifyToken, update)

userRouter.delete('/:id', verifyToken, deleteUser)

userRouter.put('/follow/:id', verifyToken, follow)

userRouter.put('/unfollow/:id', verifyToken, unFollow)

export default userRouter;
