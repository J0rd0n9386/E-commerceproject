import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const fetchProducts = createAsyncThunk('products', async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=100&skip=0')
    return response.data.products
})

const initialState = {
    item: [],
    status: 'idle',
    error: null
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.item = []
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer
export { fetchProducts }