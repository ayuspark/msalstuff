import './App.css';

import { UserAgentApplication } from 'msal';
import React from 'react';

import logo from './logo.svg';

function redirectCallback(error)
{
  if (error)
  {
    console.log(error);
  }
}

function onSignInClick()
{
  alert('going to the login page yo');
  const config =
  {
    auth:
    {
      clientId: 'bf04bdab-e06f-44f3-9821-d3af64fc93a9',
      authority: `https://login.microsoftonline.com/common`,
      redirectUri: 'https://raas.local',
      postLogoutRedirectUri: 'https://raas.local',
      navigateToLoginRequestUrl: false
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
  const msal = new UserAgentApplication(config);
  const authRequest = {
    scopes: [ config.auth.clientId ],
    state: 'hahaha'
  };
  msal.handleRedirectCallback(redirectCallback)
  msal.loginRedirect(authRequest);
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
