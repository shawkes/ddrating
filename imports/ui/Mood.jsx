import React, {PropTypes} from 'react';
export default class Mood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="floatleft mood" >{this.props.name}</div>
    );
  }
}
