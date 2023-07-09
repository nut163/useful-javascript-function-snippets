const jwt = require('jsonwebtoken');

// Middleware for token verification
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

// Middleware for role-based authorization
function authorizeRole(role) {
  return function(req, res, next) {
    const token = req.token;
    if (token) {
      jwt.verify(token, 'YOUR_SECRET_KEY', (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          if (authData.role === role) {
            next();
          } else {
            res.status(403).send('Unauthorized role');
          }
        }
      });
    } else {
      res.sendStatus(403);
    }
  }
}

module.exports = {
  verifyToken,
  authorizeRole
};