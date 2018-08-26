import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from './types';

export const initialState = {
    docs: [],
    totalQuantities: 0,
    totalAmount: 0
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:

            let newObj = {
                item: action.payload.product,
                quantity: action.payload.quantity,
                amount: parseFloat(action.payload.product.price)
            };

            let getQuantities = () => {
                let quantities = newObj.quantity;
                state.docs.map(doc => (quantities += doc.quantity));
                return quantities;
            };
            let number = state.docs.reduce(((sum, doc) => sum + doc.amount), 0);

            // let getTotalAmount = () => {
            //     let totalamount = newObj.amount;
            //     state.docs.map(doc => (totalamount += doc.amount));
            //     return totalamount;
            // };

            // let getTotalAmount = () => {
            //     let inna = state.docs.reduce(((sum, doc) => sum + doc.amount), 0);
            //     return inna;
            // };


            let record = state.docs.find(doc => doc.item._id === action.payload.product._id);
            if(!record) {
                // console.log(typeof(action.payload.quantity));
                // console.log(typeof(state.totalAmount));
                // console.log(typeof(newObj.amount));
                return {
                    ...state,
                    docs: [...state.docs, newObj],
                    totalQuantities: getQuantities(),
                    //totalAmount: getTotalAmount()
                    totalAmount: number + parseFloat(action.payload.product.price)
                };
            }
            else {
                let newDocs = state.docs.map(doc => {
                    let answer = doc;
                    if (doc.item._id === action.payload.product._id) {
                        answer = {
                            item: doc.item,
                            quantity: doc.quantity + action.payload.quantity,
                            amount: parseFloat(doc.item.price) * (doc.quantity + action.payload.quantity)
                        }
                    }
                    return answer;

                });
                return {
                    ...state,
                    docs: [...newDocs],
                    totalQuantities: getQuantities(),
                    totalAmount: number + parseFloat(action.payload.product.price)
                };
            }

        case DELETE_FROM_CART:

            let newDocs = state.docs.filter(doc => doc.item._id !== action.payload);

            let getQuantitiesAD = () => {
                let quantities = 0;
                newDocs.map(doc => (quantities += doc.quantity));
                return quantities;
            };

            let getTotalAmountAD = () => {
                let totalamount = 0;
                newDocs.map(doc => (totalamount += doc.amount));
                return totalamount;
            };
            return {
                ...state,
                docs: [...newDocs],
                totalQuantities: getQuantitiesAD(),
                totalAmount: getTotalAmountAD()
            };
        default:
            return state;
    }
}

