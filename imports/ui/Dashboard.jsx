import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Ratings } from '../api/ratings.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  getMood(props) {
    return props.ratings.reduce((acc, rating) => { return acc + rating.score; }, 0) / props.ratings.length;
  }

  render() {
    return (
      <div >Customer rating {this.getMood(this.props).toFixed(2)}
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
