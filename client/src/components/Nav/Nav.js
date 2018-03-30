import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
  <ul className="nav nav-tabs">
    <li className="nav-item">
        <Link to={"/home"} className='nav-link'>
          <strong>
            Ipsum Thumber
          </strong>
        </Link>
    </li>
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

export default Nav;
