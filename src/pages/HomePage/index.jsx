import './style.css';
import backround2 from './img/backround2.svg';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block">
            <img
              src={backround2}
              alt="Hlavní stránka"
              className="homepage-image"
            />
            <Link to="/info" className="homepage-button-vstupte">
              Vstupte
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
