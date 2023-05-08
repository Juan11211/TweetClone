import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import userRoutes from '../backend/routes/userRoutes.js';
import authRouter from './routes/authRouter.js';
import bodyParser from 'body-parser'
import verifyToken from './middleware/verifyToken.js';
import { expressjwt } from 'express-jwt';
import postRouter from './routes/postRouter.js';

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())
dotenv.config();

// connect to MongoDB
async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_STATS);
      console.log('Connected to the DB');
    } catch (error) {
      console.error(error);
    }
  }
  connectToDatabase();

app.use('/auth', authRouter)
app.use('/api', expressjwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256']})) // exp-jwt, is protecting the routes that have api 
app.use('/api/users', userRoutes);
app.use('/api/post',  postRouter)

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })

app.listen(9000, () => {
    console.log(`Running on server 9000`);
});
