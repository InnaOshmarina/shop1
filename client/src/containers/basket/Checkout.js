import {connect} from "react-redux";

import Checkout from "../../components/basket/Checkout";
import {
    addToCart, deleteFromCart, deleteFormationOrder, isSentOrder,
    setDefaultIsSent, addInfoBuyer
} from "../../store/Basket/actions";
import {checkout} from "../../store/Order/actions";
import {
    getBasketSelector,
    getBasketTotalQuantitiesSelector,
    getBasketTotalAmountSelector,
    getBasketIsSentSelector,
    getBasketInfoBuyerSelector
} from "../../store/Basket/selectors";

const mapStateToProps = state => ({
    docs: getBasketSelector(state),
    totalQuantities: getBasketTotalQuantitiesSelector(state),
    totalAmount: getBasketTotalAmountSelector(state),
    buyer: getBasketInfoBuyerSelector(state),
    isSent: getBasketIsSentSelector(state),
    errors: state.errors
});

const mapDispatchToProps = {
    addToCart,
    deleteFromCart,
    deleteFormationOrder,
    addInfoBuyer,
    checkout,
    isSentOrder,
    setDefaultIsSent
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

