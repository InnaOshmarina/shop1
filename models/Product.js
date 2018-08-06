const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

// Create Schema
const ProductSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    category :
        {
            type: Schema.Types.ObjectId,
            ref: 'category'
        },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantityInStock: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate);

module.exports = Product = mongoose.model('product', ProductSchema);