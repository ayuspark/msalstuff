import './App.css';

import MSAL from 'msal';
import React from 'react';

import logo from './logo.svg';

onSignInClick = () =>
{
  alert('hey');
  const config =
  {
    auth:
    {
      clientId: 'bf04bdab-e06f-44f3-9821-d3af64fc93a9',
      authority: `https://login.microsoftonline.com/common`,
      redirectUri: 'https:raas.local',
      postLogoutRedirectUri: window.location.origin,
    },
    cache:
    {
      cacheLocation: 'localStorage'
    },
    system:
    {
      loadFrameTimeout: 30000
    }
  };
  const msal = new MSAL.UserAgentApplication(config);
  msal.loginRedirect()
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>luwa</p>
        <button onClick={ onSignInClick }>Sign in</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
