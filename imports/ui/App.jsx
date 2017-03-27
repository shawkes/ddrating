import React from 'react';
import Rater from './Rater.jsx';

  export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <header>
          <h1>Rate us</h1>
        </header>
        
        <Rater></Rater>
      </div>
    );
  }
}
