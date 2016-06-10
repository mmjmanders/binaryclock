import React from 'react';
import leftPad from 'left-pad';
import Dot from './dot.jsx';

export default class HoursContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const upperHourBinaryStringArray = leftPad((Math.floor(this.props.hours / 10)).toString(2), 2, 0).split('');
    const lowerHourBinaryStringArray = leftPad((this.props.hours % 10).toString(2), 4, 0).split('');
    const upperDots = upperHourBinaryStringArray.map((v, i) => parseInt(v, 10)).map((v, i) => <Dot key={i}
                                                                                                   value={v}/>);
    const lowerDots = lowerHourBinaryStringArray.map((v, i) => parseInt(v, 10)).map((v, i) => <Dot key={i}
                                                                                                   value={v}/>);

    return (
      <div className="hours">
        <div className="upper">{upperDots}</div>
        <div className="lower">{lowerDots}</div>
      </div>
    );
  }
}

HoursContainer.propTypes = {
  hours: React.PropTypes.number.isRequired
};
