import React from 'react';
import PropTypes from 'prop-types';

const FeedBackOptions = ({ options, updateValue }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button onClick={() => updateValue(option)} key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedBackOptions.propTypes = {};

export default FeedBackOptions;
