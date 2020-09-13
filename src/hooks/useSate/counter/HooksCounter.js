import React, {useState} from 'react'

function HooksCounter() {

    const [count, setCount] = useState(0)
    
    function incrementCount(){
        setCount( count + 1)
    }
    return (
        <div>
            <button onClick={incrementCount}>Count: {count}</button>
        </div>
    )
}

export default HooksCounter
