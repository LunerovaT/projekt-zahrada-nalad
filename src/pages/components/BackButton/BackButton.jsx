import React from 'react';
import './BackButton.css';
import '../../../global.css';
import { useNavigate } from 'react-router-dom';

export const BackButton = ({ children }) => {
  const navigate = useNavigate();
  return (
    <button className="back-button" onClick={() => navigate('/calendar')}>
      {children}
    </button>
  );
};
