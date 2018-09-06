import {connect} from "react-redux";

import Dashboard from "../../components/dashboard/Dashboard";
import { getCountItems } from "../../store/Dashboard/actions";
import {
    getDashboardSelector,
    getDashboardCategoriesSelector,
    getDashboardProductsSelector,
    getDashboardOrdersSelector
} from "../../store/Dashboard/selectors";


const mapStateToProps = state => ({
    // dashboard: getDashboardSelector(state),
    // categoriesCount: getDashboardCategoriesSelector(state),
    // productsCount: getDashboardProductsSelector(state),
    // ordersCount: getDashboardOrdersSelector(state)
    categoriesCount: state.dashboard.categories,
    productsCount: state.dashboard.products,
    ordersCount: state.dashboard.orders
});

const mapDispatchToProps = {
    getCountItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

