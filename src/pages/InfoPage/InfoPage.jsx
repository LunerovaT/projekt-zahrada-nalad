import happy from '../HomePage/img/happy.svg';
import calm from '../HomePage/img/calm.svg';
import sad from '../HomePage/img/sad.svg';
import anxious from '../HomePage/img/anxious.svg';
import angry from '../HomePage/img/angry.svg';
import './InfoPage.css';
import '../../global.css';
import { Link } from 'react-router-dom';

export const InfoPage = () => {
  return (
    <div className="background">
      <div className="block block-alt">
        <div className="box">
          <div className="text-section">
            <h1>Zahrada nálad</h1>
            <p>
              Každý den si vyber, jak se cítíš, a sleduj, jak z emocí vyrůstají
              jedinečné květiny. Tvé pocity postupně tvoří osobní zahradu, ke
              které se můžeš vracet.
            </p>
            <p>
              Květiny se mění podle toho, jak o sebe během dne pečuješ a rostou
              s tebou.
            </p>
          </div>
          <div className="mood-list">
            <div className="mood-item">
              <img src={happy} alt="happy" />
              <p>Šťastný/á</p>
            </div>
            <div className="mood-item">
              <img src={calm} alt="calm" />
              <p>Klidný/á</p>
            </div>
            <div className="mood-item">
              <img src={sad} alt="sad" />
              <p>Smutný/á</p>
            </div>
            <div className="mood-item">
              <img src={anxious} alt="anxious" />
              <p>Mám obavy/ úzkost</p>
            </div>
            <div className="mood-item">
              <img src={angry} alt="angry" />
              <p>Naštvaný/á</p>
            </div>
          </div>
          <Link to="/calendar" className="homepage-button-calendar">
            Kalendář
          </Link>
        </div>
      </div>
    </div>
  );
};
