import React from 'react';
import ReactDOM from 'react-dom';

// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// following code from 21-MERN\01-Activities\28-Stu_Mini-Project\Main\client\src\index.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// Following code from original create react app:

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//     document.getElementById('root')

// );