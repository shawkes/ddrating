import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Ratings } from '../api/ratings.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 'awesome',
      moodColour: '',
      score: 0
    };
  }
  getScore(props) {
    //This looks a really inefficient way to get a persentage from the server
    return props.ratings.reduce((acc, rating) => { return acc + rating.score; }, 0) / props.ratings.length;
  }

  getMoodname(props) {
    //This looks a really inefficient way to get a persentage from the server
    const score = props.ratings.reduce((acc, rating) => { return acc + rating.score; }, 0) / props.ratings.length;
    if (score > 0 && score < 20) {
      return 'awful';
    } else if (score >= 20 && score < 40) {
      return 'bad';
    } else if (score >= 40 && score < 60) {
      return 'neutral';
    } else if (score >= 60 && score < 80) {
      return 'good';
    } else if (score >= 80 && score < 100) {
      return 'awesome';
    } else {
      return '';
    }
  }

  render() {
    this.getScore(this.props);
    return (
      <div className={`dashboard-background dashboard-moodbackground-${this.getMoodname(this.props)}`} >
        <div className="dashboard-container">
          <div className="dashboard-scorecontainer floatleft">
            <p className="dashboard-score">{this.getScore(this.props).toFixed(1)}</p>
            <p className="dashboard-scoreinfo">CUSTOMER SATISFACTION RATING</p>
          </div>
          <div className="dashboard-moodcontainer floatleft" >
            <div className="dashboard-moodwrapper">
              <div
                className={`dashboard-moodbackground dashboard-moodbackground-${this.getMoodname(this.props)} floatleft`}
              />
              <div className="mood" >
                <div className={`mood-${this.getMoodname(this.props)}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    ratings: Ratings.find({}).fetch(),
  };
}, Dashboard);
