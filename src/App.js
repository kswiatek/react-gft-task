import React, { Component } from 'react';
import './App.css';
import ShowWeatherContainer from './containers/ShowWeather/ShowWeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowWeatherContainer />
      </div>
    );
  }
}

export default App;
