const mongoose = require("mongoose");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  auth: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
  }
};

const URL = process.env.MONGODB_URI || `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`

module.exports = (async () => {
  try {
    await mongoose.connect(URL, options);
    console.log("Connected to Database....");
  } catch(e) {
    console.error(e);
  }
})();