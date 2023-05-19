import Post from "../models/Posts.js";
import User from "../models/User.js";

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({})
      .populate('user', 'name username') // populate user data
      .exec();

    return res.status(200).json(posts);
  } catch (error) {
    return next(error);
  }
};

export const getUserPosts = async (req, res, next) => {
  try {
    const userPosts = await Post.find({ user: req.params.id })
      .populate('user', 'name username')
      .exec();

    res.status(200).json(userPosts);
  } catch (error) {
    next(error);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const user = await User.findById(req.auth.id); // Fetch the user object based on auth ID

    const post = new Post({
      tweet: req.body.tweet,
      picturePath: req.body.picturePath,
      user: req.auth.id,
      likes: {},
      comments: [],
      userPicturePath: user.picturePath, // Use the user object's picturePath property
    });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
      next(err)
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const deletedPost = await Post.findOneAndDelete({ _id: req.params.id, user: req.auth.id });

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found or user not authorized to delete post' });
    }

    return res.status(200).json({ message: `Successfully deleted post: ${deletedPost.tweet}` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.params.id, user: req.auth.id },
      req.body,
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found or user not authorized to update post' });
    }

    return res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

export const likePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const likerId = req.auth.id;

    if (post.likers.includes(likerId)) {
      // User already liked the post, so it's a dislike action
      post.likes.delete(likerId); // Remove the like from the map
      post.likers = post.likers.filter((liker) => liker !== likerId); // Remove liker from the array
    } else {
      // User is liking the post
      post.likes.set(likerId, true); // Set the like value in the map
      post.likers.push(likerId);
    }

    const updatedPost = await post.save();

    return res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};











