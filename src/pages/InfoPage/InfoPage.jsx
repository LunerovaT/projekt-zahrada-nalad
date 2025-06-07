import React from 'react';
import happy from '../HomePage/img/happy.svg';
import calm from '../HomePage/img/calm.svg';
import sad from '../HomePage/img/sad.svg';
import anxious from '../HomePage/img/anxious.svg';
import angry from '../HomePage/img/angry.svg';
import './InfoPage.css';

export const InfoPage = () => {
  return (
    <div className="background">
      <div className="box">
        <div className="text-section">
          <h1>Text zde ?</h1>
          <p>Zakladní info</p>
          <p>Proč to dělají, proč je to super,</p>
        </div>
        <div className="mood-list">
          <div className="mood-item">
            <img src={happy} alt="happy" />
            <p>Šťastný/á</p>
          </div>
          <div className="mood-item">
            <img src={calm} alt="calm" />
            <p>Klidný/á</p>
          </div>
          <div className="mood-item">
            <img src={sad} alt="sad" />
            <p>Smutný/á</p>
          </div>
          <div className="mood-item">
            <img src={anxious} alt="anxious" />
            <p>Mám obavy/ úzkost</p>
          </div>
          <div className="mood-item">
            <img src={angry} alt="angry" />
            <p>Naštvaný/á</p>
          </div>
        </div>
      </div>
    </div>
  );
};
