import { NavLink } from 'react-router-dom';
import React from 'react';
import planet from '../assets/planet.png';
import './Header.module.css';

function Header() {
  return (
    <header>
      <NavLink to="/rockets">
        <img src={planet} alt="logo" className="logo-img" />
        <h1 className="title">Space Travelers Hub</h1>
      </NavLink>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/rockets"
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/missions"
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
