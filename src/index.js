import React from 'react';
import ReactDOM from 'react-dom/client';
import './mystyle/MyStyle.scss';
import './mystyle/media.scss'
import App from './App';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider';
import { Provider } from 'react-redux'
import store from './configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);