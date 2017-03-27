import React, {PropTypes} from 'react';
export default class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedClassName: ''};
  }
  handleClick(event) {
    this.setState({selectedClassName: 'selected'});
  }
  render() {
    return (
      <div className={`floatleft mood ${this.state.selectedClassName}`} onClick={this.handleClick.bind(this)  }>
        {this.props.name}
      </div>

    );
  }
}
