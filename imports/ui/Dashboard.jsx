import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Ratings } from '../api/ratings.js';

class Dashboard extends React.Component {
  render() {
    return (
      <div >Number of ratings {this.props.ratings.length}
      </div>
    );
  }
}

// App.propTypes = {
//   ratings: PropTypes.array(
//     PropTypes.shape({
//       start: PropTypes.number.isRequired,
//       end: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

export default createContainer(() => {
  return {
    ratings: Ratings.find({}).fetch(),
  };
}, Dashboard);
