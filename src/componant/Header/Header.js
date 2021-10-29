import React from 'react';
import { NavLink } from 'react-router-dom';
import UseFirebase from '../../Hook/UseFirebase';
import './Header.css';

const Header = () => {
    const {user,logOut}=UseFirebase()
    return (
 <div>
  <nav className="navbar navbar-expand-lg nav-back">
  <div className="container-fluid">
    <button className="navbar-toggler togg-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 pb-2 pt-2">
        <li className="nav-item">
          <NavLink to="/home" className="ankor ms-3">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contact" className="ankor ms-3">Contact Us</NavLink>
        </li>

        <li className="nav-item">
               <span className="text-white ms-3 ankor">{user.displayName}</span>
                { user.email?<button className="ms-3" onClick={logOut}>Sign out</button>:
                <NavLink className="ankor ms-3" to="/login">Login</NavLink>

                }
        </li>
     </ul>
    </div>
  </div>
  </nav>
 </div>
    );
};

export default Header;