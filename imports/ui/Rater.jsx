import React from 'react';
import Mood from './Mood.jsx';

export default class Rater extends React.Component {
  render() {
    return (
      <div className="rater-wrapper">
        <Mood name="awful" cusomerScore={0} />
        <Mood name="bad" cusomerScore={25} />
        <Mood name="neutral" cusomerScore={50} />
        <Mood name="good" cusomerScore={70} />
        <Mood name="awsome" cusomerScore={100} />
      </div>
    );
  }
}
