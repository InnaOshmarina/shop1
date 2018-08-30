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

    static async delete(id) {
        const category = await CategoryRepository.getCategoryById(id);

        if (!category) {
            throw new Error('category is not found');
        }

        return category.remove();
    }

    static async create(request) {
        const newCategory = new Category({
            title: request.body.title,
            description: request.body.description,
            user: request.user.id
        });

        return newCategory.save();
    }

    static async update(request) {

        const categoryFields = {};
        if(request.user.id) categoryFields.user = request.user.id;
        if(request.body.title) categoryFields.title = request.body.title;
        if(request.body.description) categoryFields.description = request.body.description;

        const category = await Category.findById(request.params.id);
        console.log(category);
        if (!category) {
            return new Error('Not found category');
        }

        return Category.findOneAndUpdate(
            { _id: request.params.id },
            { $set: categoryFields },
            { new: true}
        );
    }
}

module.exports = CategoryRepository;
