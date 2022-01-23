import React from "react";
import {Link as LinkRouter} from 'react-router-dom';
//import CitiesCards from "./CitiesCards";
import avion from '../Images/avion.jpg'
import user6 from '../Images/user6.png'
//import {Link} from 'react-router-dom';
import Login from './Login'


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <LinkRouter to='/'>
            <div>
              <img src={avion} width='80'></img>
              <h5> MyTinerary</h5>
              </div>
          </LinkRouter>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <LinkRouter className="nav-link" to='/'> Home
              </LinkRouter>

              <LinkRouter className="nav-link" to='/cities'> Cities
              </LinkRouter>




              <div class="dropdown">
                <button class="btn btn-dark dropdown-toggle"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={user6} width='35'></img>
                </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><LinkRouter class="dropdown-item" to="/login">Sign In</LinkRouter></li>
                <li><LinkRouter class="dropdown-item" to="/signup">Sign Up</LinkRouter></li>
              </ul>
            </div>
              

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
