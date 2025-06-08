import React from 'react';
import './InteractionButton.css';
import '../../../global.css';

export const InteractionButton = ({ label, onClick }) => {
  return (
    <button className="interaction-button" onClick={onClick}>
      {label}
    </button>
  );
};
