import {
    ADD_CATEGORY,
    GET_CATEGORY,
    GET_CATEGORIES,
    DELETE_CATEGORY
} from './types';

import isEmpty from "../../validation/is-empty";

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
      case ADD_CATEGORY:
      return {
          ...state,
          categories: {
              ...state.categories,
              docs: [...state.categories.docs, action.payload]
          }
      };
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
        console.log(state.categories);
      return {
          ...state,
          categories: {
              ...state.categories,
              docs: state.categories.docs.filter(category => category._id !== action.payload)
          }
      };
    default:
      return state;
  }
}
