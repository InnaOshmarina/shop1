import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS, GET_PRODUCT} from "./types";

export const getProductCreator = (productData) => ({
    type: GET_PRODUCT,
    payload: productData

});

export const addProductCreator = () => ({
    type: ADD_PRODUCT,
});

export const getProductsCreator = (productsData) => ({
    type: GET_PRODUCTS,
    payload: productsData

});

export const deleteProductCreator = (productId) => ({
    type: DELETE_PRODUCT,
    payload: productId
});

export const editProductCreator = (productId) => ({
    type: EDIT_PRODUCT,
    payload: productId
});