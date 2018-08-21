import {connect} from "react-redux";
import compose from "redux/src/compose";

import ProductsList from "../../components/product/ProductsList";
import Filter from "../../decorators/Filter";
import {deleteProduct, getProducts} from "../../store/Product/actions";
import {
    getProductsLimitSelector,
    getProductsOffsetSelector,
    getProductsSelector,
    getProductsTotalSelector
} from "../../store/Product/selectors";


const mapStateToProps = state => ({
    products: getProductsSelector(state),
    limit: getProductsLimitSelector(state),
    offset: getProductsOffsetSelector(state),
    total: getProductsTotalSelector(state),
});

const mapDispatchToProps = {
    getData: getProducts,
    deleteProduct
};

const defaultFilter = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    (component) => Filter(component, defaultFilter)
)(ProductsList);

