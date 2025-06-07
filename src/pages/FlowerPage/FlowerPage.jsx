import { useParams } from 'react-router-dom';
import '../../global.css';
import happy from '../HomePage/img/happy.svg';
import calm from '../HomePage/img/calm.svg';
import sad from '../HomePage/img/sad.svg';
import anxious from '../HomePage/img/anxious.svg';
import angry from '../HomePage/img/angry.svg';
import './FlowerPage.css';

export const FlowerPage = () => {
  const { flowerId } = useParams();
  const flowerImages = {
    happy,
    calm,
    sad,
    anxious,
    angry,
  };
  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block block-flower-background">
            <img src={flowerImages[flowerId]} alt={flowerId} />
          </div>
        </div>
      </main>
    </div>
  );
};
