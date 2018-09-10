import {connect} from "react-redux";

import Dashboard from "../../components/dashboard/Dashboard";
import {getChartData, getCountItems} from "../../store/Dashboard/actions";
import {
    getCategoriesCountSelector,
    getProductsCountSelector,
    getOrdersCountSelector,
    getChartDataSelector
} from "../../store/Dashboard/selectors";


const mapStateToProps = state => ({
    categoriesCount: getCategoriesCountSelector(state),
    productsCount: getProductsCountSelector(state),
    ordersCount: getOrdersCountSelector(state),
    dataForChart: getChartDataSelector(state)

});

const mapDispatchToProps = {
    getCountItems,
    getChartData
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);




