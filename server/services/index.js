const AuthService = require("./AuthService");
const JwtService = require("./JwtService");
const ResponseService = require("./ResponseService");
const UserService = require("./UserService");
const EmailService    = require('./EmailService')
const OrderService = require("./OrderService");
const ProductService = require("./ProductService");
const ImageService = require("./ImagesService");



const verificationService = require("./verificationService");


module.exports = {
  AuthService,
  JwtService,
  ResponseService,
  UserService,
  EmailService,
  OrderService,
  ProductService,
  verificationService,
  ImageService
};
