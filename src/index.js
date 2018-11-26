import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Azure AD B2C authentication https://www.azurefromthetrenches.com/using-reactjs-with-azure-ad-b2c/
import authentication from 'react-azure-adb2c';
require('dotenv').config();

console.log(process.env.REACT_APP_TENANT_NAME);

authentication.initialize({
    tenant: process.env.REACT_APP_TENANT_NAME,
    signInPolicy: process.env.REACT_APP_SIGN_IN_POLICY,
    applicationId: process.env.REACT_APP_APP_ID,
    cacheLocation: process.env.REACT_APP_CACHE_LOCATION,
    scopes: [process.env.REACT_APP_SCOPES],
    postLogoutRedirectUri: window.location.origin
});


//Protect the entire app with Azure AD B2C
authentication.run(() => {
    
    ReactDOM.render(<App />, document.getElementById('root'));
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
});