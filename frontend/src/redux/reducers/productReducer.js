
//! components
import * as actionType from "../constants/productConstant";

export const getProductReducer = (state = { products: [] }, action) => {
   switch (action.type){
      case actionType.GET_PRODUCTS_SUCCESS:
         return { products: action.payload}
      case actionType.GET_PRODUCTS_FAILURE:
         return { error: action.payload }
      default:
         return state
   }
};

export const getProductDetailsReducer = (state = {product:{}}, action) => {
   switch (action.type){
      case actionType.GET_PRODUCT_DETAILS_REQUEST:
         return {Loading: true}
      case actionType.GET_PRODUCT_DETAILS_SUCCESS:
         return {Loading: false, product: action.payload}
      case actionType.GET_PRODUCT_DETAILS_FAIL:
         return {Loading: false, error: action.payload}
      case actionType.GET_PRODUCT_DETAILS_RESET:
         return {product: {}}
      default:
         return state
   }
};