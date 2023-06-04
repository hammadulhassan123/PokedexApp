import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import {createBrowserHistory} from "history";

const history = createBrowserHistory

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router history={history} >
          <App />
     </Router>
  </React.StrictMode>,
)
