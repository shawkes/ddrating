import React, {PropTypes} from 'react';
import Mood from './Mood.jsx'

export default class Rater extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="rater-wrapper">
        <Mood name='awful' ></Mood>
        <Mood name='bad' ></Mood>
        <Mood name='neutral' ></Mood>
        <Mood name='good' ></Mood>
        <Mood name='awsome' ></Mood>
      </div>
    );
  }
}
