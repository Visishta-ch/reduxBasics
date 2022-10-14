//import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'
 
/*steps  1: define reducer 
2: create store and connect store to reducer
3: component that subscribes the store nd
 finally dispatching the action */
const initialCounterState = { counter : 0, showCounter:true }

const counterSlice = createSlice({
    name: 'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },

        increase(state,action){
            state.counter = state.counter + action.payload;
               },
        decrease(state, action){
            state.counter = state.counter-action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        },
        
    }
});
const initialAuthState = {isAuthenticated: false}
const authSlice = createSlice({
    name:'auth',
   initialState: initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        },
        
    }

})
const store = configureStore({ 
    reducer: { counter:counterSlice.reducer,
        auth:authSlice.reducer
    }
});


export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;