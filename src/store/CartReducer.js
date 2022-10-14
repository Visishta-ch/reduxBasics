import {createSlice} from '@reduxjs/toolkit'


const initialCartState = {cartStatus: false};

const CartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        openCart(state){
            state.cartStatus = !state.cartStatus;
        }
    }
});


export const cartActions = CartSlice.actions;

export default CartSlice;