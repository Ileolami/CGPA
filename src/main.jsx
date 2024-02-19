import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { CgpaProvider } from './contexts/CgpaContext.jsx';
import { AuthContextProvider } from './contexts/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <CgpaProvider>
      <App/>
      <Toaster/>
    </CgpaProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
