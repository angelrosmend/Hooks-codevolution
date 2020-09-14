import React from 'react'
import {ChannelContext, UserContext} from '../../App'

 function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user =>{
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => <h1>{user} {channel}</h1>
                            }
                        </ChannelContext.Consumer>
                    )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
export default ComponentF