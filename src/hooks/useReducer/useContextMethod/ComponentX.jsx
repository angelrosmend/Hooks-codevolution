import React,{createContext} from 'react'
import ComponentC from './ComponentC'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import { useReducer, useContext } from 'react'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
} 

function ComponentX() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
           <CountContext.Provider
              value={{countState: count, countDispatch: dispatch}}
           >
               <h1>Count - {count} </h1>
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
            </CountContext.Provider>
        </div>
    )
}

export default ComponentX
