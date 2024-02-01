import { NavLink } from 'react-router-dom';
import myLogo from '../images/myLogo.png';

import './styled/Header.css';

const Header = () => {
  return (
    <header className='container-header'>
      <ul className="list-nav">
        <li>
          <img className="logo" src={myLogo} alt="" />
        </li>
        <li>
          <NavLink to="/" end className="nav-link" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="nav-link" activeclassname="active">
            Movies
          </NavLink>
        </li>
      </ul>
      <h2 className="header-title">GOLD SCREEN</h2>
    </header>
  );
};

export default Header;
