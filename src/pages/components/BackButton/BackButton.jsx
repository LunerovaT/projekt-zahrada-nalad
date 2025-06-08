import React from 'react';
import './BackButton.css';
import '../../../global.css';

export const BackButton = ({ children, onClick }) => {
  return (
    <button className="back-button" onClick={onClick}>
      {children}
    </button>
  );
};
