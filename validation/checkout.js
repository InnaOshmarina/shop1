const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCheckoutInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.price = !isEmpty(data.price) ? data.price : '';
    data.quantity = !isEmpty(data.quantity) ? data.quantity : '';

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if(Validator.isEmpty(data.price)) {
        errors.price = 'Price field is required';
    }

    if(!Validator.isInt(data.quantity, { min: 1 })) {
        errors.quantity = 'Quantity field must be positive integer';
    }

    if(Validator.isEmpty(data.quantity)) {
        errors.quantity = 'Quantity field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};