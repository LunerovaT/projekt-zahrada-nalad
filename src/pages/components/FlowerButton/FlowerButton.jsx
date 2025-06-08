import { FlowerImage } from '../FlowerImage/FlowerImage';
import './FlowerButton.css';

export const FlowerButton = ({ flowerId }) => {
  return (
    <div className="flower-button-wrapper">
      <button className="flowerButton">
        {flowerId ? <FlowerImage flowerId={flowerId} /> : null}
      </button>
    </div>
  );
};
