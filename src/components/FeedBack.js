import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodReview = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralReview = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badReview = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={this.goodReview} type="button">
          good
        </button>
        <button onClick={this.badReview} type="button">
          bad
        </button>
        <button onClick={this.neutralReview} type="button">
          neutral
        </button>
        <h2>Statistic:</h2>
        <p>good:{good}</p>
        <p>bad:{bad}</p>
        <p>neutral:{neutral}</p>
        <p>total:{total}</p>
      </div>
    );
  }
}

FeedBack.propTypes = {};

export default FeedBack;
