import React from 'react';
import ReactDOM from 'react-dom/client';
import './mystyle/MyStyle.scss';
import './mystyle/media.scss'
import App from './App';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider';
import { Provider } from 'react-redux'
import store from './configStore';
import { BrowserRouter, Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);