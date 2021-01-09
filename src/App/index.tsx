import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Routes } from '../routes';
import { Header } from '../patterns';
import 'react-toastify/dist/ReactToastify.min.css';

import '../styles/main.scss';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

export default App;
