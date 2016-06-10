import React from 'react';
import Divider from './divider.jsx';
import HoursContainer from './hours_container.jsx';
import MinutesContainer from './minutes_container.jsx';
import SecondsContainer from './seconds_container.jsx';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);

    this.state = this.setupInitialState();
  }

  setupInitialState() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return {
      hours,
      minutes,
      seconds
    };
  }

  updateTime(time) {
    this.setState({
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    });
  }

  componentDidMount() {
    setInterval(() => this.updateTime(new Date()), 1000);
  }

  render() {
    return (
      <div className="container">
        <HoursContainer hours={this.state.hours}/>
        <Divider/>
        <MinutesContainer minutes={this.state.minutes}/>
        <Divider/>
        <SecondsContainer seconds={this.state.seconds}/>
      </div>
    );
  }
}
