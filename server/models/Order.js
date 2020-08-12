const { Schema, model, Types } = require("mongoose");

const orderSchema = new Schema({
  created_at: Date,
  updated_at: Date,
  products: [
    {
      _id: {
        type: Types.ObjectId,
        required: [true, "Product id is required"],
      },
      name: {
        type: String,
        required: true,
      },
      category: String,
      description: String,
      price: {
        type: Number,
        required: true,
      },
      farmer: {
        _id: {
          type: Types.ObjectId,
          required: [true, "Farmer id is required"],
        },
        name: String,
        email: String,
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

orderSchema.pre("save", function(next) {
  this.created_at = new Date();
  next();
})

orderSchema.pre("update", function(next) {
  this.updated_at = new Date();
  next();
})

module.exports = model("Order", orderSchema);
