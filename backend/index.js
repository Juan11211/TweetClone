import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import userRoutes from '../backend/routes/userRoutes.js';
import authRouter from './routes/authRouter.js';
import bodyParser from 'body-parser'
import { expressjwt } from 'express-jwt';
import postRouter from './routes/postRouter.js';
import cors from 'cors'
import helmet from 'helmet'
import multer from 'multer';
import path from 'path'
import { register } from './controllers/authController.js';
import verifyToken from './middleware/verifyToken.js';
import { createPost } from './controllers/postController.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

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

  /* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });


app.post('/auth/register', upload.single('picture'), register )
app.post('/api/post', verifyToken, upload.single('picture'), createPost)

app.use('/auth', authRouter)
app.use('/api', expressjwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256']})) // exp-jwt, is protecting the routes that have api 
app.use('/api/users', userRoutes);
app.use('/api/post',  postRouter)

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({msg: err.message})
  })

app.listen(9000, () => {
    console.log(`Running on server 9000`);
});
