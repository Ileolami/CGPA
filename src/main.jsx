import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';
import { CgpaProvider } from './contexts/CgpaContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CgpaProvider>
      <App/>
      <Toaster/>
    </CgpaProvider>
  </React.StrictMode>,
)
