import React from 'react';
import Mood from './Mood.jsx';

export default class Rater extends React.Component {
  constructor(props) {
    super(props);
    this.fireSwisher = this.fireSwisher.bind(this);
    this.state = { swisherMoveToMood: '' };
  }
  fireSwisher(mood) {
    this.setState({ swisherMoveToMood: `swisherMoveTo${mood}` });
  }
  render() {
    return (
      <div className="rater-background">
        <div className="rater-container">
          <div className="floatleft rater-undercard" />
          <div className="rater-card">
            <div>
              <div className="rater-question">How did we do? Please rate your experience.</div>
              <div className="rater-que">We&apos;re always looking to improve our customer experience.</div>
            </div>
            <div className="rater-wrapper">
              <div className={`swisher ${this.state.swisherMoveToMood} floatleft`} />
              <Mood name="awful" customerScore={0} fireSwisher={this.fireSwisher} />
              <Mood name="bad" customerScore={25} fireSwisher={this.fireSwisher} />
              <Mood name="neutral" customerScore={50} fireSwisher={this.fireSwisher} />
              <Mood name="good" customerScore={70} fireSwisher={this.fireSwisher} />
              <Mood name="awesome" customerScore={100} fireSwisher={this.fireSwisher} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
