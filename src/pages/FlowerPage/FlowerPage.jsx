import { useParams } from 'react-router-dom';
import '../../global.css';
import { FlowerImage } from '../components/FlowerImage/FlowerImage';
import { InteractionButton } from '../components/InteractionButton/InteractionButton';

export const FlowerPage = () => {
  const { flowerId } = useParams();

  const handleClick = () => {
    console.log(`Interacting with flower ${flowerId}`);
  };

  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block flower-background block-flower-background">
            <FlowerImage flowerId={flowerId} />
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
