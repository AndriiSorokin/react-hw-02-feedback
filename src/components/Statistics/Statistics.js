import React from 'react';
import PropTypes from 'prop-types';
import FeedBack from '../FeedBack/FeedBack';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>

      <p>good:{good}</p>
      <p>bad:{bad}</p>
      <p>neutral:{neutral}</p>
      <p>total:{total}</p>
      {good > 0 ? (
        <p>positive feedback:{positivePercentage.toFixed(0)}%</p>
      ) : null}
    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;
