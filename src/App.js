import React from 'react';

import './App.css';
import MouseContainer from './hooks/useEffect/cleanup/MouseContainer';
import ClassCounter from './hooks/useEffect/Counter/ClassCounter';
import HookCounter from './hooks/useEffect/Counter/HookCounter';
import FetchingData from './hooks/useEffect/fetching-data/FetchingData';
import FetchingDataId from './hooks/useEffect/fetching-data/FetchingSpecificId';



function App() {
  return (
    <div className="App">
      <h1>Import a hook to begin testing</h1>
      <FetchingDataId/>
    </div>
  );
}

export default App;
