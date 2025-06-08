import { FlowerButton } from '../components/FlowerButton/FlowerButton';
import './CalendarPage.css';
import nextButton from './img/next-button.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from 'react-aria-components';

export const CalendarPage = () => {
  const thisMonthKey = '2025-06';
  const daysInMonth = 30;

  const [days, setDays] = useState(() => {
    const data = localStorage.getItem(thisMonthKey);
    if (data === null) {
      return Array.from({ length: daysInMonth }).map(() => null);
    }
    console.log(data);
    return JSON.parse(data);
  });

  useEffect(() => {
    localStorage.setItem(thisMonthKey, JSON.stringify(days));
  }, [days, thisMonthKey]);

  const options = ['happy', 'sad', 'calm', 'anxious', 'angry'];
  console.log(days);

  const navigate = useNavigate();

  /*
  if (data?.flowerId) {
                                navigate(
                                  `/flowerpage/${thisMonthKey}/${index}`,
                                );
                              }
                                */

  return (
    <Calendar aria-label="Kalendář květin">
      <div className="container">
        <main>
          <div className="page-wrapper">
            <div className="block block-flower-background">
              <div className="calendar-page-calendar">
                <header>
                  <Button slot="previous">◀</Button>
                  <Heading />
                  <Button slot="next">▶</Button>
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
