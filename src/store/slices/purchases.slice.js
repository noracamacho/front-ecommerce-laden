import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './app.slice';
import axios from 'axios';
import { getConfig } from 'utils';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (_, { payload }) => payload
    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', getConfig())
        .then(res => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const purchaseCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(getPurchasesThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
