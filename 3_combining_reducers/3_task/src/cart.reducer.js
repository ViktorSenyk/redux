import { PRODUCT_ADD, PRODUCT_REMOVE } from './cart.actions';

const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ADD:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    case PRODUCT_REMOVE:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.productId),
      };
    default:
      return state;
  }
};

export default productsReducer;
