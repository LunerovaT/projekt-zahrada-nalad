import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../../global.css';
import { FlowerImage } from '../components/FlowerImage/FlowerImage';
import { InteractionButton } from '../components/InteractionButton/InteractionButton';
import { DeleteButton } from '../components/DeleteButton/DeleteButton';

export const FlowerPage = () => {
  const { month, day } = useParams();
  const [isVisible, setIsVisible] = useState(true);

  const chosenDay = {
    flowerId: 'sad',
    interactions: {
      movement: false,
      friends: false,
      nature: false,
      sleep: false,
      meditation: false,
      therapy: false,
    },
  };

  const interactionLabels = {
    movement: 'Pohyb',
    friends: 'Setkání s přáteli',
    nature: 'Pobyt v přírodě',
    sleep: 'Kvalitní spánek',
    meditation: 'Meditace',
    therapy: 'Terapie',
  };

  const [interactions, setInteractions] = useState(chosenDay.interactions);

  /*
  const handleClick = () => {
    console.log(`Interacting with flower ${month}-${day}`);
  };
  */

  const handleClick = (key) => {
    setInteractions((prev) => ({
      ...prev,
      [key]: !prev[key],
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
                  active={interactions[key]}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
