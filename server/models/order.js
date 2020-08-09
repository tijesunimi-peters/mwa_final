const { Schema, model, Types } = require("mongoose");

const orderSchema = new Schema({
  product: [
    {
      name: String,
      description: String,
      price: Number,
      farmer: {
        _id: Types.ObjectId,
        name: String,
        email: String,
        address: String,
      },
    },
  ],
  customer: { name: String, email: String, address: String },
  quantity: { type: Number, default: 1 },
  status: String,
});

module.exports = model("Order", orderSchema);
