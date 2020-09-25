import React from 'react';
import './App.css';
import DataFetching from './hooks/useReducer/data-fetching/DataFetching';
import DataFetchingReducer from './hooks/useReducer/data-fetching/DataFetchingReducer';

import ComponentX from './hooks/useReducer/useContextMethod/ComponentX';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
     <DataFetchingReducer/>
    </div>
  );
}

export default App;
