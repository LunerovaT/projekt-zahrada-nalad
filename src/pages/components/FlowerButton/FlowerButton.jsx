import { FlowerImage } from '../FlowerImage/FlowerImage';
import './FlowerButton.css';

export const FlowerButton = ({ flowerId, onClick }) => {
  return (
    <div className="flower-button-wrapper">
      <button onClick={onClick} className="flowerButton">
        {flowerId ? <FlowerImage flowerId={flowerId} /> : null}
      </button>
    </div>
  );
};
