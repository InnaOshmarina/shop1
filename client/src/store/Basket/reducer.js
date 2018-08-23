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
                item: action.payload,
                quantity: 1,
                amount: parseFloat(action.payload.price)
            };

            let getQuantities = () => {
                let quantities = newObj.quantity;
                state.docs.map(doc => (quantities += doc.quantity));
                return quantities;
            };

            let getTotalAmount = () => {
                let totalamount = newObj.amount;
                state.docs.map(doc => (totalamount += doc.amount));
                return totalamount;
            };

            let record = state.docs.find(doc => doc.item._id === action.payload._id);
            if(!record) {
                return {
                    ...state,
                    docs: [...state.docs, newObj],
                    totalQuantities: getQuantities(),
                    totalAmount: getTotalAmount()
                };
            } else {
                let newDocs = state.docs.map(doc => {
                    let answer = doc;
                    if (doc.item._id === action.payload._id) {
                        answer = {
                            item: doc.item,
                            quantity: doc.quantity + 1,
                            amount: parseFloat(doc.item.price) * (doc.quantity + 1)
                        }
                    }
                    console.log(typeof(answer.amount));
                    return answer;
                });
                return {
                    ...state,
                    docs: [...newDocs],
                    totalQuantities: getQuantities(),
                    totalAmount: getTotalAmount()
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

