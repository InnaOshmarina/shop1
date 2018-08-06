const express = require('express');
const router = express.Router();
const passport = require('passport');
const queryHelper = require('../../helpers/queryHelper');

// Load Input Validation
const validateProductInput = require('../../validation/product');

// Product model
const Product = require('../../models/Product');

// @route          GET api/products/test
// @description    Tests products route
router.get('/test', (req, res) => res.json({msg: 'Products Works'}));

// @route          GET api/products
// @description    Get products
// @access         Public
router.get('/', async (request, response) => {

    try {
        const customOptions = {
            populate: 'category'
        };

        const products = await queryHelper('Product', request, customOptions);
        response.status(200).json(products);
    } catch (err) {
        response.status(500).json({
            error: err.message
        });
    }
// queryHelper('Product', req, res)
});

// @route          GET api/products/:id
// @description    Get product by id
// @access         Public
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(404).json({noProductFound: 'No product found with that ID'}));
});

// @route          POST api/products
// @description    Create product
// @access         Private
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validateProductInput(req.body);

    // Check Validation
    if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
    }

    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        quantityInStock: req.body.quantityInStock,
        user: req.user.id,
        category: req.body.category
    });

    // !!!!  ВОТ ТАК ДЕЛАТЬ НЕ НУЖНО !!!!!
    // const newProduct = {
    //     title: req.body.title,
    //     description: req.body.description,
    //     price: req.body.price,
    //     quantityInStock: req.body.quantityInStock,
    //     user: req.user.id
    // };

    newProduct.save().then(product => res.json(product));
});

// @route          POST api/product
// @description    Edit product
// @access         Private
router.post('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validateProductInput(req.body);

    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // Get fields
    const productFields = {};
    //productFields.user = req.user.id;
    if (req.user.id) productFields.user = req.user.id;
    if (req.body.title) productFields.title = req.body.title;
    if (req.body.description) productFields.description = req.body.description;
    if (req.body.price) productFields.price = req.body.price;
    if (req.body.quantityInStock) productFields.quantityInStock = req.body.quantityInStock;
    if (req.body.category) productFields.category = req.body.category;

    Product.findById(req.params.id)
        .then(product => {
            // Update
            Product.findOneAndUpdate(
                {_id: req.params.id},
                {$set: productFields},
                {new: true}
            ).then(product => res.json(product));
        });
});

// @route          DELETE api/products/:id
// @description    Delete product
// @access         Private
router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    Product.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({productNotFound: 'No product found'}));
});

module.exports = router;