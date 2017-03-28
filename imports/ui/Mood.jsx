import React, { PropTypes } from 'react';
import { Ratings } from '../api/ratings.js';

export default class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedClassName: '' };
    this.handleClick = this.handleClick.bind(this);
    this.moodeSelected = '';
    this.state.selected = false;
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ selectedClassName: 'selected' });
    Ratings.insert({
      score: this.props.cusomerScore
    });
    this.moodeSelected = (
      <div className="mood-selected">
        <div className="mood-selectpop" />
        <div className={`mood-${this.props.name}`} />
      </div>);
    this.state.selected = true;
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
  cusomerScore: PropTypes.number.isRequired,
};
