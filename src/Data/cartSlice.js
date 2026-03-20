import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const Addtocart = createSlice({
    name: 'addtocart',
    initialState,
    reducers: {
        addItem: (state) => {
            state.value += 1;
        },
        removeItem: (state) => {
            state.value -= 1;
            if (state.value < 0) {
                state.value = 0;
            }
        },
        clearCart: (state) => {
            state.value = 0;
        }
    }
})

export const { addItem, removeItem, clearCart } = Addtocart.actions
// Yeh dono same hain
// const addItem = Addtocart.actions.addItem
export default Addtocart.reducer
// sirf export default Addtocart.reducer state ko export karta hai
// state update karta hai