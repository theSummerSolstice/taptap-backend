const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ result: 'OK' });
});

module.exports = router;
