const express = require('express');
const router = express.Router();
const queryHelper = require('../../helpers/queryHelper');

// Product model
const Product = require('../../models/Product');
// Category model
const Category = require('../../models/Category');
// Order model
const Order = require('../../models/Order');

// @route          GET api/dashboard/test
// @description    Tests products route
router.get('/test', (req, res) => res.json({msg: 'Dashboard Works'}));


// @route          GET api/dashboard/items-count
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


// @route          GET api/dashboard/items-count-in-category
// @description    Get the count of the products in the category.
router.get('/items-count-in-category', async (request, response) => {
    try {
        const limit = 500;

        const customOptionsProduct = {
            limit
        };

        const products = await queryHelper('Product', request, customOptionsProduct);

        const customOptionsCategory = {
            limit
        };

        const categories = await queryHelper('Category', request, customOptionsCategory);

        let chartData = [];

        chartData =  categories.docs.map(element => {
             const category = {
                 _id: element._id,
                 title: element.title,
                 products: []
             };
             return category;
        });


        products.docs.map(product => {
              const currentCategory = chartData.find(elCat => {
                 // console.log(elCat, product)
                  return  String(elCat._id) === String(product.category)
              });

            console.log(currentCategory);
            if (currentCategory) {
                currentCategory.products.push(product._id)
            }
        });

        response.status(200).json(chartData);
    }
    catch (err) {
        response.status(404).json({
            nochartdatafound: 'No chart data found'
        });
    }
});

module.exports = router;
