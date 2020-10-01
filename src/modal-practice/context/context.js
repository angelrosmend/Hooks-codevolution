import React from 'react'

export const refContext = React.createContext();

const RefContextProvider = (props) => {
    const modalRef = React.useRef();

    const openModal = () => {
      modalRef.current.openModal()
    };

    return(
        <refContext.Provider value={{openModal, modalRef}}>
            {props.children}
        </refContext.Provider>
    )
}

export default RefContextProvider