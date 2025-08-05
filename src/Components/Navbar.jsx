import React from 'react';
import icon from '../assets/Instagram_icon.png';
import txt from '../assets/Instagram_txt.png';

function Navbar() {
  return (
    <nav className="navbar bg-light px-4">
      <img src={icon} alt="icon" style={{ width: '35px', marginRight: '5px' }} />
      <img src={txt} alt="text" style={{ width: '50px' }} />
    </nav>
  );
}

export default Navbar;