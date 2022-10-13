import {createStore} from 'redux';
 
/*steps  1: define reducer 2: create store 3: component that subscribes the store nd finally dispatching the action */


const reducer = (state = {counter : 0}, action) =>{
    if(action.type === 'increment'){
        return {
            counter : state.counter + 1,
        };
        
    }
    if(action.type === 'decrement'){
        return {
            counter : state.counter - 1,
        }
        
    }
    if(action.type === 'incrementBy5'){
        return {
            counter: state.counter+5,
        }
    }
    return state;
}
const store = createStore(reducer);


// const subscriberCount = () => {
//     const latestState = store.getState();
//     console.log(latestState)
// }
// store.subscribe(subscriberCount);
// store.dispatch({type:'increment'})

export default store;