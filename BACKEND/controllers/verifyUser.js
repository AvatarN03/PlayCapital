const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) {
      return res.status(403).json({ msg: 'Token missing' });
    }
  
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(403).json({ msg: 'Token missing' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ msg: 'Invalid token' });
  
      req.user = user;
      next();
    });
  };

  module.exports = verifyToken;
  