const express = require('express');
const router = express.Router();

// Product model
const Product = require('../../models/Product');
// Category model
const Category = require('../../models/Category');
// Order model
const Order = require('../../models/Order');

// @route          GET api/dashboard/test
// @description    Tests products route
router.get('/test', (req, res) => res.json({msg: 'Dashboard Works'}));


// @route          GET api/dashboard
// @description    Get the count of the items for each collection.
router.get('/items-count', async (request, response) => {
    try {
        const categories = await Category.count();
        const products = await Product.count();
        const orders = await Order.count();
        response.status(200).json({categories, products, orders});
    }
    catch (err) {
        response.status(404).json({
            noitemsfound: 'No items found'
        });
    }
});

module.exports = router;
