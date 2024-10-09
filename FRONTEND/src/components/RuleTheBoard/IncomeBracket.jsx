import React from 'react';
import { Link } from 'react-router-dom';
import './Incomebracket.css';

function IncomeBracket() {
  return (
    <div className="wrapper">
      <div className="container">
        <Link to="/gameconnect">
          <button id="getStarted">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default IncomeBracket;
