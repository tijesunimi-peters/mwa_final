const mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String,
    description: String,
    price: {
        type: Number,
        required: true
    },
    farmer: {
        _id: {
            type: mongoose.Types.ObjectId,
            required: [true, "Farmer id is required"],
        },
        name: String,
        email: String
    }

});
module.exports = mongoose.model("Product", ProductSchema);
