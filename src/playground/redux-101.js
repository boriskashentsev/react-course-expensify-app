import {createStore} from 'redux'

// Action generator


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type:'RESET'
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const countReducer = (state = {count: 0} /* Default state */, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET': {
            return {
                count: action.count
            }
        }
        default: 
            return state;
    }
    //console.log('running')
    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        }
    }
    else {
        return state;
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

// Actions: increment, decrement, reset

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
store.dispatch(incrementCount({incrementBy: 5}))

// unsubscribe()

store.dispatch(incrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(decrementCount())

store.dispatch(resetCount())

store.dispatch(setCount({count: 101}))