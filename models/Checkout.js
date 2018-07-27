const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CheckoutSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    shopping: [
        {
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Checkout = mongoose.model('checkout', CheckoutSchema);