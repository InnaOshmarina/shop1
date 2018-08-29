import {connect} from "react-redux";

import Checkout from "../../components/basket/Checkout";
import {addToCart, deleteFromCart, deleteFormationOrder} from "../../store/Basket/actions";
import {checkout} from "../../store/Order/actions";
import {
    getBasketSelector,
    getBasketTotalQuantitiesSelector,
    getBasketTotalAmountSelector
} from "../../store/Basket/selectors";

const mapStateToProps = state => ({
    docs: getBasketSelector(state),
    totalQuantities: getBasketTotalQuantitiesSelector(state),
    totalAmount: getBasketTotalAmountSelector(state)
});

const mapDispatchToProps = {
    addToCart,
    deleteFromCart,
    deleteFormationOrder,
    checkout
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

