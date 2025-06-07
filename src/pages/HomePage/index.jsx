import './style.css';
import hlavniStrana from './img/hlavni-strana.svg';

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
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};
