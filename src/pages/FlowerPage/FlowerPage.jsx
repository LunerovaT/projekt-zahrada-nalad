import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../../global.css';
import { FlowerImage } from '../components/FlowerImage/FlowerImage';
import { InteractionButton } from '../components/InteractionButton/InteractionButton';
import { DeleteButton } from '../components/DeleteButton/DeleteButton';
import { useEffect } from 'react';

export const FlowerPage = () => {
  const { month, day } = useParams();
  const [isVisible, setIsVisible] = useState(true);

  const interactionLabels = {
    movement: 'Pohyb',
    friends: 'Setkání s přáteli',
    nature: 'Pobyt v přírodě',
    sleep: 'Kvalitní spánek',
    meditation: 'Meditace',
    therapy: 'Terapie',
  };

  /*
  const [interactions, setInteractions] = useState(chosenDay.interactions);
*/

  const [chosenDay, setChosenDay] = useState(() => {
    const data = localStorage.getItem(month);
    const days = JSON.parse(data);
    return days[0];
  });

  /*
    useEffect(() => {
    localStorage.setItem(month, JSON.stringify(days));
  }, [days, month]);
*/
  /*
  const handleClick = () => {
    console.log(`Interacting with flower ${month}-${day}`);
  };
  */

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
    setIsVisible(false);
  };

  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block flower-background block-flower-background">
            <DeleteButton label="Smazat" onClick={handleDelete} />
            {isVisible && <FlowerImage flowerId={chosenDay.flowerId} />}

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
