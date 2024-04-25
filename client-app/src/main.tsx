import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import 'semantic-ui-css/semantic.min.css'
// import './index.css'
import './app/layout/styles.css';
import App from './app/layout/App';
import { store, StoreContext } from './app/stores/store';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <StoreContext.Provider value={store}>
  <App />
  </StoreContext.Provider>

)
