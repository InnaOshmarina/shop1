import {connect} from "react-redux";

import Checkout from "../../components/basket/Checkout";
import {addToCart, deleteFromCart, deleteFormationOrder, isSentOrder} from "../../store/Basket/actions";
import {checkout} from "../../store/Order/actions";
import {
    getBasketSelector,
    getBasketTotalQuantitiesSelector,
    getBasketTotalAmountSelector,
    getBasketIsSentSelector
} from "../../store/Basket/selectors";

const mapStateToProps = state => ({
    docs: getBasketSelector(state),
    totalQuantities: getBasketTotalQuantitiesSelector(state),
    totalAmount: getBasketTotalAmountSelector(state),
    isSent: getBasketIsSentSelector(state)
});

const mapDispatchToProps = {
    addToCart,
    deleteFromCart,
    deleteFormationOrder,
    checkout,
    isSentOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

