const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

// Create Schema
const OrderSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // },
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
    date: {
        type: Date,
        default: Date.now
    }
});

OrderSchema.plugin(mongoosePaginate);

module.exports = Order = mongoose.model('order', OrderSchema);