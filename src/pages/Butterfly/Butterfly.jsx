import React from 'react';
import './Butterfly.css';
import butterfly from './img/butterfly.svg';

export const ButterflyAnimation = () => {
  return (
    <svg
      className="butterfly-animation"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="motionPath"
        fill="none"
        stroke="transparent"
        d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
      />

      <image href={butterfly} width="20" height="20">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
          <mpath href="#motionPath" />
        </animateMotion>
      </image>
    </svg>
  );
};
