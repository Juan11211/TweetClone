import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import userRoutes from '../backend/routes/userRoutes.js';

const app = express();
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


app.use('/api/users', userRoutes);

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
