import React from 'react';

import './App.css';
import ClassCounter from './hooks/useEffect/Counter/ClassCounter';
import HookCounter from './hooks/useEffect/Counter/HookCounter';
import ClassMouse from './hooks/useEffect/run-only-once/ClassMouse';
import HookMouse from './hooks/useEffect/run-only-once/HookMouse';


function App() {
  return (
    <div className="App">
      <h1>Import a hook to begin testing</h1>
     <HookMouse/>
    </div>
  );
}

export default App;
