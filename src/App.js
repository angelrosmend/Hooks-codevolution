import React from 'react';
import './App.css';
import ComponentC from './hooks/useContext/ComponentC';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <h1>Import a hook to begin testing</h1>
      <UserContext.Provider value={'React'}>
        <ChannelContext.Provider value={'Hooks'}>
        <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
