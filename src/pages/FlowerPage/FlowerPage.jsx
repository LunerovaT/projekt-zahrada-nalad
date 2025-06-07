import { useParams } from 'react-router-dom';
import '../../global.css';
import { FlowerImage } from '../components/FlowerImage/FlowerImage';

export const FlowerPage = () => {
  const { flowerId } = useParams();

  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block flower-background block-flower-background">
            <FlowerImage flowerId={flowerId} />
          </div>
        </div>
      </main>
    </div>
  );
};
