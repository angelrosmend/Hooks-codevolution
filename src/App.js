import React from 'react';

import './App.css';
import HookCounterFour from './hooks/useSate/array/HookCounterFour';
import ClassCounter from './hooks/useSate/counter/ClassCounter';
import HooksCounter from './hooks/useSate/counter/HooksCounter';
import HookCounterThree from './hooks/useSate/object/HookCounterThree';
import HookCounterTwo from './hooks/useSate/prevState/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <h1>Import a hook to begin testing</h1>
     {/* <ClassCounter/>
      <HooksCounter/>
     <HookCounterTwo/>
      <HookCounterThree/>
     */}
     <HookCounterFour/>
      
    </div>
  );
}

export default App;
