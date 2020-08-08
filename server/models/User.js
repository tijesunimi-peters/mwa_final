const { Schema, model } = require("mongoose");
const { hashSync, compareSync } = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [ true, "Username is required" ],
    index: {
      sparse: true,
      unique: true
    }
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    min: [8, "Password length should be minimum 8 chars"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    index: {
      sparse: true,
      unique: true
    }
  }
});

UserSchema.pre("save", function (next) {
  this.password = hashSync(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, compareSync(plaintext, this.password));
};

UserSchema.methods.findByEmail = function(email, cb) {
  model("User").findOne({ email }, cb);
}

module.exports = model("User", UserSchema);
