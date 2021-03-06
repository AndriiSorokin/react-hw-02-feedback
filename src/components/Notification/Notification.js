import React from 'react';
import PropsType from 'prop-types';

const Notification = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

export default Notification;

Notification.propsType = {
  message: PropsType,
};
