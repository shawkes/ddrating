import React, { PropTypes } from 'react';
import { Ratings } from '../api/ratings.js';

export default class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedClassName: '', selected: false };
    this.handleClick = this.handleClick.bind(this);
    this.moodeSelected = '';
  }

  handleClick(event) {
    event.preventDefault();
    if (this.props.moodeSelected) return;
    this.setState({ selectedClassName: 'selected', selected: true });
    Ratings.insert({
      score: this.props.customerScore
    });
    this.props.choiceMade();
    this.props.fireSwisher(this.props.name);
    this.moodeSelected = (
      <div>
        <div className="mood-selected">
          <div className={`mood-${this.props.name}`} />
          <div className="ticked" />
        </div>
        <div className="mood-selectpop" />
      </div>);
  }
  render() {
    return (
      <a href="" onClick={this.handleClick} className="floatleft ">
        <div className="cutout">
          <div className={`mood ${this.state.selectedClassName}`} >
            <div className={`mood-${this.props.name}`} />
          </div>
          {this.moodeSelected}
        </div>
      </a>

    );
  }
}

Mood.propTypes = {
  name: PropTypes.string.isRequired,
  customerScore: PropTypes.number.isRequired,
  fireSwisher: PropTypes.func.isRequired,
  choiceMade: PropTypes.func.isRequired,
  moodeSelected: PropTypes.bool.isRequired
};
