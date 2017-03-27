import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        {this.props.content}
      </div>
    );
  }
}

// App.propTypes = {
//   content: PropTypes.element.isRequired,
// };
