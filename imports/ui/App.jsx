import React from 'react';
import Rater from './Rater.jsx';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <header>
          <h1>Rate us</h1>
        </header>

        <ul>
          <li>Ace</li>
        </ul>
        <Rater></Rater>
      </div>
    );
  }
}
