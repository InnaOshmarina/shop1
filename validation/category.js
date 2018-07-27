const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCategoryInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.description = !isEmpty(data.description) ? data.description : '';

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if(!Validator.isLength(data.description, { min: 10, max: 1000 })) {
        errors.description = 'Description of category must be between 10 and 1000 characters';
    }

    if(Validator.isEmpty(data.description)) {
        errors.description = 'Description field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};