import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../global.css';
import { FlowerImage } from '../components/FlowerImage/FlowerImage';
import { InteractionButton } from '../components/InteractionButton/InteractionButton';
import { DeleteButton } from '../components/DeleteButton/DeleteButton';
import { useEffect } from 'react';
import { BackButton } from '../components/BackButton/BackButton';
import { ButterflyAnimation } from '../Butterfly/Butterfly';

export const FlowerPage = () => {
  const { month, day } = useParams();
  const navigate = useNavigate();

  const interactionLabels = {
    movement: 'Pohyb',
    friends: 'Setkání s přáteli',
    nature: 'Pobyt v přírodě',
    sleep: 'Kvalitní spánek',
    meditation: 'Meditace',
    therapy: 'Terapie',
  };

  const [chosenDay, setChosenDay] = useState(() => {
    const data = localStorage.getItem(month);
    const days = JSON.parse(data);
    return days[day];
  });

  useEffect(() => {
    const data = localStorage.getItem(month);
    const days = JSON.parse(data);
    days[day] = chosenDay;
    localStorage.setItem(month, JSON.stringify(days));
  }, [chosenDay, month, day]);

  const handleClick = (key) => {
    setChosenDay((prev) => ({
      ...prev,
      interactions: {
        ...prev.interactions,
        [key]: !prev.interactions[key],
      },
    }));
  };

  const handleDelete = () => {
    const data = localStorage.getItem(month);
    const days = JSON.parse(data);
    days[day] = null;
    localStorage.setItem(month, JSON.stringify(days));
    navigate('/calendar');
  };

  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block flower-background block-flower-background">
            <DeleteButton label="Smazat" onClick={handleDelete} />
            <BackButton onClick={() => navigate('/calendar')}>Zpět</BackButton>
            <div className="flower-and-butterfly">
              <FlowerImage flowerId={chosenDay.flowerId} />

              {Array.from(
                {
                  length: Object.values(chosenDay.interactions).filter(
                    (val) => val,
                  ).length,
                },
                (_, index) => (
                  <ButterflyAnimation key={index} index={index} />
                ),
              )}
            </div>
            <div className="interaction-button-field">
              {Object.entries(interactionLabels).map(([key, label]) => (
                <InteractionButton
                  key={key}
                  label={label}
                  onClick={() => handleClick(key)}
                  active={chosenDay.interactions[key]}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
