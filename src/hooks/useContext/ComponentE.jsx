import React,{useContext} from 'react'
import {ChannelContext, UserContext} from '../../App'

function ComponentE() {

   const user = useContext(UserContext)
   const channel = useContext(ChannelContext)
    return (
        <div>
            <h1>{user} {channel}</h1>
        </div>
    )
}

export default ComponentE
