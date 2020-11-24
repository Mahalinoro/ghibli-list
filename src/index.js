import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
