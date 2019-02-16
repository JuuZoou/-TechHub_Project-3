import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productAmount: {
        type: Number,
        required: true
    },
    productSection: {
        type: String,
        required: true,
        enum: ["newAdded", "Popular", 'onSale']
    },
    productOwner: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = mongoose.model('product', ProductSchema);