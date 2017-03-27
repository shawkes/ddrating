import React, { PropTypes } from 'react';

export default class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedClassName: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ selectedClassName: 'selected' });
  }
  render() {
    return (
      <div className={`floatleft mood ${this.state.selectedClassName}`} onClick={this.handleClick}>
        {this.props.name}
      </div>

    );
  }
}

Mood.propTypes = {
  name: PropTypes.string.isRequired,
};
