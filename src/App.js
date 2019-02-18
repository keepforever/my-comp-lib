import React, { Component } from 'react';
import Buttons from './comps/Buttons';

class App extends Component {
  render() {
    return (
      <div style={{
        height: '100vh'
      }}
      >
        <h1>Buttons</h1>
        <hr/>
        <br/>
        <Buttons />
      </div>
    );
  }
}

export default App;
