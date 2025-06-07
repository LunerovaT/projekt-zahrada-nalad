import './style.css';
import hlavniStrana from './img/hlavni-strana.svg';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="container">
      <header></header>
      <main>
        <div className="page-wrapper">
          {' '}
          <div className="block">
            {' '}
            <img
              src={hlavniStrana}
              alt="Hlavní stránka"
              className="homepage-image"
            />
            <Link to="/info">
              <button className="homepage_button_vstupte">Vstupte</button>
            </Link>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};
