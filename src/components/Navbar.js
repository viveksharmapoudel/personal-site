import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className='navbar'>
      <ul className='navLinks'>
        <li className='navLink'>
          <Link activeClass='active' to='home' spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li className='navLink'>
          <Link to='about' spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li className='navLink'>
          <Link to='portfolio' spy={true} smooth={true}>
            Portfolio
          </Link>
        </li>
        <li className='navLink'>
          <Link to='contact' spy={true} smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
