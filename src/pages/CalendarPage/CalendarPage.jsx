import './CalendarPage.css';
import nextButton from './img/next-button.svg';
import { Options } from '../components/Options/Options';

export const CalendarPage = () => {
  const fields = Array.from({ length: 28 });
  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block block-flower-background">
            <div className="block-calendar-content">
              {fields.map((_, index) => (
                <div key={index} className="calendar-field"></div>
              ))}
            </div>
            <div class="next">
              <img src={nextButton} alt="nextButton" className="nextButton" />
            </div>
            <Options />
          </div>
        </div>
      </main>
    </div>
  );
};
