import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"
import { store } from './App/store';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<App />
</Provider>

  
  
);

reportWebVitals();



