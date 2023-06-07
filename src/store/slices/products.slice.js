import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from "./isLoading.slice";
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload,
        ascendingPriceProducts: state => {
            state.sort((a, b) =>  +a.price - +b.price)
        },
        descendingPriceProducts: state => {
            state.sort((a, b) =>  +b.price - +a.price)
        }
    }
})


//? Thunk get all products
export const getAllProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    const URL = 'https://ecommerceapp-verv.onrender.com/products'
    axios.get(URL)
    .then(response => dispatch(setProductsGlobal(response.data)))
    .finally(() => dispatch(setIsLoading(false)));
}

// ? Thunk to get products by category
export const getProductsByCategoryIdThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    const URL = `https://ecommerceapp-verv.onrender.com/products?categoryId=${id}`
    axios.get(URL)
    .then(response => dispatch(setProductsGlobal(response.data)))
    .finally(() => dispatch(setIsLoading(false)));
}

export const { setProductsGlobal, ascendingPriceProducts, descendingPriceProducts } = productsSlice.actions;

export default productsSlice.reducer;