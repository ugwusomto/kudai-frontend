import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../constants/routes';

function Header() {
  return (
    <div className="container-fluid">
      <nav className="p-3 w-100 bg-primary ">
        <div className="container-fluid">
          <Link className="p-3 text-center text-white h3" to={RoutesPath.HOME}>
            TOZO BANK
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
