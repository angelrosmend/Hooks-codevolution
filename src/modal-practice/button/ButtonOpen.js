import React,{useContext, useRef} from 'react'
import { refContext } from '../context/context'

function ButtonOpen(props) {

   const {openModal} = useContext(refContext)
  
    return (
        <button onClick={openModal}>Open Modal</button>
    )
}

export default ButtonOpen
