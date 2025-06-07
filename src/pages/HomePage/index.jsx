import './style.css';
import mountain from './img/mountain.svg';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="container">
      <main>
        <div className="page-wrapper">
          <div className="block">
            <img
              src={mountain}
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
