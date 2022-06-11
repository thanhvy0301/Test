import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Categories from "./page/CategoryCarRental/CatagoriesCarRen";
import './index.css';
import App from './App';
import Header from "../src/Component/Header/Header";
import Footer from "../src/Component/Footer/FooterCustomer";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header/>
      <App />
      <footer>
            <Footer/>
            </footer> 
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
