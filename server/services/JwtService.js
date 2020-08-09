const jwt = require("jsonwebtoken");

class JwtService {
  static generateToken(req, _, next) {
    
    if (!req.passForToken && !req.passForToken.valid) return next();

    const token = jwt.sign(req.passForToken.user, process.env.JWT_SECRET);
    req.success = { data: token };
    next();
  }

  static checkToken(req, _, next) {
    next();
  }
}

module.exports = JwtService;
