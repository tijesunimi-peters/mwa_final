const mongoose = require("mongoose");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  auth: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
  }
};

const URL = process.env.MONGO_URL || `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`

module.exports = (async () => {
  try {
    console.log(URL);
    await mongoose.connect(URL, options)
  } catch(e) {
    console.error(e);
  }
})();