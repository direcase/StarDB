import React from 'react';

import './header.css';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className="container-fluid d-flex">
      <h3>
        <a className="navbar-brand" href="#">
          Star DB
        </a>
      </h3>
      <ul className="navbar-nav me-auto">
        <li className='nav-item'>
          <a className="nav-link active" href="#">People</a>
        </li>
        <li className='nav-item'>
          <a className="nav-link active" href="#">Planets</a>
        </li>
        <li className='nav-item'>
          <a className="nav-link active" href="#">Starships</a>
        </li>
      </ul>
    </div>
    </nav>
    
  );
};

export default Header;