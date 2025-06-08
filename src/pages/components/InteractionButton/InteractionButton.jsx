import React from 'react';
import './InteractionButton.css';

export const InteractionButton = ({ label, onClick }) => {
  return (
    <button className="interaction-button" onClick={onClick}>
      {label}
    </button>
  );
};
