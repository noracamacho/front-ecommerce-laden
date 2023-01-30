import { createSlice } from '@reduxjs/toolkit';
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
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    axios.get(URL)
    .then(response => dispatch(setProductsGlobal(response.data)))
    .catch(error => console.log('error', error))
}

// ? Thunk to get products by category
export const getProductsByCategoryIdThunk = (id) => (dispatch) => {
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
    axios.get(URL)
    .then(response => dispatch(setProductsGlobal(response.data)))
    .catch(error => console.log('error', error))
}

export const { setProductsGlobal } = productsSlice.actions;

export default productsSlice.reducer;