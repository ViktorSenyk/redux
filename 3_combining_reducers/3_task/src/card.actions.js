export const PRODUCT_ADD = 'PRODUCT/ADD';
export const PRODUCT_REMOVE = 'PRODUCT/DEL';

export const addProduct = product => ({ type: PRODUCT_ADD, payload: { product } });
export const removeProduct = productId => ({ type: PRODUCT_REMOVE, payload: { productId } });
