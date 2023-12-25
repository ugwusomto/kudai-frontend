import React from 'react';
import '../assets/css/app.css';
import { Link, Routes } from 'react-router-dom';
import { RoutesPath } from '../constants/routes';
import Header from './components/header';

function App() {
  return (
    <div className="container-fluid">
      <Header />

      <div className="p-4 row">
        <div className="col-md-12 shadow text-center p-5">
          <h1 className="p-5">Transfer Money Across World In Real Time</h1>
          <h4 className="p-3">An international account to send money to over 60 countries around the world, up to 7x cheaper the bank.</h4>
          <Link to={RoutesPath.CREATE_ACCOUNT} className="btn mr-2 mt-4  btn-primary">
            Create An Account
          </Link>
          <Link to={RoutesPath.LOGIN} className="btn mt-4  btn-danger">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
