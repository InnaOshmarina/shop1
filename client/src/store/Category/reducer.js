import {
    GET_CATEGORY,
    GET_CATEGORIES,
    DELETE_CATEGORY
} from './types';

export const initialState = {
  category: {},
  categories: {
      docs: [],
      total: 0,
      limit: 0,
      offset: 0
  }
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
