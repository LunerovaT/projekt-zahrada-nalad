import happy from './../../HomePage/img/happy.svg';
import calm from './../../HomePage/img/calm.svg';
import sad from './../../HomePage/img/sad.svg';
import anxious from './../../HomePage/img/anxious.svg';
import angry from './../../HomePage/img/angry.svg';
import '../../FlowerPage/FlowerPage.css';
import '../../../global.css';

export const FlowerImage = ({ flowerId }) => {
  const flowerImages = {
    happy,
    calm,
    sad,
    anxious,
    angry,
  };

  return <img src={flowerImages[flowerId]} alt={flowerId} />;
};
