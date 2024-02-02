import { NavLink } from 'react-router-dom';
import myLogo from '../../images/myLogo.png';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.container}>
      <ul className={s.listNav}>
        <li>
          <img className={s.logo} src={myLogo} alt="" />
        </li>
        <li>
          <NavLink to="/" end className={s.navLink}>
            {({ isActive }) => (
              <span className={isActive ? s.active : ''}>Home</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={s.navLink}>
            {({ isActive }) => (
              <span className={isActive ? s.active : ''}>Movies</span>
            )}
          </NavLink>
        </li>
      </ul>
      <h2 className={s.title}>GOLD SCREEN</h2>
    </header>
  );
};

export default Header;
