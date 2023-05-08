import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const register = async (req, res, next) => {
    try {
      const {
        firstName,
        lastName,
        email,
        username,
        password,
        profilePicture
      } = req.body;
  
      // Check if email already exists in database
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(400).json({ error: 'Email is already taken' });
      }
  
      // Check if username already exists in database
      const usernameExists = await User.findOne({ username });
      if (usernameExists) {
        return res.status(400).json({ error: 'Username is already taken' });
      }
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        firstName,
        lastName,
        email,
        username,
        password: passwordHash,
        profilePicture,
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      next(err);
    }
  };

 export const login = async(req, res, next) => {
    try{
        const { email, password } = req.body
        const user = await User.findOne({ email: email })

        if(!user){
            return res.status(400).json({ msg: 'Email or Password is incorrect' })
        }

        const isMatch = await bcrypt.compare(password, user.password); // checking if password is the same
        if (!isMatch) {
          return res.status(400).json({ msg: 'Email or Password is incorrect' });
        }
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({
          token,
          user: {
            id: user._id,
            email: user.email,
            username: user.username
            // any other user data you want to include
          }
        });
    } catch(err){
        next(err)
    }
  }
