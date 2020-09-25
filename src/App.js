import React from 'react';
import './App.css';
import SongList from './components/SongList';
import ComponentC from './hooks/useContext/ComponentC';
import CounterOne from './hooks/useReducer/CounterOne';
import CounterTwo from './hooks/useReducer/CounterTwo';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
     <CounterTwo/>
    </div>
  );
}

export default App;
