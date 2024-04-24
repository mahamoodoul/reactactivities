import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import 'semantic-ui-css/semantic.min.css'
// import './index.css'
import './app/layout/styles.css';
import App from './app/layout/App';
import { store, StoreContext } from './app/stores/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode value = {store} >
    <App />
  </React.StrictMode>

)
