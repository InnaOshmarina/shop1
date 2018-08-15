import {deleteCategory, getCategories} from "../../store/Category/actions";
import {
    getCategoriesLimitSelector,
    getCategoriesOffsetSelector,
    getCategoriesSelector, getCategoriesTotalSelector
} from "../../store/Category/selectors";
import Filter from "../../decorators/Filter";
import {connect} from "react-redux";
import compose from "redux/src/compose";
import CategoriesList from "../../components/category/CategoriesList";

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state),
    limit: getCategoriesLimitSelector(state),
    offset: getCategoriesOffsetSelector(state),
    total: getCategoriesTotalSelector(state)
});

const mapDispatchToProps = {
    getData: getCategories,
    deleteCategory
};

const defaultFilter = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    (component) => Filter(component, defaultFilter)
)(CategoriesList);