const express = require('express');
const router = express.Router();
const passport = require('passport');
const categoryRepository = require('../../repositories/CategoryRepository');

// Load Input Validation
const validateCategoryInput = require('../../validation/category');

// Category model
const Category = require('../../models/Category');

// @route          GET api/categories/test
// @description    Tests categories route
router.get('/test', (req, res) => res.json({ msg: 'Categories Works' }));

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
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCategoryInput(req.body);

    // Check Validation
    if(!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
    }

    const newCategory = new Category({
        title: req.body.title,
        description: req.body.description,
        user: req.user.id
    });

    newCategory.save().then(category => res.json(category));
});

// @route          POST api/category
// @description    Edit category
// @access         Private
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCategoryInput(req.body);

    // Check Validation
    if(!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // Get fields
    const categoryFields = {};
    if(req.user.id) categoryFields.user = req.user.id;
    if(req.body.title) categoryFields.title = req.body.title;
    if(req.body.description) categoryFields.description = req.body.description;

    Category.findById(req.params.id)
        .then(category => {
            // Update
            Category.findOneAndUpdate(
                { _id: req.params.id },
                { $set: categoryFields },
                { new: true}
            ).then(category => res.json(category));
        });
});

// @route          DELETE api/categories/:id
// @description    Delete category
// @access         Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Category.findById(req.params.id)
        .then(category => category.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ categorynotfound: 'No category found' }));
});

module.exports = router;