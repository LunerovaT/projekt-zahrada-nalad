import React from 'react';
import './Butterfly.css';
import butterfly from './img/butterfly.svg';

export const ButterflyAnimation = ({ index }) => {
  const pathId = `motionPath-${index}`;

  const motionPaths = [
    'M40,50 C30,0 170,100 160,50 C150,10 50,110 40,50 z',
    'M50,60 C60,20 120,80 140,30 C120,70 70,20 50,60 z',
    'M30,50 C70,0 130,100 170,50',
    'M70,50 C70,0 130,0 130,50 C130,100 70,100 70,50 z',
    'M40,80 C100,20 120,100 160,30',
  ];

  const pathData = motionPaths[index % motionPaths.length];

  return (
    <svg
      className="butterfly-animation"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id={pathId} fill="none" stroke="transparent" d={pathData} />

      <image href={butterfly} width="20" height="20">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </image>
    </svg>
  );
};
