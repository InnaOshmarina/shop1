import {connect} from "react-redux";

import Checkout from "../../components/basket/Checkout";
import {deleteFromCart} from "../../store/Basket/actions";
import {getBasketSelector} from "../../store/Basket/selectors";

const mapStateToProps = state => ({
    docs: getBasketSelector(state)
});

const mapDispatchToProps = {
    deleteFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

