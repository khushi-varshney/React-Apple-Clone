import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

createRoot(document.getElementById('root')).render(

    <Auth0Provider
    domain="dev-fd2jdpf30mjtgsj7.us.auth0.com"
    clientId="066mJhGHv8P2lJi0osfjttjiAw1GNIa5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App />
    </Auth0Provider>

)
