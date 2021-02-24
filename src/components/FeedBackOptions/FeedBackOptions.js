import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedBackOptions.module.css';

const FeedBackOptions = ({ options, updateValue }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button
          className={style.feedBackBtn}
          onClick={() => updateValue(option)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedBackOptions.propTypes = {};

export default FeedBackOptions;
