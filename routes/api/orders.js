const express = require('express');
const router = express.Router();
const passport = require('passport');
const queryHelper = require('../../helpers/queryHelper');
const EmailService = require('../../services/EmailService');

// Load Input Validation
const validateOrderInput = require('../../validation/order');

// Order model
const Order = require('../../models/Order');

// Product model
const User = require('../../models/User');

// @route          GET api/orders/test
// @description    Tests orders route
router.get('/test', (req, res) => res.json({ msg: 'Orders Works' }));

// const logIn = passport.authenticate('jwt', { session: false });


// @route          POST api/orders
// @description    Add order
// @access         Public
router.post('/', (req, res) => {
    const { errors, isValid } = validateOrderInput(req.body);

    // Check Validation
    // if(!isValid) {
        //If any errors, send 400 with errors object
        // const error = {
        //     success: false,
        //     errors: {}
        // };
        // return res.status(400).json(errors);
        //return res.status(400).json(error.errors);
    //}
    const newOrder = new Order({
        products: req.body.docs,
        totalQuantities: req.body.totalQuantities,
        totalAmount: req.body.totalAmount,
        buyer: req.body.buyer
    });

    const data = {
        to: req.body.buyer.email,
        subject: 'send mail shop 1',
        message: `<pre>${JSON.stringify(req.body, 0, 2)}</pre>`
    };

    EmailService.sendEmail(data);

    // Save
    newOrder.save().then(order => res.json(order));

});

// @route          GET api/orders
// @description    Get orders
// @access         Public
router.get('/', async (request, response) => {
    try {
        const orders = await queryHelper('Order', request);
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
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(err => res.status(404).json({ noOrderFound: 'No order found with that ID' }));
});

module.exports = router;