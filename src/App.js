import React, { Component } from 'react';
import './App.css';
import IngresoClase from './ingreso_clases';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <IngresoClase/>
        </header>
      </div>
    );
  }
}

export default App;
