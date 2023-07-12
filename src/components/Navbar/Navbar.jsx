import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import languageImg from "../../assets/mzn-flag.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link className='link' to="/">
          <span className="logo">Melvinbooking</span>
        </Link>
        <div className='right'>
          <div className="navbarRightItem">
            <span className='currency'>MZN</span>
          </div>
          <div className="navbarRightItem">
            <div className="imgContainer">
              <img src={languageImg} alt="" className="languageImg" />
            </div>
          </div>
          <div className="navbarRightItem">
            <div className="help">
              <span>?</span>
            </div>
          </div>
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar