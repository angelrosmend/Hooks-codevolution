import React, {useContext, createContext} from 'react'
import { CountContext } from './ComponentX'

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <h2>Component F - {countContext.countState}</h2>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
