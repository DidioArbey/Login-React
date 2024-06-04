import React from 'react'
import ReactDOM from 'react-dom/client'
import { JornalApp } from './JornalApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store  from './store/store.js'

import './styles.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JornalApp />
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
