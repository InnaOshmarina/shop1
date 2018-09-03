const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

// Create Schema
const OrderSchema = new Schema({
    products: {
        type: Array,
        required: true
    },
    totalQuantities: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    buyer: {
        type: Object,
        required: true
    },
    // buyer: {
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     email: {
    //         type: String,
    //         required: true
    //     },
    //     phoneNumber: {
    //         type: String,
    //         required: true
    //     }
    // },
    date: {
        type: Date,
        default: Date.now
    }
});

OrderSchema.plugin(mongoosePaginate);

module.exports = Order = mongoose.model('order', OrderSchema);