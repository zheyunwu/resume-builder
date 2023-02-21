import React from 'react';
import logo from 'assets/logo.svg';
import './Home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Resume Builder
        </p>
        <Link
          className="App-link"
          to="/app"
          rel="noopener noreferrer"
        >
          Go to App
        </Link>
      </header>
    </div>
  );
}

