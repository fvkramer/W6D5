import React from 'react';
// import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
    this.handle = 0;
  }

  tick() {
    // debugger
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    // debugger
    // this.tick();
    setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
    this.handle = 0;
  }

  render () {
    const hours = this.state.time.getHours();
    const minutes = this.state.time.getMinutes();
    const seconds = this.state.time.getSeconds();

    return (
      <div>
        <h1>{hours}:{minutes}:{seconds}</h1>
      </div>
    );
  }
}



export default Clock;
