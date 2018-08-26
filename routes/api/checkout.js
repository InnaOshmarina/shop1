const express = require('express');
const router = express.Router();
const passport = require('passport');
const queryHelper = require('../../helpers/queryHelper');

// Load Input Validation
//const validateCheckoutInput = require('../../validation/checkout');

// Checkout model
const Checkout = require('../../models/Checkout');

// Product model
const User = require('../../models/User');

// @route          GET api/orders/test
// @description    Tests checkout route
router.get('/test', (req, res) => res.json({ msg: 'Checkout Works' }));

const logIn = passport.authenticate('jwt', { session: false });


// @route          POST api/orders
// @description    Add order
// @access         Public
router.post('/', (req, res) => {
    //const { errors, isValid } = validateCheckoutInput(req.body);

    // Check Validation
    // if(!isValid) {
    //     // If any errors, send 400 with errors object
    //     return res.status(400).json(errors);
    // }
    const newOrder = new Checkout({
        products: req.body.docs,
        totalQuantities: req.body.totalQuantities,
        totalAmount: req.body.totalAmount
    });

    // Save
    newOrder.save().then(checkout => res.json(checkout));

});

// @route          GET api/orders
// @description    Get orders
// @access         Public
router.get('/', async (request, response) => {
    try {
        const orders = await queryHelper('Checkout', request);
        response.status(200).json(orders);
    } catch (err) {
        response.status(500).json({
            error: err.message
        });
    }
});

// @route          GET api/orders/:id
// @description    Get order by id
// @access         Public
router.get('/:id', (req, res) => {
    Checkout.findById(req.params.id)
        .then(checkout => res.json(checkout))
        .catch(err => res.status(404).json({ noCheckoutFound: 'No order found with that ID' }));
});

module.exports = router;