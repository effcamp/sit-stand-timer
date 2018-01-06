import React, { Component } from 'react';
import moment from 'moment';
import '../styles/App.css';

class App extends Component {
  state = {
    count: 0
  };

  updateCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  startCounter = () => {
    this.interval = setInterval(() => {
      this.updateCounter();
    }, 1000);
  };
  stopCounter = () => {
    clearInterval(this.interval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <p>{this.state.count}</p>
          <button onClick={this.startCounter}>Start</button>
          <button onClick={this.stopCounter}>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;
