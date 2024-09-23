import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Weather Guys Dashboard</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/storm-updates">Storm Updates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/storm-reports">Storm Reports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shelters">Shelters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/school-closings">School Closings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/power-outages">Power Outages</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
