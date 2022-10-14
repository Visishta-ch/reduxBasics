import {configureStore} from '@reduxjs/toolkit';

import CartSlice from './CartReducer';

const store = configureStore({
    reducer: {cart: CartSlice.reducer}
})

export default store;