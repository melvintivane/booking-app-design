import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <span className="logo">Melvinbooking</span>
        <div>
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar