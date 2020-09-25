import React from 'react'
import { useReducer } from 'react'


const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) { //where action refers to the entire object and type its properties
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            if (state.firstCounter > 0){
                return { ...state, firstCounter: state.firstCounter - action.value}
            }else{
                return initialState
            }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            if (state.secondCounter > 0){
                return { ...state, secondCounter: state.secondCounter - action.value}
            }else{
                return initialState
            }
        case 'reset':
            return initialState
        default:
            return state
    }
} 

function CounterTwo() {
    
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>First Counter - {count.firstCounter}</h1>
            <h1>Second Counter - {count.secondCounter}</h1>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type:'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type:'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment second</button>
            <button onClick={() => dispatch({type:'decrement2', value: 1})}>Decrement second</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
