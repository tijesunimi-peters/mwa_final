const { Schema, model, Types } = require("mongoose");
const { hashSync, compareSync } = require("bcrypt");

const UserSchema = new Schema({
  verified: Boolean,
  username: {
    type: String,
    required: [true, "Username is required"],
    index: {
      sparse: true,
      unique: true,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    min: [8, "Password length should be minimum 8 chars"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    index: {
      sparse: true,
      unique: true,
    },
  },

  billing: {
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipcode: {
      type: Number,
      min: [6, "zipcode length should be minimum 6 chars"],
    },
  },
  address: {
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipcode: {
      type: {
        type: Number,
        min: [5, "zipcode length should be minimum 5 chars"],
      },
    },
    buliding: {
      blg_no: {
        type: Number,
      },
      room_no: {
        type: Number,
      },
    },
  },
  role: {
    type: String,
    default: "basic",
    enum: ["customer", "superuser", "farmer"],
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

UserSchema.pre("save", function (next) {
  this.password = hashSync(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, compareSync(plaintext, this.password));
};

UserSchema.methods.findByEmail = function (email, cb) {
  model("User").findOne({ email }, cb);
};

module.exports = model("User", UserSchema);
