class JwtService {
  static generateToken(req, _, next) {
    next();
  }

  static checkToken(req, _, next) {
    next();
  }
}

module.exports = JwtService;