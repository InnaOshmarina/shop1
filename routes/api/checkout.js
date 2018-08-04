const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Input Validation
const validateCheckoutInput = require('../../validation/checkout');

// Checkout model
const Checkout = require('../../models/Checkout');

// Product model
const User = require('../../models/User');

// @route          GET api/checkout/test
// @description    Tests checkout route
router.get('/test', (req, res) => res.json({ msg: 'Checkout Works' }));

const logIn = passport.authenticate('jwt', { session: false });


// @route          POST api/checkout
// @description    Add checkout
// @access         Public and private
router.post('/', logIn, (req, res) => {
    const { errors, isValid } = validateCheckoutInput(req.body);

    // Check Validation
    if(!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
    }
    const specificProduct = {
        title: req.body.title,
        price: req.body.price,
        quantity: req.body.quantity
    };

     let object = new Checkout;

    // Add to shopping array (Добавить в массив покупок)
     object.shopping.unshift(specificProduct);
     object.user = req.user.id;

    // Save
    object.save().then(checkout => res.json(checkout));

});

// @route          GET api/checkout
// @description    Get checkout
// @access         Public
router.get('/', (req, res) => {
    Checkout.find()
        .sort({ date: -1 })
        .then(checkout => res.json(checkout))
        .catch(err => res.status(404).json({ noCheckoutFound: 'No checkout found' }));
});

// @route          GET api/checkout/:id
// @description    Get checkout by id
// @access         Public
router.get('/:id', (req, res) => {
    Checkout.findById(req.params.id)
        .then(checkout => res.json(checkout))
        .catch(err => res.status(404).json({ noCheckoutFound: 'No checkout found with that ID' }));
});
module.exports = router;