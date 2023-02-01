import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// ? Redux
import { Provider } from 'react-redux'
import store from './store'
// ? Router
import { HashRouter } from 'react-router-dom'
import "bootswatch/dist/lux/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* HashRouter is used when it is a single page app (SPA) */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
