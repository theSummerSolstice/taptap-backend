const mongoose = require('mongoose');
const User = require('../models/User');

exports.getUserByEmail = async (email) => {
  const user = await User.findOne({ email }).populate('myBoards').populate('authorizedBoards');
  return user;
};

exports.getUserById = async (id) => {
  const objectId = mongoose.Types.ObjectId(id);
  const user = await User.findById(objectId).populate('myBoards').populate('authorizedBoards');
  return user;
};

exports.createUser = async (data) => {
  const newUser = await User.create(data);
  return newUser;
};

exports.updateMyBoards = async (id, data) => {
  const objectId = mongoose.Types.ObjectId(id);
  await User.findByIdAndUpdate(
    objectId,
    { $addToSet: { myBoards: data } },
  );
};
