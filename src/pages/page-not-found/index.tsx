import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { RoutesPath } from '../../constants/routes';
import Header from '../components/header';
function ErrorPage() {
  return (
    <div className="container-fluid">
      <Header />

      <div className="p-4 row">
        <div className="col-md-12 shadow text-center p-5">
          <h1 className="p-5">Page Not Found</h1>
          <Link to={RoutesPath.HOME} className="btn mr-2 mt-4  btn-primary">
            Go Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
