const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProductInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.price = !isEmpty(data.price) ? data.price : '';
    data.quantityInStock = !isEmpty(data.quantityInStock) ? data.quantityInStock : '';
    data.category = !isEmpty(data.category) ? data.category : '';

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if(Validator.isEmpty(data.category)) {
        errors.category = 'Category field is required';
    }

    if(!Validator.isLength(data.description, { min: 10, max: 500 })) {
        errors.description = 'Description of product must be between 10 and 500 characters';
    }

    if(Validator.isEmpty(data.description)) {
        errors.description = 'Description field is required';
    }

    if(Validator.isEmpty(data.price)) {
        errors.price = 'Price field is required';
    }

    if(!Validator.isInt(data.quantityInStock, { min: 0 })) {
        errors.quantityInStock = 'QuantityInStock field must be zero or positive integer';
    }

    if(Validator.isEmpty(data.quantityInStock)) {
        errors.quantityInStock = 'QuantityInStock field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};