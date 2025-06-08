/* import { useState } from 'react';
import { FlowerButton } from '../components/FlowerButton/FlowerButton';

export const CalendarPage = () => {
  const options = ['happy', 'sad', 'calm', 'anxious', 'angry'];

  const [fieldValues, setFieldValues] = useState(Array(30).fill(null));

  const handleOptionClick = (flowerId) => {
    const index = fieldValues.findIndex((cell) => cell === null);
    if (index !== -1) {
      const newValues = [...fieldValues];
      newValues[index] = flowerId;
      setFieldValues(newValues);
    }
  };

  return (
    <div className="calendar-page">
      <div className="calendar-fields">
        {fieldValues.map((flowerId, index) => (
          <FlowerButton key={index} flowerId={flowerId} />
        ))}
      </div>

      <div className="calendar-options">
        {options.map((flowerId, index) => (
          <FlowerButton
            key={index}
            flowerId={flowerId}
            onClick={() => handleOptionClick(flowerId)}
          />
        ))}
      </div>
    </div>
  );
}; */

import { FlowerButton } from '../components/FlowerButton/FlowerButton';
import './CalendarPage.css';
import nextButton from './img/next-button.svg';

export const CalendarPage = () => {
  const fields = Array.from({ length: 30 }).map(() => null);
  console.log(fields);
  const options = ['happy', 'sad', 'calm', 'anxious', 'angry'];

  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block block-flower-background">
            <div className="calendar-page-calendar">
              <div className="block-calendar-content">
                {fields.map((_, index) => (
                  <FlowerButton key={index} />
                ))}
              </div>
            </div>
            <div className="next">
              <img src={nextButton} alt="nextButton" className="nextButton" />
            </div>
            <div className="calendar-page-options">
              {options.map((flowerId, index) => (
                <FlowerButton flowerId={flowerId} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
