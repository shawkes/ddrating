import React, { PropTypes } from 'react';
import Mood from './Mood.jsx';

export default class Rater extends React.Component {
  render() {
    return (
      <div className="rater-wrapper">
        <Mood name="awful" />
        <Mood name="bad" />
        <Mood name="neutral" />
        <Mood name="good" />
        <Mood name="awsome" />
      </div>
    );
  }
}
