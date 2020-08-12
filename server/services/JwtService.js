const jwt = require("jsonwebtoken");

class JwtService {
  static generateToken(req, _, next) {
    if (!req.passForToken && !req.passForToken.valid) return next();

    const token = jwt.sign(req.passForToken.user, process.env.JWT_SECRET);
    req.success = { data: { token, user: req.passForToken.user } };
    next();
  }

  static checkToken(req, _, next) {
    if (!req.headers.authorization) {
      return next({
        message: "No token found",
        status: 400
      });
    }

    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        return next({
          message: { message: err.message, reason: "Invalid token" },
          status: 401
        });
      }
      req.loggedInUser = decoded;
      return next();
    });
  }

  static verifyToken(req, _, next) {
    const { token } = req.body;

    try {
      const result = jwt.verify(token, process.env.JWT_SECRET);
      req.verifyUser = result;
      next();
    } catch (e) {
      return next({
        message: { message: err.message, reason: "Invalid token" },
        status: 400
      });
    }
  }
}

module.exports = JwtService;
