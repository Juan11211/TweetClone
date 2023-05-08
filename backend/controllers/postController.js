import Post from "../models/Posts.js";

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
    const post = new Post({
      tweet: req.body.tweet,
      tweetImage: req.body.tweetImage,
      user: req.auth.id
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

    if (post.likers.includes(req.auth.id)) {
      return res.status(400).json({ error: 'You already liked this post' });
    }

    post.likes += 1;
    post.likers.push(req.auth.id);
    const updatedPost = await post.save();

    return res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};









