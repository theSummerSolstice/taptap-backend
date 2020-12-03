const User = require('../models/User');

exports.getUser = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

exports.createUser = async (data) => {
  const newUser = await User.create(data);
  return newUser;
};
