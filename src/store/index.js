import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice';
import cart from './slices/cart.slice';

// the Store
// ? All global states must be here
export default configureStore({
    reducer: {
        products,
        cart,
    }
})