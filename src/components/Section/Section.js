import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {};

export default Section;
