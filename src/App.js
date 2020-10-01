import React from 'react';
import './App.css';
import buttonOpen from './modal-practice/button/ButtonOpen';
import RefContextProvider, { refContext } from './modal-practice/context/context';
import Home from './modal-practice/home/Home';
import Modal from "./modal-practice/modal/Modal.js";
import Nav from './modal-practice/nav/Nav';

function App() {
  return (
    <RefContextProvider>
    <div className="App">
      <Nav/>
      <Home/>

    </div>
    </RefContextProvider>
  );
}

export default App;
