import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import styles from './Header.module.css';

const Header = () => {
  return {
    <header>
      <NavLink to="/">
        <img src={planet} alt="logo" className="logo-img" />
        <h1 className="title">Space Travelers Hub</h1>
      </NavLink>
      <nav className="header__nav">
        <ul>
        <li>
            <NavLink 
              className={({ isActive }) => ( isActive ? 'active' : '')}
              to="/rockets"
            >
              Rockets
            </NavLink>
          </li> 
          <li>
            <NavLink 
              className={({ isActive }) => ( isActive ? 'active' : '')}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  }
};

export default Header;
