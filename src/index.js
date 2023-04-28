import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { API_BASE_URL } from './Utils/Constant';


const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.post['Accept'] = 'application/json';
let token = localStorage.getItem('token');
if (token !== null) {
  axios.defaults.headers.common['Authorization'] = `Bearer 6c6fea0ba6859158b2ce52c2336b71cc21e4a59cf7bba5e7eb98aac6b3090fd40e52c344978806cbe6226480d6f01428bac85023adc934c38517b304fb24ddf68cce8f84c490803b93955671b80565ca84c8c910148e5cf1f9d38d20b8fcb0e54b67cf00479444bd347293e9007713a5ab94c934f1d6ecf9d7837521be86bfc2`;
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
