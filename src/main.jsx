import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import WalletConnectionProvider from './providers/WalletConnectionProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletConnectionProvider>
      <App />
    </WalletConnectionProvider>
  </React.StrictMode>
);
