import { FlowerButton } from '../components/Block/FlowerButton';
import './CalendarPage.css';
import nextButton from './img/next-button.svg';

export const CalendarPage = () => {
  const fields = Array.from({ length: 28 });
  const options = Array.from({ length: 7 });

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
            <div class="next">
              <img src={nextButton} alt="nextButton" className="nextButton" />
            </div>
            <div className="block-calendar-content">
              {options.map((_, index) => (
                <FlowerButton key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
