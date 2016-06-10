import React from 'react';
import leftPad from 'left-pad';
import Dot from './dot.jsx';

export default class MinutesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const upperMinuteBinaryStringArray = leftPad((Math.floor(this.props.minutes / 10)).toString(2), 3, 0).split('');
    const lowerMinuteBinaryStringArray = leftPad((this.props.minutes % 10).toString(2), 4, 0).split('');
    const upperDots = upperMinuteBinaryStringArray.map((v, i) => parseInt(v, 10)).map((v, i) => <Dot key={i}
                                                                                                     value={v}/>);
    const lowerDots = lowerMinuteBinaryStringArray.map((v, i) => parseInt(v, 10)).map((v, i) => <Dot key={i}
                                                                                                     value={v}/>);

    return (
      <div className="minutes">
        <div className="upper">{upperDots}</div>
        <div className="lower">{lowerDots}</div>
      </div>
    );
  }
}

MinutesContainer.propTypes = {
  minutes: React.PropTypes.number.isRequired
};
