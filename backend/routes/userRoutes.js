import express from 'express';
import { deleteUser, getUser, update } from '../controllers/userController.js';
import verifyToken from '../middleware/verifyToken.js';

const userRouter = express.Router();

userRouter.get('/find/:id', getUser);

userRouter.put('/:id', verifyToken, update)

userRouter.delete('/:id', verifyToken, deleteUser)


export default userRouter;
