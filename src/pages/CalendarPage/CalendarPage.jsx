import './CalendarPage.css';
import { Link } from 'react-router-dom';

const days = ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek'];

const App = () => (
  <>
    <h1>Pracovní dny</h1>
    <ol className="days">
      {days.map((day) => (
        <li>{day}</li>
      ))}
    </ol>
  </>
);

export const CalendarPage = () => {
  const fields = Array.from({ length: 28 });
  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block">
            <div className="block-calendar-content">
              {fields.map((_, index) => (
                <div key={index} className="calendar-field"></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
