import {createSlice} from '@reduxjs/toolkit';


const AddItem =   createSlice({
    name: 'Add Item',
    initialState : {
        items: [],
        totalQuanity: 0,
        totalAmount: 0,
    },
    reducers:{
        addItemToCart(state,action){
            const item = action.payload;
            const existingItem = state.items.find(c => c.id === item.id)
                if( !existingItem ) {
                        state.items.push({itemId: item.id, price: item.price, quantity:1, totalPrice:item.price, name:item.title});
                }
                else{
                    existingItem.quantity++;
                    existingItem.totalPrice = existingItem.price+item.price;
                }
            },
        },
    })