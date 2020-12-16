const jwt = require('jsonwebtoken');
const { SECRET_TOKEN_KEY } = process.env;
const { RES_MESSAGE } = require('../../constants');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({
      result: RES_MESSAGE.FAIL,
      message: RES_MESSAGE.UNAUTHORIZED
    });
    return;
  }

  const decoded = jwt.verify(token, SECRET_TOKEN_KEY);
  res.locals.user = decoded;
  next();
};

module.exports = verifyToken;
