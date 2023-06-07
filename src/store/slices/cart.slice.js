import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import loadConfiguration from "../../utils/loadConfiguration";
import { setIsLoading } from "./isLoading.slice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCartGlobal: (state, action) => action.payload
    }
})
// esport actions
export const { setCartGlobal } = cartSlice.actions

// Export main identifier
export default cartSlice.reducer

//? Redux Thunk
export const getUserCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    const URL = 'https://ecommerceapp-verv.onrender.com/cart'
    axios.get(URL, loadConfiguration())
        .then(response => dispatch(setCartGlobal(response.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const updateQuantityThunk = (id, quantity) => (dispatch) => {
    dispatch(setIsLoading(true));
    const newQuantity = {
        quantity: quantity
    }
    // axios.put('https://e-commerce-api-v2.academlo.tech/api/v1/cart/'+id, newQuantity, loadConfiguration())
    axios.put(`https://ecommerceapp-verv.onrender.com/cart/${id}`, newQuantity, loadConfiguration())
        .then(()=> dispatch(getUserCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}