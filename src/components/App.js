import React, { Component } from 'react';
import moment from 'moment';
import '../styles/App.css';

class App extends Component {
  state = {
    count: 0,
    time: moment().format('MMMM Do YYYY, h:mm:ss a')
  };
  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.setState(() => ({
        time: moment().format('MMMM Do YYYY, h:mm:ss a')
      }));
    }, 1000);
  }
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
    clearInterval(this.timeInterval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.timeInterval);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <p>{this.state.count}</p>
          <button onClick={this.startCounter}>Start</button>
          <button onClick={this.stopCounter}>Stop</button>
          <p>{this.state.time}</p>
        </div>
      </div>
    );
  }
}

export default App;
