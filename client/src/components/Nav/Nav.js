import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to={"/home"} className='navbar-brand'>
          <strong>
            Ipsum Thumber
          </strong>
        </Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/all"} className='nav-link'>
              <strong>
                All Ipsums
              </strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/random"} className='nav-link'>
              <strong>
                Random Ipsum
              </strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/favorites"} className='nav-link'>
              <strong>
                Favorite Ipsums
              </strong>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;
