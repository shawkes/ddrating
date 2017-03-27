import React, { PropTypes } from 'react';

export default class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedClassName: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ selectedClassName: 'selected' });
  }
  render() {
    return (
      <a href="" onClick={this.handleClick}>
        <div className={`floatleft mood ${this.state.selectedClassName}`} >
          {this.props.name}
        </div>
      </a>

    );
  }
}

Mood.propTypes = {
  name: PropTypes.string.isRequired,
};
