import {
    GET_CATEGORY,
    GET_CATEGORIES,
    DELETE_CATEGORY
} from '../actions/types';

const initialState = {
  category: {},
  categories: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
      case DELETE_CATEGORY:
          return {
              ...state,
              categories: state.categories.filter(category => category._id !== action.payload)
          };
    default:
      return state;
  }
}
