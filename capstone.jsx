import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './capstoneApp.js';
import { BrowserRouter } from "react-router-dom";
import './capstone.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>)