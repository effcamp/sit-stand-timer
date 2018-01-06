import React, { Component } from 'react';
import moment from 'moment';
import '../styles/App.css';

class App extends Component {
  state = {
    count: 0,
    time: moment().format('MMMM Do YYYY, h:mm:ss a'),
    stand: undefined,
    sit: undefined,
    notiOptions: {
      title: 'Stand up!',
      body: 'Walk around for the next 5 minutes'
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(() => ({
        time: moment().format('MMMM Do YYYY, h:mm:ss a')
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startTimer = () => {
    this.setState((prevState) => ({
      stand: moment()
        .add(5, 'seconds')
        .format('MMMM Do YYYY, h:mm:ss a'),
      sit: moment()
        .add(10, 'seconds')
        .format('MMMM Do YYYY, h:mm:ss a')
    }));
  };

  stopTimer = () => {
    this.setState(() => ({
      stand: undefined,
      sit: undefined
    }));
  };

  showMessage = () => {
    if (this.state.time === this.state.stand) {
      const notify = new Notification('Stand up!', this.state.notiOptions);
      setTimeout(() => {
        notify.close();
      }, 5000);
    }
    if (
      this.state.time >= this.state.stand &&
      this.state.time <= this.state.sit
    ) {
      return <h1>STANDUP!</h1>;
    } else {
      return <h1>Sitting time</h1>;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.showMessage()}
          <p>{this.state.time}</p>
          <p>stand at: {this.state.stand}</p>
          <p>sit at: {this.state.sit}</p>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;
