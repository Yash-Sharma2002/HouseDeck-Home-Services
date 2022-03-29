import { createContext, useState } from 'react';
import React from 'react'
export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    const [ account, setAccount ] = useState('');
    
  const [message, setMessage] = React.useState('')
  const [messageType, setMessageType] = React.useState('')
    
    return (
        <LoginContext.Provider value={{ account, setAccount,message, setMessage ,messageType, setMessageType}}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;