import {connect} from "react-redux";
import compose from "redux/src/compose";

import OrdersList from "../../components/order/OrdersList";
import Filter from "../../decorators/Filter";
import {getOrders} from "../../store/Order/actions";
import {
    getOrdersLimitSelector,
    getOrdersOffsetSelector,
    getOrdersSelector,
    getOrdersTotalSelector
} from "../../store/Order/selectors";


const mapStateToProps = state => ({
    orders: getOrdersSelector(state),
    limit: getOrdersLimitSelector(state),
    offset: getOrdersOffsetSelector(state),
    total: getOrdersTotalSelector(state),
});

const mapDispatchToProps = {
    getData: getOrders
};

const defaultFilter = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    (component) => Filter(component, defaultFilter)
)(OrdersList);

