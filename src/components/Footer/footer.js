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
        <li>About</li>
        <li>Mission</li>
        <li>Services</li>
        <li>Social</li>
        <li>Get in touch</li>
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
        <li><Link to={'/contact'}>Contact us</Link></li>
        <li>Web chat</li>
        <li>Open ticket</li>
      </ul>
    </div>
    <div className="col social">
      <h1>Social</h1>
      <ul>
        <li><img src="https://svgshare.com/i/5fq.svg" width="32" style="width: 32px;" /></li>
        <li><img src="https://svgshare.com/i/5eA.svg" width="32" style="width: 32px;" /></li>
        <li><img src="https://svgshare.com/i/5f_.svg" width="32" style="width: 32px;" /></li>
      </ul>
    </div>
  <div className="clearfix"></div>
  </div>

    </footer>
  );
};

export default footer;