const jwt = require('jsonwebtoken');
const { SECRET_TOKEN_KEY } = process.env;

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ reulst: 'FAIL', message: 'Unauthorized' });
    return;
  }

  const decoded = jwt.verify(token, SECRET_TOKEN_KEY);
  res.locals.user = decoded;
  next();
};
