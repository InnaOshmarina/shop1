import {deleteCategory, getCategories} from "../../store/Category/actions";
import {
    getCategoriesLimitSelector,
    getCategoriesOffsetSelector,
    getCategoriesSelector,
    getCategoriesTotalSelector
} from "../../store/Category/selectors";
import Filter from "../../decorators/Filter";
import {connect} from "react-redux";
import compose from "redux/src/compose";
import CategoriesList from "../../components/category/CategoriesList";
import {GET_CATEGORIES} from "../../store/Category/types";
import {getActionIsInProgress} from "../../store/Action/selectors";

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state),
    limit: getCategoriesLimitSelector(state),
    offset: getCategoriesOffsetSelector(state),
    total: getCategoriesTotalSelector(state),
    isLoading: getActionIsInProgress(state, { name: GET_CATEGORIES })
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
