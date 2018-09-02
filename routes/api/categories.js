const express = require('express');
const router = express.Router();
const passport = require('passport');
const categoryRepository = require('../../repositories/CategoryRepository');
const EmailService = require('../../services/EmailService');

// Load Input Validation
const validateCategoryInput = require('../../validation/category');

// Category model
const Category = require('../../models/Category');

// @route          GET api/categories/test
// @description    Tests categories route
router.get('/test', (req, res) => {
    const data = {
        to: 'burgun90@mail.ru',
        subject: 'send mail shop 1',
        message: '<strong>Burger</strong>'
    };

    EmailService.sendEmail(data);
    res.json({ msg: 'Categories Works' });
});

// @route          GET api/categories
// @description    Get categories
// @access         Public
router.get('/', async (request, response) => {

    try {
        const categories = await categoryRepository.getAllCategories(request);
        response.status(200).json(categories);
    } catch (err) {
        response.status(500).json({
            error: err.message
        });
    }
    // queryHelper('Category', req, res)
});

// @route          GET api/categories/:id
// @description    Get category by id
// @access         Public
router.get('/:id', async (request, response) => {
    try {
        const category = await categoryRepository.getCategoryById(request.params.id);
        response.status(200).json(category);
    } catch (err) {
        response.status(404).json({
            error: err.message
        });
    }
});

// @route          POST api/categories
// @description    Create category
// @access         Private
router.post('/', passport.authenticate('jwt', { session: false }), async (request, response) => {
    const { errors, isValid } = validateCategoryInput(request.body);

    // Check Validation
    if(!isValid) {
        // If any errors, send 400 with errors object
        return response.status(400).json(errors);
    }

    try {
        const newCategory = await categoryRepository.create(request);
        response.status(200).json(newCategory);
    } catch (err) {
        response.status(404).json({
            error: err.message
        });
    }
});

// @route          POST api/category
// @description    Edit category
// @access         Private
router.post('/:id', passport.authenticate('jwt', { session: false }), async (request, response) => {
    const { errors, isValid } = validateCategoryInput(request.body);

    // Check Validation
    if(!isValid) {
        // Return any errors with 400 status
        return response.status(400).json(errors);
    }

    try {
        const updateCategory = await categoryRepository.update(request);
        response.status(200).json(updateCategory);
    } catch (err) {
        response.status(404).json({
            error: err.message
        });
    }
});

// @route          DELETE api/categories/:id
// @description    Delete category
// @access         Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        await categoryRepository.delete(request.params.id);

        response.status(204).json({ success: true });
    } catch (err) {
        response.status(404).json({
            error: err.message
        });
    }
});

module.exports = router;
