import React from 'react';
import { Link, Routes } from 'react-router-dom';
import { RoutesPath } from '../../constants/routes';
import Header from '../components/header';

function Login() {
  return (
    <div className="container-fluid">
      <Header />

      <div className="p-4 row">
        <div className="col-md-12 shadow text-center p-5">
          <h3 className='p-4'>Login Into Your Here</h3>
          <form className="w-50 mx-auto" action="">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Username
              </span>
              <input type="text" className="form-control" placeholder="Enter your username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Password
              </span>
              <input type="text" className="form-control" placeholder="Enter your password" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 text-center">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
            <p>Don't have an account ? <Link to={RoutesPath.CREATE_ACCOUNT}> Register </Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
