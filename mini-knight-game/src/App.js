import React from 'react';
import './App.css';
import World from './features/world';
import KeyBoard from "./features/keyboard";

function App() {
  return (
    <div className="App">
      <KeyBoard/>
      <World />
    </div>
  );
}

export default App;
