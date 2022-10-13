const redux = require('redux'); /// importing redux from node.


/**reducer function : a standard js function but it is called by the reducer
 * redux library which takes 2 peices of input (parameters : Old state + new state(dispatched action))
 * and returns a new state object 
 * it should only working on inputs given by redux but not any api calls, ftching data from local storage
*/
const counterReducer = (state= {counter: 0}, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        };
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        };
    }
    return state;
    
}

const store = redux.createStore(counterReducer); //to create a store --- here createStore is replaced by configStore
console.log("initial state", store.getState())
/**component to subscribe to state.. and also to dispatch actions*/
const counterSubscriber = ()=>{
       const latestState =  store.getState();
       console.log('latest state:', latestState)
}


store.subscribe(counterSubscriber);

store.dispatch({ type:'increment' });
store.dispatch({ type:'increment' });
store.dispatch({ type:'increment' });
store.dispatch({ type:'increment' });

store.dispatch({ type:'decrement' });