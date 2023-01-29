import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const { setProductsGlobal } = productsSlice.actions;

export default productsSlice.reducer;

//? Thunk get all products
export const getAllProducts = () => (dispatch) => {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    axios.get(URL)
        .then(response => dispatch(setProductsGlobal(response.data)))
        .catch(error => console.log('error', error))
}

// ? Thunk to get products by category
export const getProductsByCategoryId = (id) => (dispatch) => {
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
    axios.get(URL)
        .then(response => dispatch(setProductsGlobal(response.data)))
        .catch(error => console.log('error', error))
}
