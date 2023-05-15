import express from 'express';
import { deleteUser, getAllUsers, getUser, update } from '../controllers/userController.js';
import verifyToken from '../middleware/verifyToken.js';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);

userRouter.get('/find/:id', getUser);

userRouter.put('/:id', verifyToken, update)

userRouter.delete('/:id', verifyToken, deleteUser)


export default userRouter;
