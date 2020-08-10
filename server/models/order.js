const { Schema, model, Types } = require("mongoose");

const orderSchema = new Schema({
  product: [
    {
      _id: {
        type: Types.ObjectId,
        required: [true, "Product id is required"],
      },
      name: String,
      description: String, 
      price: Number,
      farmer: {
        _id: {
          type: Types.ObjectId,
          required: [true, "Farmer id is required"],
        },
        name: String,
        email: String,
        address: String,
      },
    },
  ],
  customer: {
    _id: {
      type: Types.ObjectId,
      required: [true, "Customer id is required"],
    },
    name: String,
    email: String,
    address: String,
  },
  quantity: { type: Number, default: 1 },
  status: String,
});

module.exports = model("Order", orderSchema);
