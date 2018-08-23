import {connect} from "react-redux";

import Checkout from "../../components/basket/Checkout";
import {deleteFromCart} from "../../store/Basket/actions";
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
    deleteFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

