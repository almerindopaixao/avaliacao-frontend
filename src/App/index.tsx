import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Routes } from '../routes';
import { Header } from '../patterns';
import 'react-toastify/dist/ReactToastify.min.css';

import '../styles/main.scss';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <ToastContainer autoClose={6000} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;
