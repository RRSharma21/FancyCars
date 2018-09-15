import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarPanel from './components/CarPanel'
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <CarPanel 
          name= {'Lexus'} 
          make={'2018'}
          model={'LFA'}
          availability={'In Dealership'}
          /> 
      
      </div>
    );
  }
}

export default App;
