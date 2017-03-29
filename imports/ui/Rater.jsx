import React from 'react';
import Mood from './Mood.jsx';

export default class Rater extends React.Component {
  constructor(props) {
    super(props);
    this.fireSwisher = this.fireSwisher.bind(this);
    this.choiceMade = this.choiceMade.bind(this);
    this.state = {
      swisherMoveToMood: '',
      flipin: '',
      flipout: '',
      moodeSelected: false
    };
  }
  fireSwisher(mood) {
    this.setState({ swisherMoveToMood: `swisherMoveTo${mood}` });
  }
  choiceMade() {
    this.setState({
      flipin: 'flipin',
      flipout: 'flipout',
      moodeSelected: true
    });
  }
  render() {
    return (
      <div className="rater-background">
        <div className="rater-container">
          <div className="floatleft rater-undercard" />
          <div className="rater-card">
            <div className={`question-wrapper ${this.state.flipout}`}>
              <p className="rater-question">How did we do? Please rate your experience.</p>
              <p className="rater-que">We&apos;re always looking to improve our customer experience.</p>
            </div>
            <div className={`thankyou-wrapper ${this.state.flipin}`}>
              <p className="thankyou">Thank you.</p>
            </div>
            <div className="rater-wrapper">
              <div className={`swisher ${this.state.swisherMoveToMood} floatleft`} />
              <Mood
                name="awful"
                customerScore={0}
                fireSwisher={this.fireSwisher}
                choiceMade={this.choiceMade}
                moodeSelected={this.state.moodeSelected}
              />
              <Mood
                name="bad"
                customerScore={25}
                fireSwisher={this.fireSwisher}
                choiceMade={this.choiceMade}
                moodeSelected={this.state.moodeSelected}
              />
              <Mood
                name="neutral"
                customerScore={50}
                fireSwisher={this.fireSwisher}
                choiceMade={this.choiceMade}
                moodeSelected={this.state.moodeSelected}
              />
              <Mood
                name="good"
                customerScore={70}
                fireSwisher={this.fireSwisher}
                choiceMade={this.choiceMade}
                moodeSelected={this.state.moodeSelected}
              />
              <Mood
                name="awesome"
                customerScore={100}
                fireSwisher={this.fireSwisher}
                choiceMade={this.choiceMade}
                moodeSelected={this.state.moodeSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
