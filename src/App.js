import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./comps/Routes";
import Nav from "./comps/Nav";

const MyApp = () => {
  return (
    <React.Fragment>
      <div style={{padding: 20}}>
        <Nav />
        <Routes />
      </div>
    </React.Fragment>
  );
};

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <BrowserRouter>
          <MyApp />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
