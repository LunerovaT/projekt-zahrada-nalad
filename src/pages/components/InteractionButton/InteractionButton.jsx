import React from 'react';
import './InteractionButton.css';
import '../../../global.css';

export const InteractionButton = ({ label, onClick, active }) => {
  return (
    <button
      className={`interaction-button ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
