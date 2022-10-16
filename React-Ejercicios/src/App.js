import { useState ,useEffect } from "react";
import React from 'react'
import CrudApp from './components/CrudApp'
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <div className="App">
        <h1>Ejercicios con React</h1>
        <hr/>
        <CrudApi/>
        <hr/>
        <CrudApp/>
    </div>
  );
}

export default App;