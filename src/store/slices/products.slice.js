import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from "./isLoading.slice";
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

//? Thunk get all products
export const getAllProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    axios.get(URL)
    .then(response => dispatch(setProductsGlobal(response.data)))
    .finally(() => dispatch(setIsLoading(false)));
}

// ? Thunk to get products by category
export const getProductsByCategoryIdThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
    axios.get(URL)
    .then(response => dispatch(setProductsGlobal(response.data)))
    .finally(() => dispatch(setIsLoading(false)));
}

export const { setProductsGlobal } = productsSlice.actions;

export default productsSlice.reducer;