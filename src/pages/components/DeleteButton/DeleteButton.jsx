import React from 'react';
import './DeleteButton.css';
import '../../../global.css';

export const DeleteButton = ({ label, onClick }) => {
  return (
    <button className="delete-button" onClick={onClick}>
      {label}
    </button>
  );
};
