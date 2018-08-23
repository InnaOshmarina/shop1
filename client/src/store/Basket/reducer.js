import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from './types';

export const initialState = {
    docs: []
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            //let record = state.docs.find(doc => doc.item._id === action.payload._id);
            let record = state.docs.find(doc => doc._id === action.payload._id);
            if(!record) {
                let newObj = {
                    item: action.payload,
                    quantity: 1
                };
                return {
                    ...state,
                    docs: [...state.docs, newObj]
                };
            }
            else {
                let newDocs = state.docs.map(doc => {
                    let answer = doc;
                    if (doc.item._id === action.payload._id) {
                        answer = {
                            item: doc.item,
                            quantity: doc.quantity + 1
                        }
                    }
                    return answer;
                });
                return {
                    ...state,
                    docs: [...state.docs, newDocs]
                };
            }


        case DELETE_FROM_CART:
            return {
                ...state,
                docs: state.docs.filter(doc => doc.item._id !== action.payload)
            };
        default:
            return state;
    }
}

// case ADD_TO_CART:
//     return {
//         ...state,
//         docs: [...state.docs, action.payload]
//     };

