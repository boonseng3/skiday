import React, { Component } from 'react';
import Routes from './routes'

import ShowErrors from "./components/ShowErrors";
import Menu from "./components/Menu";
class App extends Component {
  render() {
    return (

      <div className="app">
        <Menu />
        <ShowErrors errors={[]} />
        <Routes />

      </div>
    );
  }
}

export default App;
