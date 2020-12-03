const jwt = require('jsonwebtoken');
const userService = require('../../services/user.service');
const { SECRET_TOKEN_KEY } = process.env;

exports.googleLogin = async (req, res, next) => {
  const { email, username, imageSrc } = req.body;
  const targetUser = await userService.getUser(email);

  if (!targetUser) {
    const newUser = await userService.createUser({ email, username, imageSrc });

    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
      },
      SECRET_TOKEN_KEY,
    );

    return res.status(200).json({
      result: 'OK',
      data: { token, user: newUser },
    });
  }

  const token = jwt.sign(
    {
      id: targetUser._id,
      email: targetUser.email,
      username: targetUser.username,
    },
    SECRET_TOKEN_KEY,
  );

  res.status(200).json({
    result: 'OK',
    data: { token, user: targetUser }
  });
};
