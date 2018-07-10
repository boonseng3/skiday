import React, { Component } from 'react';
import Routes from './routes'

import './styles/css/index.css'
import ShowErrors from "./containers/ShowErrorsContainer";
import Menu from "./containers/MenuContainer";
import GoalProgress from "./containers/GoalProgressContainer";
class App extends Component {
  render() {
    return (
      <div className="app">
        <ShowErrors errors={[]} />
        <Routes />
        <GoalProgress />
        <Menu />

      </div>
    );
  }
}

export default App;
