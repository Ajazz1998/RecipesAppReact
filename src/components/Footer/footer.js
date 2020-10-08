import React from 'react';
import { Link } from 'react-router-dom';
import '../Contact/contact';
import './footer.css';

const footer = () => {
  return(
    <footer className="footer">

    <div className="contain">
    <div className="col">
      <h1>Accounts</h1>
      <ul>
      <li><Link to={'/about'}>About</Link></li>
      <li>Mission</li>
        <li>Services</li>
        <li><Link to={'/contact'}>Get in touch</Link></li>
      </ul>
    </div>
    <div className="col">
      <h1>Resources</h1>
      <ul>
        <li>Webmail</li>
        <li>Redeem code</li>
        <li>WHOIS lookup</li>
        <li>Site map</li>
        <li>Web templates</li>
        <li>Email templates</li>
      </ul>
    </div>
    <div className="col">
      <h1>Support</h1>
      <ul>
        <li>Web chat</li>
        <li>Open ticket</li>
      </ul>
    </div>
    <div className="col social">
      <h1>Social</h1>
      <ul>
        <li> <a href="https://github.com/Ajazz1998"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="img" /></a> </li>
        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png" alt="img" /></li>
        <li><img src="https://mavitecgreenenergy.com/wp-content/uploads/2016/04/Linkedin-Icon.png" alt="img" /></li>
      </ul>
    </div>
  <div className="clearfix"></div>
  </div>

    </footer>
  );
};

export default footer;