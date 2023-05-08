import User from '../models/User.js';

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } 
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      await Tweet.remove({ userId: req.params.id });

      res.status(200).json("User delete");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only update your own account")); // createError is a built in express method
  }
};

// This function is called when a user wants to follow another user
export const follow = async (req, res, next) => {
  try {
    // Find the user being followed using their ID
    const user = await User.findById(req.params.id);
    // Find the current user who wants to follow the other user using their ID
    const currentUser = await User.findById(req.body.id);

    // If the current user is not already following the user
    if (!user.followers.includes(req.body.id)) {
      // Add the current user's ID to the followers array of the user being followed
      await user.updateOne({
        $push: { followers: req.body.id },
      });

      // Add the user being followed's ID to the following array of the current user
      await currentUser.updateOne({ $push: { following: req.params.id } });
    } else {
      // If the current user is already following the user, return an error message
      res.status(403).json("you already follow this user");
    }
    // Send a success message back to the client
    res.status(200).json("following the user");
  } catch (err) {
    // Pass any errors to the next middleware function
    next(err);
  }
};

// This function is called when a user wants to unfollow another user
export const unFollow = async (req, res, next) => {
  try {
    // Find the user being unfollowed using their ID
    const user = await User.findById(req.params.id);
    // Find the current user who wants to unfollow the other user using their ID
    const currentUser = await User.findById(req.body.id);

    // If the current user is following the user
    if (currentUser.following.includes(req.params.id)) {
      // Remove the current user's ID from the followers array of the user being unfollowed
      await user.updateOne({
        $pull: { followers: req.body.id },
      });

      // Remove the user being unfollowed's ID from the following array of the current user
      await currentUser.updateOne({ $pull: { following: req.params.id } });
    } else {
      // If the current user is not following the user, return an error message
      res.status(403).json("you are not following this user");
    }
    // Send a success message back to the client
    res.status(200).json("Unfollowing user");
  } catch (err) {
    // Pass any errors to the next middleware function
    next(err);
  }
};
