const queryHelper = require('../helpers/queryHelper');
const Category = require('../models/Category');

const model = 'Category';

class CategoryRepository {
    static async getAllCategories(request) {
        const customOptions = {
            populate: 'user'
        };

        return  await queryHelper(model, request, customOptions);
    }

    static async getCategoryById(id) {
        return Category.findById(id)
    }
}

module.exports = CategoryRepository;