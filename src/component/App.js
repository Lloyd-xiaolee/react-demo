import React, { Component } from 'react';
import './App.css';
// import Demo from './test'

class App extends Component {
  handTest(){
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
