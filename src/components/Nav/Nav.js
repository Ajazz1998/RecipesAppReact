import React from 'react';
import Container from "../reusableComponents/Container";
import Search from "../Search/Search";
import Mainnav from '../Mainnav/mainnav';
import Logo from "./Logo";
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <Container>
        <Logo />
        <Mainnav />
        <Search />
      </Container>
    </nav>
  );
};


export default Nav;
