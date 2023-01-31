import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import loadConfiguration from "../../utils/loadConfiguration";

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
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    axios.get(URL, loadConfiguration())
        .then(response => dispatch(setCartGlobal(response.data)))
        .catch(error => console.log(error))
}