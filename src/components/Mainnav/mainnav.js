import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './mainnav.css';

class MainNav extends Component {

  render() {

    return(
      <nav className="main-nav">

        <div>

          <Link to={'/home'}>
            <p className='active'>Home</p>
          </Link>

          <Link to={'/contact'}>
             <p>contacts us</p>
          </Link>

          <Link to={'/about'}>
             <p>About</p>
          </Link>


        </div>

      </nav>
    );
  }
}


export default MainNav;