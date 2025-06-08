import { FlowerButton } from '../components/FlowerButton/FlowerButton';
import './CalendarPage.css';
import nextButton from './img/next-button.svg';
import previousButton from './img/previous-button.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from 'react-aria-components';
import { getLocalTimeZone, now } from '@internationalized/date';

const keyByDate = (date) => `${date.year}-${date.month}`;
const loadForDate = (date) => {
  const data = localStorage.getItem(keyByDate(date));
  if (data === null) {
    return Array.from({ length: 31 }).map(() => null);
  }
  console.log(data);
  return JSON.parse(data);
};

export const CalendarPage = () => {
  const [date, setDate] = useState(() => now(getLocalTimeZone()));
  const [days, setDays] = useState(() => loadForDate(date));
  const chosenMonthKey = keyByDate(date);

  useEffect(() => {
    localStorage.setItem(chosenMonthKey, JSON.stringify(days));
  }, [days, chosenMonthKey]);

  const options = ['happy', 'sad', 'calm', 'anxious', 'angry'];
  console.log(days);

  const navigate = useNavigate();

  return (
    <Calendar
      aria-label="Kalendář květin"
      onFocusChange={(date) => {
        setDays(loadForDate(date));
        setDate(date);
      }}
      onChange={(date) => {
        const dayIndex = date.day - 1;
        if (days[dayIndex]) {
          navigate(`/flowerpage/${chosenMonthKey}/${dayIndex}`);
        }
      }}
    >
      <div className="container">
        <main>
          <div className="page-wrapper">
            <div className="block block-flower-background">
              <div className="calendar-page-calendar">
                <header>
                  <div class="next">
                    <Button slot="previous">
                      <img src={previousButton} alt="Předchozí" />
                    </Button>
                    <Heading />
                    <Button slot="next">
                      <img src={nextButton} alt="Další" />
                    </Button>
                  </div>
                </header>
                <div className="block-calendar-content">
                  <CalendarGrid>
                    {(date) => (
                      <CalendarCell date={date}>
                        {(props) =>
                          props.isDisabled ? (
                            ''
                          ) : (
                            <FlowerButton
                              flowerId={days[date.day - 1]?.flowerId}
                            />
                          )
                        }
                      </CalendarCell>
                    )}
                  </CalendarGrid>
                </div>
              </div>
              <div className="calendar-page-options">
                {options.map((flowerId, index) => (
                  <FlowerButton
                    flowerId={flowerId}
                    key={index}
                    onClick={() => {
                      const index = days.findIndex((day) => day === null);

                      if (index === -1) {
                        return;
                      }

                      setDays((days) => {
                        days[index] = {
                          flowerId: flowerId,
                          interactions: {
                            movement: false,
                            friends: false,
                            nature: false,
                            sleep: false,
                            meditation: false,
                            therapy: false,
                          },
                        };
                        return [...days];
                      });
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Calendar>
  );
};
