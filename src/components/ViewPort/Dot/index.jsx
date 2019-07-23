import React, { Component } from 'react';
import './dot.css';

class Dot extends Component {
  render() {
    const { dot } = this.props;
    return <div className="dot" style={{ left: `${dot.x - 3}px`, top: `${dot.y - 3}px` }} />;
  }
}

export default Dot;
