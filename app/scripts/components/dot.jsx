import React from 'react';

export default class Dot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.value === 1 ? 'on' : 'off'}></div>
    );
  }
}

Dot.propTypes = {
  value: React.PropTypes.oneOf([0, 1]).isRequired
};
