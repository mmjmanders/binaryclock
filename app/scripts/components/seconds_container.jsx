import React from 'react';
import leftPad from 'left-pad';
import Dot from './dot.jsx';

export default class SecondsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const upperSecondBinaryStringArray = leftPad((Math.floor(this.props.seconds / 10)).toString(2), 3, 0).split('');
    const lowerSecondBinaryStringArray = leftPad((this.props.seconds % 10).toString(2), 4, 0).split('');
    const upperDots = upperSecondBinaryStringArray.map((v, i) => parseInt(v, 10)).map((v, i) => <Dot key={i}
                                                                                                     value={v}/>);
    const lowerDots = lowerSecondBinaryStringArray.map((v, i) => parseInt(v, 10)).map((v, i) => <Dot key={i}
                                                                                                     value={v}/>);

    return (
      <div className="seconds">
        <div className="upper">{upperDots}</div>
        <div className="lower">{lowerDots}</div>
      </div>
    );
  }
}

SecondsContainer.propTypes = {
  seconds: React.PropTypes.number.isRequired
};
