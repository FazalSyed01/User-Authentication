// Import the User model
const User = require("../models/userSchema");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

// // Get all users
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (error) {
//     res.status(500).send();
//   }
// };

// // Get a user by id
// exports.getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (error) {
//     res.status(500).send();
//   }
// };

// // Update a user by id
// exports.updateUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// // Delete a user by id
// exports.deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (error) {
//     res.status(500).send();
//   }
// };
