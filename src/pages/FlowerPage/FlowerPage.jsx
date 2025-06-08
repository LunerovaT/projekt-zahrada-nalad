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

  const handleClick = () => {
    console.log(`Interacting with flower ${month}-${day}`);
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
              <InteractionButton label="Pohyb" onClick={handleClick} />
              <InteractionButton
                label="Setkání s přáteli"
                onClick={handleClick}
              />
              <InteractionButton
                label="Pobyt v přírodě"
                onClick={handleClick}
              />
              <InteractionButton
                label="Kvalitní spánek"
                onClick={handleClick}
              />
              <InteractionButton label="Meditace" onClick={handleClick} />
              <InteractionButton label="Terapie" onClick={handleClick} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
